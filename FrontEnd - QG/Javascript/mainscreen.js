function createNewCard(nomeProduto, /*imagemUsuario,*/ localizacao) {
    let listaCards = document.querySelector("#listaCards");
    let card = document.createElement("div");
    /* let img = document.createElement("imagemUsuario"); */
    let cardBody = document.createElement("div");
    let h5 = document.createElement("h5"); //h4
    let localEl = document.createElement("p"); //categoriaEl
    let botao = document.createElement("a");
  
    card.setAttribute("class", "card");
    img.setAttribute("class", "card-img-top img-user");
    img.setAttribute("src", imagem);
    cardBody.setAttribute("class", "card-body");
    localEl.setAttribute("class", "card-text");
    h5.innerText = nomeProduto;
    localEl.innerHTML = localizacao;
    botao.setAttribute("class", "btn btn-primary");
    botao.innerText = "Detalhes Pedido";
    botao.addEventListener("click", ()=>{
      let item = {
        nome: nome,
        img: imagem,
        preco: preco,
        usuario: usuario
      }
      localStorage.setItem('produto', JSON.stringify(item));
      window.location.href = 'terminar.html'
    });
  
    card.append(img);
    card.append(cardBody);
    cardBody.append(h5);
    cardBody.append(localEl);
    cardBody.append(botao);
    listaCards.append(card);
  }
