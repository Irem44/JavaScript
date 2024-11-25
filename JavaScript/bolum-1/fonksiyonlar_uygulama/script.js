//1-Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function tekrarlama(kelime, kelime_sayisi) {
  for (let i = 0; i < kelime_sayisi; i++) {
    console.log(kelime);
  }
}

tekrarlama("Silence!", 5);

//2-Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevre(kısaKenar, uzunKenar) {
  alan = kısaKenar * uzunKenar;
  cevre = 2 * (kısaKenar + uzunKenar);
  console.log(`Dikdörtgenin çevresi: ${cevre} ve alanı: ${alan}`);
}

alanCevre(5, 10);

//3-Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function sans() {
  let random = Math.random();
  if (random < 0.5) {
    console.log("Yazı");
  } else {
    console.log("Tura");
  }
}

sans();

//4-Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyon yazınız.

function bolen(sayi) {
  let dizi = [];
  for (let i = sayi; i > 0; i--) {
    if (sayi % i == 0) {
      dizi.push(i);
    }
  }
  console.log(dizi);
}

bolen(5);
bolen(20);

//5-Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function topla() {
  let toplam = 0;
  for (let i = 0; i < arguments.length; i++) {
    toplam += arguments[i];
  }
  console.log(toplam);
}

topla(10, 20, 30);
topla(10, 20);
