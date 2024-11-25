//insertAdjacentElement

function insert() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.innerText = "İtem 4";

  ul.insertAdjacentElement("beforeend", li);
}

insert();

//remove 1

function remove1() {
  const eleman = document.querySelector("li:nth-child(2)");
  eleman.remove();
}

// remove1();

//removeChild
function remove2(number) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${number})`);

  ul.removeChild(li);
}

// remove2(3);

//funsction removeAll

function removeAll() {
  //1.yöntem
  //   const ul = document.querySelector("ul");
  //   ul.innerHTML = "";

  //2.yöntem
  const ul = document.querySelector("ul");

  while (ul.firstChild) {
    ul.firstChild.remove();
  }
}

// removeAll();
