//insertAdjacentElement

function insertElement() {
  const element = document.querySelector("div");
  const baslik = document.createElement("h4");
  baslik.innerText = "Merhaba";

  element.insertAdjacentElement("afterbegin", baslik);
}

// insertElement();

//insertAdjacentText

function insertText() {
  const deneme2 = document.querySelector("div");

  deneme2.insertAdjacentText("afterbegin", "Hellooo");
}

// insertText();

//insertAdjacentHTML

function insertHTML() {
  const deneme3 = document.querySelector("h2");

  deneme3.insertAdjacentHTML("afterend", "<p>Bu bir p etiketi</p>");
}

// insertHTML();

//insertBefore

function insertBefore() {
  const deneme4 = document.querySelector("div");
  const deneme5 = document.querySelector("h2");

  const element2 = document.createElement("h5");
  element2.innerText = "Bu bir h5 etiketidir";

  deneme4.insertBefore(element2, deneme5);
}

insertBefore();
