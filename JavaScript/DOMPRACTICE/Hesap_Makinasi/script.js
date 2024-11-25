//take button
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

//take inputs
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const sonuc = document.getElementById("sonuc");

//variables
let number1;
let number2;
let resault;

//adding event to buttons
button1.addEventListener("click", addition);
button2.addEventListener("click", subtraction);
button3.addEventListener("click", multiplication);
button4.addEventListener("click", division);

//Preparing function for addition
function addition(e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("Eksik sayı veya geçersiz karakter girişi!");
  } else {
    number1 = parseInt(input1.value);
    number2 = parseInt(input2.value);
    resault = number1 + number2;
    sonuc.value = `Sonuç: ${resault}`;
  }
}

//Preparing function for subtraction

function subtraction(e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("Eksik sayı veya geçersiz karakter girişi!");
  } else {
    number1 = parseInt(input1.value);
    number2 = parseInt(input2.value);
    resault = number1 - number2;
    sonuc.value = `Sonuç: ${resault}`;
  }
}

//Preaparing function for multiplication

function multiplication(e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("Eksik sayı veya geçersiz karakter girişi!");
  } else {
    number1 = parseInt(input1.value);
    number2 = parseInt(input2.value);
    resault = number1 * number2;
    sonuc.value = `Sonuç: ${resault}`;
  }
}

//Preaparing function for division
function division(e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("Eksik sayı veya geçersiz karakter girişi!");
  } else {
    number1 = parseInt(input1.value);
    number2 = parseInt(input2.value);
    if (number2 === 0) {
      alert("İkinci sayıyı başka bir sayı giriniz!");
      return;
    }
    resault = number1 / number2;
    sonuc.value = `Sonuç: ${resault}`;
  }
}
