function update1() {
  const firstItem = document.querySelector("li:first-child");
  const p = document.createElement("p");
  p.innerText = "Merhaba";

  firstItem.replaceWith(p);
}

// update1();

function update2() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<p>Merhaba</p>";
}

update2();
