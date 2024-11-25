let siparis1 = {
  siparis_id: 101,
  siparis_tarihi: "31.12.2025",
  ödeme_sekli: "kredi kartı",
  kargo_adresi: "Yahya kaptan mah. Kocaeli İzmit",
  satın_alinan_urunler: {
    urun1: {
      urun_id: 5,
      urun_basligi: "Iphone 16 Pro",
      urun_url: "https://abc.com/iphone-16-pro",
      urun_fiyatı: 75000,
    },

    urun2: {
      urun_id: 6,
      urun_basligi: "Iphone 16 Pro Max",
      urun_url: "https://abc.com/iphone-16-pro-max",
      urun_fiyati: 85000,
    },
  },
  musteri: {
    musteri_id: 12,
  },
};

let siparis2 = {
  siparis_id: 102,
  siparis_tarihi: "30.11.2025",
  odeme_sekli: "kredi kartı",
  kargo_adresi: "Yahya kaptan mah. Kocaeli İzmit",
  satin_alinan_urunler: {
    urun1: {
      urun_id: 6,
      urun_basligi: "Iphone 16 Pro Max",
      urun_url: "https://abc.com/iphone-13-pro-max",
      urun_fiyati: 85000,
    },
  },

  musteri: {
    musteri_id: 12,
  },
};

let siparis_toplam =
  (siparis1.satın_alinan_urunler.urun1.urun_fiyatı +
    siparis1.satın_alinan_urunler.urun2.urun_fiyati) *
  1.2;

console.log(siparis_toplam);

let siparis2_toplam = siparis2.satin_alinan_urunler.urun1.urun_fiyati * 1.2;
console.log(siparis2_toplam);
