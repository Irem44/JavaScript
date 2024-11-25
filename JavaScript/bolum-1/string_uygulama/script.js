let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

//url kaç karakterdir?
karakterSayisi = url.length;
console.log(karakterSayisi);

//kursAdi kaç kelimeden oluşmaktadır.
kelimeSayisi = kursAdi.split(" ");
console.log(kelimeSayisi.length);

//url https ile mi başlıyor
baslangic = url.startsWith("https");
console.log(baslangic);

//kurs adı içinde Eğitimi kelimesi var mı?
icinde = kursAdi.includes("Eğitimi");
console.log(icinde);

//string oluşturma

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
kursAdi = kursAdi.replace("ş", "s");
kursAdi = kursAdi.replace("ı", "i");
sonuc = `${url}/${kursAdi}`;

console.log(sonuc);
