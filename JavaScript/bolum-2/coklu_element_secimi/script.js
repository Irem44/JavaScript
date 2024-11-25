let sonuc;
sonuc = document.getElementsByClassName("item");

const items = sonuc;

for (let item of items) {
  item.style.color = "red";
  item.style.fontSize = "25px";
}

sonuc = document.getElementsByTagName("li");
sonuc = document.getElementsByTagName("li")[0];
sonuc = document.getElementsByTagName("li")[0].style.color = "blue";

const its = document.querySelectorAll("#group2 .item");
its = document.querySelectorAll("#group2 .item")[0].style.color = "green";

console.log(its);
