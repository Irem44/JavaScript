const button1 = document.getElementById("button1");
const buton2 = document.getElementById("button2");
const input = document.querySelector("input");

function deneme1() {
  input.classList.add("renk");
  input.style.textTransform = "lowercase";
  console.log(input.value);
}

function deneme2() {
  input.classList.add("yazi");
  input.style.textTransform = "uppercase";
  console.log(input.value);
}

button1.addEventListener("click", deneme1);
button2.addEventListener("click", deneme2);
