# Proje Genel Kuralları

Bu doküman, proje geliştirme sürecinde uyulması gereken genel kuralları ve standartları içerir.

## İçerik Yönetimi

1.  **Blog Yazıları**: Tüm blog yazıları `_posts` klasörüne eklenmelidir. Dosya adı formatı `YIL-AY-GÜN-baslik.md` şeklinde olmalıdır.
2.  **Görsel Optimizasyonu**: Siteye eklenecek tüm görseller `img/` klasörüne konulmalı ve web için optimize edilmelidir (düşük dosya boyutu, uygun format).
3.  **Markdown Kullanımı**: Sayfa içerikleri oluşturulurken standart Markdown sözdizimine sadık kalınmalıdır.

## Kodlama Standartları

1.  **HTML**: Anlamsal (semantic) HTML etiketleri kullanılmalıdır. Erişilebilirlik standartlarına dikkat edilmelidir.
2.  **CSS**: CSS sınıfları isimlendirilirken BEM (Block, Element, Modifier) metodolojisi tercih edilebilir. Kod tekrarından kaçınılmalı, genel sınıflar oluşturulmalıdır.
3.  **JavaScript**: Yazılan JavaScript kodları anlaşılır ve bakımı kolay olmalıdır. Mümkün olduğunca harici kütüphane bağımlılığı azaltılmalıdır.

## Versiyon Kontrolü (Git)

1.  **Commit Mesajları**: Commit mesajları açıklayıcı ve standart bir formatta olmalıdır (Örn: `feat: Blog sayfası için arama özelliği eklendi`).
2.  **Branch (Dal) Yönetimi**: Yeni bir özellik veya düzeltme üzerinde çalışırken `main` branch'i yerine yeni bir dal oluşturulmalıdır.
3.  **`.gitignore`**: `_site` klasörü gibi derlenmiş dosyalar ve `node_modules` gibi bağımlılık klasörleri her zaman `.gitignore` dosyasına eklenmelidir.
