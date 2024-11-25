const h1 = document.querySelector("h1");
const button = document.querySelector("button");

function deneme() {
  h1.className = "title";
  h1.classList.add("title2");
  h1.classList.add("title3");
  h1.classList.remove("title2");

  //yoksa ekler varsa siler
  h1.classList.toggle("title3");
  h1.classList.replace("title", "title3");
}

button.addEventListener("click", deneme);
