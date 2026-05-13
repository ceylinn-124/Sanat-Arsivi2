<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include("baglan.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST['kullanici_adi'];
    $mail = $_POST['eposta'];
    $pass = $_POST['sifre'];

    $ekle = "INSERT INTO kullanicilar (kullanici_adi, eposta, sifre) VALUES ('$user', '$mail', '$pass')";

    if (mysqli_query($baglan, $ekle)) {
        echo "Kayıt başarıyla eklendi! phpMyAdmin'e bak çabuk!";
    } else {
        echo "Hata oluştu: " . mysqli_error($baglan);
    }
} else {
    echo "Formdan veri gelmiyor!";
}
?>