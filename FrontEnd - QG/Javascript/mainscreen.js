const url_base = "http://localhost:3000";
const url_adjunct = "/pedidos";
const url = url_base + url_adjunct;

getPedidos();

function getPedidos(){
    const options = {
        method: "GET",
    }
    fetch(url, options)
    .then(response => response.json())
    .then(dataRaw => {
        dataRaw.data.forEach(element => {
          console.log(element);
          createNewCard(element.name, `Campus: ${element.campus}
                         - Prédio: ${element.building} - ${element.adjunct}`, element.id);
        });
    }).catch(error => console.log(error));
}

let createEl = document.querySelector("#adicionarPedido");
createEl.addEventListener('click', createRequest)

function createRequest(){
    let name = prompt("Escreva o nome do item:");
    let category = prompt("Indique a categoria do item:");
    let campus = prompt("Indique o Campus:");
    let building = prompt("Indique o prédio:");
    let extra = prompt("Escreva o complemento da localização:");
    let notes = prompt("Detalhes:");
    let status = 0;
    let requesterId = 1;
    let pedido = {
      name,
      category,
      campus,
      building,
      'adjunct': extra,
      notes,
      status,
      requesterId
    };
    console.log(pedido);
    const options = {
      method: "POST",
      body: JSON.stringify({...pedido}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
      .then(response => document.location.reload(true))
}

function createNewCard(nomeProduto, /*imagemUsuario,*/ localizacao, id) {
    let listaCards = document.querySelector("#listaCards");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");
    let h5 = document.createElement("h5"); //h4
    let localEl = document.createElement("p"); //categoriaEl
    let botao = document.createElement("a");
  
    card.setAttribute("class", "card");
    img.setAttribute("class", "card-img-top img-user");
    img.setAttribute("src", "./Imagens/icon2.png");
    cardBody.setAttribute("class", "card-body");
    localEl.setAttribute("class", "card-text");
    h5.innerText = nomeProduto;
    localEl.innerHTML = localizacao;
    botao.setAttribute("class", "btn btn-primary");
    botao.innerText = "Detalhes Pedido";
    botao.addEventListener("click", ()=>{
        window.location.href = "./detalhesPedido.html?id=" + id;
    });
  
    card.append(img);
    card.append(cardBody);
    cardBody.append(h5);
    cardBody.append(localEl);
    cardBody.append(botao);
    listaCards.append(card);
  }
