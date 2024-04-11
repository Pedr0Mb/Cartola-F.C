function carregar() {
   
    var jogador = []
    var select = []
 
    select.push(document.getElementById("Goleiro"))
    jogador.push({
        nome: select[0].options[select[0].selectedIndex].text,
      
        imagem: select[0].options[select[0].selectedIndex].getAttribute('data-imagem'),
      });
 
    select.push(document.getElementById("LateralE"))
    jogador.push({
        nome: select[1].options[select[1].selectedIndex].text,
        imagem: select[1].options[select[1].selectedIndex].getAttribute('data-imagem')
      });
 
    select.push(document.getElementById("Zagueiro1"))
    jogador.push({
        nome: select[2].options[select[2].selectedIndex].text,
        imagem: select[2].options[select[2].selectedIndex].getAttribute('data-imagem')
      });
 
    select.push(document.getElementById("Zagueiro2"))
    jogador.push({
        nome: select[3].options[select[3].selectedIndex].text,
        imagem: select[3].options[select[3].selectedIndex].getAttribute('data-imagem')
      });
 
   if(jogador[2].nome == jogador[3].nome){
   alert("Não pode repetir jogador")
   }
   else{
    select.push(document.getElementById("LateralD"))
    jogador.push({
        nome: select[4].options[select[4].selectedIndex].text,
        imagem: select[4].options[select[4].selectedIndex].getAttribute('data-imagem')
      });
 
   select.push(document.getElementById("Meio1"))
   jogador.push({
    nome: select[5].options[select[5].selectedIndex].text,
    imagem: select[5].options[select[5].selectedIndex].getAttribute('data-imagem')
  });
 
   select.push(document.getElementById("Meio2"))
   jogador.push({
    nome: select[6].options[select[6].selectedIndex].text,
    imagem: select[6].options[select[6].selectedIndex].getAttribute('data-imagem')
  });
 
   select.push(document.getElementById("Meio3"))
   jogador.push({
    nome: select[7].options[select[7].selectedIndex].text,
    imagem: select[7].options[select[7].selectedIndex].getAttribute('data-imagem')
  });
 
   if(jogador[5].nome == jogador[6].nome || jogador[5].nome == jogador[7].nome ||jogador[6].nome == jogador[7].nome){
   alert("Não pode repetir jogador")
   }
   else{
 
   select.push(document.getElementById("Atacante1"))
   jogador.push({
    nome: select[8].options[select[8].selectedIndex].text,
    imagem: select[8].options[select[8].selectedIndex].getAttribute('data-imagem')
  });
 
   select.push(document.getElementById("Atacante2"))
   jogador.push({
    nome: select[9].options[select[9].selectedIndex].text,
    imagem: select[9].options[select[9].selectedIndex].getAttribute('data-imagem')
  });
 
   select.push(document.getElementById("Atacante3"))
   jogador.push({
    nome: select[10].options[select[10].selectedIndex].text,
    imagem: select[10].options[select[10].selectedIndex].getAttribute('data-imagem')
  });
 
   if(jogador[8].nome == jogador[9].nome || jogador[8].nome == jogador[10].nome ||jogador[9].nome == jogador[10].nome){
   alert("Não pode repetir jogador")
   } else{
    var parametros = "?jogadores=" + encodeURIComponent(JSON.stringify(jogador));
    window.location.replace("pg2.html" + parametros, "_blank");
   }
    
 
  }
  }
  }
     