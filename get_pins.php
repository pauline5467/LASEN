<?php
$host = 'localhost';
$dbname = 'mfkxkzpr_LASEN';
$username = 'mfkxkzpr_Pauline';
$password = '9r7@g@i8Cy';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>

