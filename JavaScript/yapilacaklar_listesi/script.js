//ul elemanını aldık
const doList = document.querySelector(".list");

const frm = document.getElementById("frm");
frm.addEventListener("submit", yeniEleman);
listeyeEkle();

function listeyeEkle() {
  const urunler = [
    { id: 1, name: "Kitap Oku", completed: false },
    { id: 2, name: "Spor Yap", completed: true },
    { id: 3, name: "Kuran Oku", completed: false },
    { id: 4, name: "Kod yaz", completed: false },
    { id: 5, name: "Su iç", completed: false },
  ];

  doList.innerHTML = "";
  for (let urun of urunler) {
    const ekle = uret(urun);
    doList.appendChild(ekle);
  }
}

function yeniEleman(e) {
  e.preventDefault();
  const input = document.getElementById("urun_adi");
  if (input.value.length === 0) {
    alert("Boşlukları doldurunuz");
    return;
  }

  ekleUrun(input);
}

function ekleUrun(input) {
  const yeniUrun = uret({
    id: 5,
    name: input.value,
    completed: false,
  });

  doList.appendChild(yeniUrun);
  input.value = "";
}

//ul elementinin genel içeriğini oluşturduk.Bu fonksiyonu kullanıdğımızda artık her bir urun için tekrardan li oluşturup içini doldurmak zorunda değiliz

function uret(urun) {
  //checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = urun.completed;

  //div
  const div = document.createElement("div");
  div.innerText = urun.name;

  //i
  const i = document.createElement("i");
  i.className = "bi bi-x-lg";

  //button
  const button = document.createElement("button");
  button.className = "btn delete-icon";
  button.appendChild(i);

  //li
  const li = document.createElement("li");
  li.className = "p-2 rounded";

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(button);

  return li;
}
