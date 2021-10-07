var carta1 = {
  nome: "T-Rex",
  imagem:
    "https://img.freepik.com/vetores-gratis/desenhos-animados-tiranossauro-rex-rugindo_29190-5004.jpg?size=338&ext=jpg",
  atributos: {
    ataque: 10,
    defesa: 8,
    velocidade: 6
  }
};

var carta2 = {
  nome: "Triceratops",
  imagem:
    "https://i.pinimg.com/originals/bf/a3/04/bfa304998132670fa4ff3255cd1a5a06.jpg",
  atributos: {
    ataque: 6,
    defesa: 10,
    velocidade: 2
  }
};

var carta3 = {
  nome: "Pteranodonte",
  imagem:
    "https://st.depositphotos.com/1967477/3575/v/600/depositphotos_35750239-stock-illustration-happy-pterodactyl-cartoon.jpg",
  atributos: {
    ataque: 8,
    defesa: 9,
    velocidade: 10
  }
};

var carta4 = {
  nome: "Paquicefalossauro",
  imagem:
    "https://img.freepik.com/vetores-gratis/ilustracao-dos-desenhos-animados-do-pequeno-paquicefalossauro_7814-685.jpg?size=626&ext=jpg",
  atributos: {
    ataque: 9,
    defesa: 9,
    velocidade: 9
  }
};

var carta5 = {
  nome: "Estegossauro",
  imagem:
    "https://img.freepik.com/vetores-gratis/ilustracao-dos-desenhos-animados-do-pequeno-estegossauro_7814-688.jpg?size=626&ext=jpg",
  atributos: {
    ataque: 2,
    defesa: 8,
    velocidade: 1
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "VENCEU!!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "VOCÊ PERDEU!!";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(cartaMaquina);
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
    ("<br>");
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}