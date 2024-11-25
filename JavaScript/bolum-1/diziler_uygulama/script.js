var fruit = ["Kiraz", "Karpuz", "Kavun", "Erik"];

console.log(fruit);

//dizi kaç eleman?
elemanSayisi = fruit.length;
console.log(elemanSayisi);

//Dizinin ilk ve son elemanlarını yazdırınız
console.log(
  "Dizinin ilk elemanı:" +
    fruit[0] +
    " Dizinin son elemanı:" +
    fruit[elemanSayisi - 1]
);

//Kavun dizinin bir elemanı mıdır?
var kavun = fruit.includes("Kavun");
console.log(kavun);

//Çilek elemanını dizinin sonuna ekleyiniz.
console.log(fruit);
fruit.push("Çilek");
console.log(fruit);

//Dizinin son 2 elemanını siliniz.
fruit.splice(fruit.length - 2, 2);
console.log(fruit);

//Öğrenciler

var ogrenci1 = ["Yiğit", "Bilgi", 2010, [60, 90, 90]];

var ogrenci2 = ["Ada", "Bilgi", 2012, [70, 80, 80]];

var ogrenci3 = ["Çınar", "Turan", 2017, [60, 50, 80]];

var ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

ogrenci1Yas = 2024 - ogrenciler[0][2];

ogrenci2Yas = 2024 - ogrenciler[1][2];

ogrenci3Yas = 2024 - ogrenciler[2][2];

console.log(
  "Yiğit'in yaşı: " +
    ogrenci1Yas +
    " Ada'nın yaşı: " +
    ogrenci2Yas +
    " Çınar'ın Yaşı:" +
    ogrenci3Yas
);

var ortalama1 = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3;
var ortalama2 = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3;
var ortalama3 = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3;

ortalamalar = `Yiğit'in ortalamamsı: ${ortalama1} Ada'nın ortalaması: ${ortalama2} Çınar'ın ortalaması: ${ortalama3} `;

console.log(ortalamalar);
