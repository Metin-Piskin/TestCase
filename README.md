




<h1>React Native Liste Uygulaması</h1>
    <p>Bu proje, kullanıcıların giriş bilgilerini alarak bu bilgileri listeleyen bir React Native uygulamasını içerir. İşte uygulamanın temel özellikleri ve nasıl kullanılacağına dair bilgiler:</p>

   <h2>Proje Tanımı</h2>
   <p>Bu proje, iki ana sayfadan oluşan bir liste uygulamasını içerir:</p>

  <ol>
        <li>
            <h3>Bilgi Giriş Sayfası</h3>
            <p>Kullanıcıların ad, soyad ve not bilgilerini girebileceği bir sayfadır. Giriş yapıldığında:</p>
            <ul>
                <li>Eğer en az bir veri girişi yapıldıysa, "Reset" butonu aktif hale gelir ve bu butona basıldığında tüm input alanları sıfırlanır.</li>
                <li>Eğer tüm input alanları doldurulduysa ve her biri en az 4 karakter içeriyorsa, "Submit" butonu aktif hale gelir ve kullanıcı bu butona tıkladığında ikinci sayfaya yönlendirilir.</li>
            </ul>
        </li>
        <li>
            <h3>Liste Sayfası</h3>
            <p>İkinci sayfa, kullanıcıların girdiği bilgileri kartlar şeklinde listeleyen bir sayfadır. Her bir kart, girilen verilere dayalı olarak benzersiz bir arka plan rengine sahiptir. Kullanıcı, her bir kartın üstüne tıkladığında kartın başlık ve alt bilgi alanlarının arka plan rengi değişir.</p>
        </li>
    </ol>

  <h2>Nasıl Çalıştırılır</h2>
    <p>Projeyi yerel bir geliştirme ortamında çalıştırmak için aşağıdaki adımları izleyebilirsiniz:</p>

   <ol>
        <li>Proje klasörünü bilgisayarınıza klonlayın:
            <code>git clone https://github.com/Metin-Piskin/TestCase.git</code>
        </li>
        <li>Proje klasörüne gidin:
            <code>cd TestCase</code>
        </li>
        <li>Gerekli bağımlılıkları yükleyin:
            <code>npm install</code>
        </li>
        <li>React Native uygulamasını başlatın:
            <code>npx react-native run-android</code>
        </li>
    </ol>

   <h2>Ekran Görüntüleri</h2>
    <img width="200" height="400"  src="https://github.com/Metin-Piskin/TestCase/assets/85956297/81c4db8f-8684-4c05-9188-b7d6de96bb07" alt="Bilgi Giriş Sayfası">
    <img width="200" height="400"  src="https://github.com/Metin-Piskin/TestCase/assets/85956297/3781b4ac-1ba7-42c1-8e28-97f2446842d5" alt="Bilgi Giriş Sayfası">
    <p><em>Figür 1: Bilgi Giriş Sayfası</em></p>

   <img width="200" height="400" src="https://github.com/Metin-Piskin/TestCase/assets/85956297/72e64773-2a09-42fd-ace8-381b4073b2f7" alt="Liste Sayfası">
    <p><em>Figür 2: Liste Sayfası</em></p>






