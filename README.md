# Sosyal Medya Yönetim Uygulaması

Bu uygulama, Angular kullanılarak geliştirilmiş bir kullanıcı arayüzüyle, Node.js tabanlı bir backend tarafından desteklenen bir sosyal medya yönetim sistemidir. 
Bu sistemde, kullanıcılar sosyal medya içeriklerini ekleyebilir, güncelleyebilir ve listeleme işlemlerini gerçekleştirebilirler.

Bu uygulama, Mobile First CSS önceliklerini benimseyerek, mobil cihazlara odaklanarak başlamış ve tasarım sürecini bu yönde ilerletmiştir.

Özellikler

Ekleme: Kullanıcılar uygulama üzerinden yeni sosyal medya içerikleri ekleyebilirler.

Güncelleme: Varolan sosyal medya içerikleri üzerinde düzenleme yapma olanağı sağlar. Kullanıcılar, içeriklerini güncelleyerek değişiklikleri hızlıca uygulayabilirler.

Listeleme: Eklenen sosyal medya içerikleri kullanıcıya düzenli bir şekilde listelenir. Kullanıcılar, içerikleri filtreleyerek veya sıralayarak istedikleri bilgilere daha hızlı erişebilirler.


## Nasıl Kullanılır?

1. Backend kısmını başlatmak için öncelikle backend klasörü içerisine gidip  `npm install` komutunu çalıştırın ve işlem bittikten sonra ise  `npm start` komutunu çalıştırın.
2. Frontend kısmını başlatmak için öncelikle frontend klasörü içerisine gidip `npm install` komutunu çalıştırın ve işlem bittikten sonra ise  `npm start` komutunu çalıştırın.
3. Bu işlemleri tamamladıysanız eğer tarayıcınız üzerinden http://localhost:4200/ adresine gidip projeyi inceleyebilirisiniz.

Uygulama, kullanıcıların sosyal medya içeriklerini kolayca yönetmelerine olanak tanır ve Angular ile modern bir kullanıcı arayüzü sunar.

## Teknolojiler

### Frontend (Angular)

Kullanıcı arayüzü, Angular framework'ü kullanılarak geliştirilmiştir. Bu, modern ve etkileşimli bir kullanıcı deneyimi sağlar.

#### Kullanılan Paketler

- **@ng-bootstrap/ng-bootstrap**: Angular projelerinde kullanılmak üzere Bootstrap bileşenlerini entegre etmek için kullanılır.
- **@popperjs/core**: Bootstrap için gereken Popper.js kütüphanesini sağlar.
- **@swimlane/ngx-datatable**: Tablo (datatable) bileşeni için kullanılır ve veri tablolarını daha etkili bir şekilde görüntülemek için kullanışlıdır.
- **bootstrap**: Bootstrap CSS framework'ünün Angular projesine entegre edilmesini sağlar.
- **ngx-mask**: Metin girişlerine maskeleme uygulamak için kullanılır.

### Backend (Node.js)

Uygulamanın server tarafı, Node.js kullanılarak oluşturulmuştur. Bu sayede hızlı, ölçeklenebilir ve gerçek zamanlı işlemlere olanak tanır.

#### Kullanılan Paketler

- **mongoose**: MongoDB ile etkileşim sağlamak için kullanılır.
- **dotenv**: Çevresel değişkenleri yönetmek ve gizli bilgileri korumak için kullanılır.
- **cors**: Cross-Origin Resource Sharing'i etkinleştirmek için kullanılır.
- **body-parser**: HTTP isteklerini işlemek ve verileri çözmek için kullanılır.
- **express**: Web uygulamaları oluşturmak için kullanılan hafif bir web çerçevesidir.
- **joi**: Veri doğrulama ve şema kontrolü için kullanılır.
- **nodemon**: Geliştirme sırasında otomatik olarak sunucunun yeniden başlatılmasını sağlamak için kullanılır.



