const input = document.querySelector(".input-name");
const submit = document.querySelector(".button-add");
const draw = document.querySelector(".button-draw");
const listaAmigos = document.querySelector(".name-list");
const resultado = document.querySelector(".result-list");

const amigos = [];
let amigo = "";

input.addEventListener("input", (e) => {
  amigo = e.target.value;
});

function adicionarAmigo() {
  if (amigo.trim()) {
    amigos.push(amigo);
    listaAmigos.insertAdjacentHTML("beforeend", `<li>${amigo}</li>`);
    input.value = "";
    amigo = "";
  } else {
    alert("Por favor, insira um nome válido.");
  }
}

function sortearAmigo() {
  const randomNumber = Math.round(Math.random() * (amigos.length - 1));

  if (amigos.length) {
    listaAmigos.style.display = "none";

    resultado.insertAdjacentHTML(
      "beforeend",
      `<li>O amigo secreto sorteado é: ${amigos[randomNumber]}</li>`
    );
  } else {
    alert("Nenhum amigo na lista");
  }
}
