//take input
const input = document.getElementById("input");
const ul = document.querySelector(".ul");
const i = document.getElementById("i");
const repeat = document.getElementById("repeat");

i.addEventListener("click", add);
repeat.addEventListener("click", reset);

function add(e) {
  e.preventDefault();

  if (input.value === "") {
    alert("Boş bırakmayınız!");
  } else {
    const item1 = create(input);
    ul.appendChild(item1);
  }
}

function create(item) {
  //checkBox
  const input = document.createElement("input");

  input.type = "checkBox";
  input.checked = true;
  const li = document.createElement("li");
  if (input.checked == true) {
    li.toggleAttribute("item-completed", item.completed);
  }

  //i
  const i = document.createElement("i");
  i.className = "bi bi-x-circle ";
  i.id = "close";

  //li

  li.appendChild(input);
  const text = document.createTextNode(" " + item.value);

  li.appendChild(text);
  li.appendChild(i);
  return li;
}

function deleted(e) {
  e.preventDefault();
  li.innerHTML = " ";
}

function reset(e) {
  e.preventDefault();
  ul.innerHTML = " ";
}

function close(e) {
  e.preventDefault();
  console.log("eleman");
}
