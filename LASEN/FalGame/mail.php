<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "lasen.nancy@gmail.com";
    $subject = "Contact Form Submission from " . $name;
    $body = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;

    $headers = "From: " . $email;

    if (mail($to, $subject, $body, $headers)) {
        echo "Email successfully sent!";
    } else {
        echo "Failed to send email.";
    }
}
?>
