# Kod Tekrarını Azaltma ve Refactoring Planı

Bu doküman, projedeki kod tekrarını azaltmak ve daha sürdürülebilir bir yapı kurmak için izlenecek adımları içerir.

## Bölüm 1: HTML Yapısını İyileştirme (Layout & Includes)

- [ ] **`_layouts/deafult.html` dosyasını sil:** Bozuk olduğu için bu dosya kaldırılacak.
- [ ] **Yeni `_layouts/default.html` ana şablonunu oluştur:**
    - [ ] Temel HTML iskeletini (`<html>`, `<head>`) içermeli.
    - [ ] `<body>` etiketi, `<body id="{{ page.page_id }}" class="page {{ page.body_class }}">` yapısıyla hem `id` hem de `class` için dinamik olmalı.
    - [ ] `{% include head.html %}` çağrısını içermeli.
    - [ ] `{% include header.html %}` çağrısını içermeli.
    - [ ] Sayfa içeriği için `{{ content }}` değişkenini eklemeli.
    - [ ] `{% include footer.html %}` çağrısını içermeli.
    - [ ] `_includes/page-transitions.html` çağrısını içermeli.
    - [ ] `_includes/scripts.html` (Global script'ler için) çağrısını içermeli.
    - [ ] `_layouts/service.html` içindeki GTM `noscript` etiketi kaldırılacak.
- [ ] **Yeni `_includes/page-transitions.html` dosyası oluştur:** Tüm sayfalarda tekrar eden `.page-transition-*` div'lerini bu dosyaya taşı.
- [ ] **Yeni `_includes/scripts.html` dosyası oluştur:** Tüm sayfalarda ortak olan script etiketlerini (`TweenMax.js` vb.) bu dosyaya taşı.
- [ ] **Mevcut şablonları (`home.html`, `about.html` vb.) güncelle:**
    - [ ] Tüm şablon dosyalarına `layout: default` YAML parametresini ekle.
    - [ ] Şablonlardan tekrarlanan HTML iskeletini, global script'leri ve geçiş div'lerini temizle.
    - [ ] Sayfaya özel script'ler (`parallax.js`, `fullpage.js` vb.) ilgili layout dosyasında bırakılacak. Bu, gereksiz script yüklemelerini önleyerek performansı artırır.

## Bölüm 2: JavaScript Kod Tekrarını Ortadan Kaldırma

- [ ] **Yeni `js/global.js` dosyası oluştur:**
    - [ ] Tüm sayfalarda ortak olan `pageTransition` fonksiyonunu bu dosyaya taşı ve merkezileştir. Bu fonksiyon, farklı animasyon sürelerini yönetebilmek için parametrik bir yapıda (`pageTransition(url, timeout)`) olmalıdır.
    - [ ] Header, logo ve menü gibi ortak elemanların event listener'larını bu dosyaya taşı.
- [ ] **`_includes/scripts.html` dosyasını güncelle:** Oluşturulan `js/global.js` dosyasını diğer ortak script'lerle birlikte bu dosyadan çağır.
- [ ] **Sayfaya özel JS dosyalarını (`main.js`, `about.js` vb.) temizle:**
    - [ ] `global.js`'e taşınan tüm ortak fonksiyonları ve event listener'ları bu dosyalardan sil.
    - [ ] Bu dosyalarda sadece o sayfaya özgü işlevleri bırak.

---

## Etkilenecek Dosyaların Listesi

Bu refactoring sürecinde aşağıdaki dosyalarda değişiklik yapılacak, bazıları silinecek ve yenileri oluşturulacaktır.

### Silinecek Dosyalar
- `_layouts/deafult.html`

### Oluşturulacak Yeni Dosyalar
- `_layouts/default.html`
- `_includes/page-transitions.html`
- `_includes/scripts.html`
- `js/global.js`

### Değiştirilecek Dosyalar
- `_layouts/about.html`
- `_layouts/blog.html`
- `_layouts/home.html`
- `_layouts/portfolio-detail.html`
- `_layouts/post.html`
- `_layouts/process.html`
- `_layouts/service.html`
- `_layouts/works.html`
- `js/about.js`
- `js/blog.js`
- `js/detail-page.js`
- `js/main.js`
- `js/process.js`
- `js/services.js`
- `js/work.js`

---

## Önemli Not: Markdown Dosyaları ve Front Matter

Bu refactoring süreci, `.md` uzantılı içerik dosyalarının (`hakkimda.md`, `blog.md` vb.) içeriğini veya front matter (--- ile başlayan bölüm) kısımlarını **değiştirmeyecektir**. Bu dosyalar olduğu gibi korunacaktır. Yapılan değişiklikler, bu dosyaların hangi HTML şablonu (layout) içinde render edileceğini düzenlemeye yöneliktir ve dolaylı olarak tüm siteyi etkileyecektir.

### Eklenecek Front Matter Değişkeni
Sayfaya özel CSS ve JS hedeflemesini korumak için, her `.md` dosyasına `page_id` adında bir front matter değişkeni eklenecektir. Örneğin, `hakkimda.md` dosyasına `page_id: about` eklenecektir. Bu `page_id`, ana şablondaki `<body>` etiketine ID olarak atanacaktır (`<body id="{{ page.page_id }}">`).

### Değiştirilecek Dosyalar (Markdown)
- `index.md`
- `hakkimda.md`
- `blog.md`
- `works.md`
- `service.md`
- `process.md`
