function obterParametrosUrl() {
    var parametros = {};
    var queryString = window.location.search.substring(1);
    var pares = queryString.split("&");
    pares.forEach(function(par) {
      var partes = par.split("=");
      var chave = decodeURIComponent(partes[0]);
      var valor = decodeURIComponent(partes[1]);
      parametros[chave] = valor;

    });
    return parametros; 
  }

  function exibirListaJogadores(jogadores) {
    const timeSelecionadoList = document.getElementById("timeSelecionadoList");
    
    jogadores.forEach(jogador => {
      const listItem = document.createElement("li");
      const imagem = document.createElement("img");
      imagem.src = jogador.imagem;
      imagem.setAttribute('class', 'im')
      const nomeJogador = document.createElement("span");
      nomeJogador.textContent = jogador.nome;
      listItem.appendChild(imagem);
      listItem.appendChild(nomeJogador);
      timeSelecionadoList.appendChild(listItem);
    });
  }

  window.addEventListener("load", function() {
    var parametros = obterParametrosUrl();
    var jogadoresSelecionados = JSON.parse(decodeURIComponent(parametros["jogadores"]));
    exibirListaJogadores(jogadoresSelecionados);
  });