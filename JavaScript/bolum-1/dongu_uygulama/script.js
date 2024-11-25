let sayilar = [3, 5, 7, 8, 12, 23, 45, 66];

//1-sayılar dizisindeki her bir sayının karesini yazdırınız.

for (let i = 0; i < sayilar.length; i++) {
  console.log(Math.pow(sayilar[i], 2));
}

console.log(" ");
console.log(" ");

//2-sayilar listesindeki hangi sayılar 5'in katıdır?

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 5 == 0) {
    console.log(sayilar[i] + " ");
  }
}

console.log(" ");
console.log(" ");

//3-50-100 arasındaki sayıları azalan şekilde yazdırınız

for (let sayi = 100; sayi >= 50; sayi--) {
  console.log(sayi);
}

console.log(" ");
console.log(" ");

let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];

//4-urunler listesindeki tüm ürünleri büyük harfe çeviriniz
for (let urun = 0; urun < urunler.length; urun++) {
  console.log(urunler[urun].toUpperCase());
}

console.log(" ");
console.log(" ");

//5-urunler listesinde bulunan samsung kelimesi geçen kaç kelime vardır?

for (let y = 0; y < urunler.length; y++) {
  if (urunler[y].includes("samsung")) {
    console.log(urunler[y]);
  }
}

let ogrenciler = [
  { ad: "Yiğit", soyad: "Bilgi", notlar: [60, 70, 80] },
  { ad: "Ada", soyad: "Bilgi", notlar: [80, 50, 75] },
  { ad: "Çınar", soyad: "Turan", notlar: [70, 70, 80] },
];

//6-Öğrenciler listesindeki her öğrencinin not ortalaması ve başarı durumu yazdırınız

let toplam_ort = 0;
for (let a = 0; a < ogrenciler.length; a++) {
  let ortalama = 0;
  let not_toplam = 0;
  for (let b = 0; b < ogrenciler[a].notlar.length; b++) {
    not_toplam += ogrenciler[a].notlar[b];
  }
  ortalama = not_toplam / 3;

  if (ortalama >= 70) {
    console.log("Başarılı bir ortalama: " + ortalama);
  } else if (ortalama < 70 && ortalama >= 50) {
    console.log("Orta Başarılı bir ortalama: " + ortalama);
  } else {
    console.log("Düşük ortalama: " + ortalama);
  }
  toplam_ort += ortalama;
}
console.log("Genel ortalama: " + toplam_ort);

//Tüm öğrencilerin not ortalaması nedir?
