const li = document.createElement("li");
li.className = "item";
li.id = "item";
li.setAttribute("data-id", 5);
li.innerText = "item 4";

document.getElementById("items").appendChild(li);

const h1 = document.createElement("h1");
h1.className = "h1";
h1.id = "h1";
h1.style.color = "yellow";
h1.innerText = "Bu bir başlık";
h1.style.fontSize = "50px";

document.getElementById("items").appendChild(h1);

const div = document.createElement("div");
div.style.backgroundColor = "red";
div.innerText = "Merhaba";

document.getElementById("items").appendChild(div);
