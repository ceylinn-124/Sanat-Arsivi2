<?php
session_start();
include("baglan.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $kullanici = $_POST['kullanici_adi'];
    $sifre = $_POST['sifre'];

    $sorgu = "SELECT * FROM kullanicilar WHERE (kullanici_adi = '$kullanici' OR eposta = '$kullanici') AND sifre = '$sifre'";
    $sonuc = mysqli_query($baglan, $sorgu);

  // giris_islem.php içinde giriş başarılı kısmı:
if (mysqli_num_rows($sonuc) > 0) {
    $user = mysqli_fetch_assoc($sonuc);
    $isim = $user['kullanici_adi'];
    // İsmi URL'ye ekleyip ana sayfaya gönderiyoruz
    header("Location: index.html?kullanici=$isim"); 
    exit();