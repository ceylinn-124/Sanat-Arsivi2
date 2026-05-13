<?php
$sunucu = "localhost";
$kullanici = "root";
$sifre = "";
$veritabani = "sanat_arsiv2";

$baglan = mysqli_connect($sunucu, $kullanici, $sifre, $veritabani);

if (!$baglan) {
    die("Bağlantı başarısız: " . mysqli_connect_error());
} else {
    // Şimdilik bağlantıyı görelim, çalışınca bu satırı sileriz
    echo "Veritabanına bağlanıldı! ";
}
?>