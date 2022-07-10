const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const url_base = "http://localhost:3000";
const url_adjunct = "/pedidos/" + urlParams.get('id');
const url = url_base + url_adjunct;

let titleEl = document.querySelector("#title");
let campusEl = document.querySelector("#campus");
let buildingEl = document.querySelector("#building");
let extraEl = document.querySelector("#extra");
let notesEl = document.querySelector("#notes");

fillRequest();

function fillRequest(){
    const options = {
        method: "GET"
    }
    fetch(url, options)
        .then(response => response.json())
        .then(dataRaw => {
            data = dataRaw.data[0];
            title = data.name;
            title = title.charAt(0).toUpperCase() + title.slice(1);
            titleEl.innerText = title;
            campusEl.innerText = data.campus;
            buildingEl.innerHTML = data.building;
            extraEl.innerHTML = data.adjunct;
            notesEl.innerHTML = data.notes;
        })
}