//Bir sayının 50-100 arasında olup olmadığını kontrol ediniz

let number = 99;

if (number >= 50 && number <= 100) {
  console.log("Girilen sayı kurala uyuyor");
} else {
  console.log("Girilen sayı kurala uymuyor");
}

//Bir sayının pozitif çift sayı olup olmadığını kontrol ediniz

if (number > 0 && number % 2 == 0) {
  console.log("Sayı pozitif çift bir sayıdır");
} else if (number > 0 && !(number % 2 == 0)) {
  console.log("Sayı pozitif ama çift değil");
} else {
  console.log("Sayı  neagatif");
}

//x,y,z sayılarının büyüklük karşlaştırmasını yapınız
let x = 15;
let y = 20;
let z = 5;

if (x > y && x > z) {
  console.log("En büyük sayı x sayısıdır");
} else if (y > x && y > z) {
  console.log("En büyük sayı y sayısıdır");
} else if (z > x && z > y) {
  console.log("En büyük sayı z sayısıdır");
}

//2 vize(40%)  1 final(60%)

let vize1 = 80;
let vize2 = 90;
let final = 32;

let vize_ortalama = (vize1 + vize2) / 2;
let not_hesapla = vize_ortalama * 0.4 + final * 0.6;

if (final >= 50 && not_hesapla >= 50) {
  console.log("Sınavdan geçtiniz.Ortalamanız: " + not_hesapla);
} else if (
  (not_hesapla >= 50 && final < 50) ||
  (final >= 50 && not_hesapla < 50) ||
  (not_hesapla < 50 && final < 50)
) {
  console.log("Sınavdan geçemediniz.Ortalamanız: " + not_hesapla);
}
