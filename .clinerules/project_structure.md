# Proje Dosya ve Klasör Yapısı

Bu doküman, projenin dosya ve klasör yapısını ve her birinin görevini açıklamaktadır.

## Ana Klasörler

- **`_includes/`**: Web sitesinin farklı sayfalarında tekrar eden HTML parçalarını (header, footer, head vb.) barındırır. Bu yapı, kod tekrarını önler.
- **`_layouts/`**: Sayfaların genel HTML iskeletini (şablonlarını) içerir. Her sayfa (`.md` dosyası), hangi şablonu kullanacağını `layout` parametresi ile belirtir.
- **`_posts/`**: Blog yazılarını barındıran klasördür. Dosya isimleri `YIL-AY-GÜN-baslik.md` formatında olmalıdır. Jekyll, bu klasördeki dosyaları otomatik olarak işleyip blog yazılarına dönüştürür.
- **`_site/`**: Jekyll'in projeyi derledikten sonra oluşturduğu statik web sitesinin (HTML, CSS, JS dosyaları) son halinin bulunduğu klasördür. Bu klasördeki dosyalar sunucuya yüklenir. Genellikle `.gitignore` ile versiyon kontrolüne dahil edilmez.
- **`css/`**: Sitenin stil dosyalarını (CSS) içerir. Tasarım ve görünümle ilgili tüm kodlar buradadır.
- **`fonts/`**: Web sitesinde kullanılan özel font dosyalarını barındırır.
- **`img/`**: Sitede kullanılan tüm görsellerin (resimler, ikonlar, logolar) bulunduğu klasördür.
- **`js/`**: Sitenin interaktif özelliklerini (animasyonlar, sayfa geçişleri, olay dinleyicileri vb.) yöneten JavaScript dosyalarını içerir.
- **`portfolio/`**: Portfolyo çalışmalarının detay sayfalarını ve ilgili HTML dosyalarını içerir.

## Ana Dosyalar

- **`_config.yml`**: Jekyll projesinin ana yapılandırma dosyasıdır. Site başlığı, açıklaması, URL yapısı, kullanılacak eklentiler gibi genel ayarlar burada yapılır.
- **`index.md`**: Ana sayfanın Markdown dosyasıdır. Genellikle `home` layout'unu kullanarak `_layouts/home.html` şablonunu çağırır.
- **`blog.md`**: Blog yazılarının listelendiği sayfanın Markdown dosyasıdır. `_layouts/blog.html` şablonunu kullanarak `_posts` klasöründeki yazıları listeler.
- **`hakkimda.md`, `works.md`, `service.md` vb.**: Sitenin diğer ana sayfalarını oluşturan Markdown dosyalarıdır. Her biri kendi `layout`'unu kullanır.
- **`Gemfile`**: Projenin Ruby gem bağımlılıklarını yönetir. Jekyll ve eklentileri gibi bağımlılıklar burada belirtilir.
- **`Gemfile.lock`**: `Gemfile` dosyasında belirtilen gem'lerin tam olarak hangi versiyonlarının kullanıldığını kaydeder. Bu, projenin farklı ortamlarda tutarlı bir şekilde çalışmasını sağlar.
- **`.gitignore`**: Git versiyon kontrol sisteminin hangi dosya ve klasörleri takip etmemesi gerektiğini belirten bir dosyadır. Örneğin `_site` klasörü genellikle bu dosyaya eklenir.
- **`404.html`**: Kullanıcılar sitede bulunmayan bir sayfaya gitmeye çalıştığında gösterilecek olan "Sayfa Bulunamadı" hata sayfasının HTML içeriğidir.
- **`CNAME`**: Custom domain (özel alan adı) kullanan GitHub Pages sitelerinde, sitenin hangi alan adıyla ilişkilendirildiğini belirtir.
- **`favicon.ico`**: Tarayıcı sekmesinde ve yer imlerinde görünen küçük site ikonudur.
- **`robots.txt`**: Arama motoru botlarına (Googlebot gibi) sitenin hangi bölümlerini tarayıp tarayamayacakları hakkında talimatlar verir.
- **`sitemap.xml`**: Sitedeki tüm sayfaların bir listesini içerir ve arama motorlarının siteyi daha verimli bir şekilde taramasına yardımcı olur.
