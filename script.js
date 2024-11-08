// ekran öğesini html'den seçip screen değişkenine atıyoruz
const screen = document.getElementById('screen');

// bu fonksiyon kullanıcıdan gelen veriyi ekrana ekliyor
function appendToScreen(value) {

    // ekranda Hata vs. yazıyorsa, kullanıcı başka bir işlem yapmak istediğinde ekranı temizlemek için if kullanıyoruz

    if (screen.innerText === 'Hata') {
        clearScreen();
    }

    if (screen.innerText === 'Geleceğe Hoş Geldin!') {
        clearScreen();
    }

    if (screen.innerText === 'Hayat, Evren ve Her Şeyin Anlamı!') {
        clearScreen();
    }

    // argumentten gelen değeri ekrandaki mevcut değerin sonuna ekliyoruz
    screen.innerText += value;
}

// ekrandaki tüm metni silen fonksiyon, html'deki C butonuna bağlı
function clearScreen() {
    screen.innerText = '';
}

// ekrandaki son karakteri silen fonksiyon, html'deki SİL butonuna bağlı
function deleteChar() {

    // eğer ekranda belirlenen yazılar yazıyorsa, sonsuz hata döngüsünü engellemek için ekranı tamamen temizliyoruz
    if (
        screen.innerText === 'Hata' 
        || screen.innerText === 'Geleceğe Hoş Geldin!' 
        || screen.innerText === 'Hayat, Evren ve Her Şeyin Anlamı!'
    ) {
        clearScreen();
    } else {
        // aksi takdirde, ekrandaki son karakteri siliyoruz
        screen.innerText = screen.innerText.slice(0, -1);
    }
}

// ekrandaki matematiksel ifadeyi değerlendirip sonucu hesaplayan fonksiyon, html'deki = butonuna bağlı
function calculateResult() {

    // girilen değeri alıyoruz
    const input = screen.innerText;
    
    // basit hoşluklar eklemek için if ifadeleri ekledim
    // normalde herhangi bir işlem operatörü iki kez üst üste yazılırsa hata mesajı alırız 
    // ancak spesifik ifadeler için if kullanarak catch'e yakalanmasını engelliyoruz

    // kullanıcı 2077++ değerini girerse ekranda "'Geleceğe Hoş Geldin!" yazacak
    if (input === '2077++') {
        screen.innerText = 'Geleceğe Hoş Geldin!';
        return;
    }

    // kullanıcı 42++ değerini girerse ekranda "Hayat, Evren ve Her Şeyin Anlamı!" yazacak
    if(input ==='42++'){
        screen.innerText = 'Hayat, Evren ve Her Şeyin Anlamı!';
        return;
    }

    // girilen matematiksel ifadeyi hesaplamaya çalışıyoruz. Burada try catch bloğu kullanarak hatalı girişlerde "Hata" mesajı gösteriyoruz
    try {

        // eval fonksiyonuyla işlemi hesaplayıp sonucu ekrana yazıyoruz
        screen.innerText = eval(input);
    } catch (e) {

        // bir hata olursa "Hata" mesajını gösteriyoruz
        screen.innerText = 'Hata';
    }
}
