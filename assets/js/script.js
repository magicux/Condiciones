// Desafío 1: Borde rojo a imagen
const img = document.getElementById("imagen-borde");
img.addEventListener("click", () => {
  img.classList.toggle("con-borde");
});

// Desafío 2: Stickers
document.getElementById("verificar-stickers").addEventListener("click", () => {
  const val1 = parseInt(document.getElementById("sticker1").value) || 0;
  const val2 = parseInt(document.getElementById("sticker2").value) || 0;
  const val3 = parseInt(document.getElementById("sticker3").value) || 0;

  const total = val1 + val2 + val3;
  const resultado = document.getElementById("resultado-stickers");

  if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers`;
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
});

// Desafío 3: Validar password
const select1 = document.getElementById("digit1");
const select2 = document.getElementById("digit2");
const select3 = document.getElementById("digit3");
const resultadoPassword = document.getElementById("resultado-password");

for (let i = 1; i <= 9; i++) {
  const option = `<option value="${i}">${i}</option>`;
  select1.innerHTML += option;
  select2.innerHTML += option;
  select3.innerHTML += option;
}

document.getElementById("verificar-password").addEventListener("click", () => {
  const password = select1.value + select2.value + select3.value;

  if (password === "911") {
    resultadoPassword.textContent = "password 1 correcto";
  } else if (password === "714") {
    resultadoPassword.textContent = "password 2 correcto";
  } else {
    resultadoPassword.textContent = "password incorrecto";
  }
});
