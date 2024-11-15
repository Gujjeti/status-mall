<?php
$to = "gujjeti97@gmail.com"; // Replace with your email address
$subject = "PHP Mail Test";
$message = "This is a test email to check if PHP mail() is working.";
$headers = "From: no-reply@yourdomain.com"; // Replace with a valid email address from your domain

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
} else {
    echo "Failed to send email.";
}
?>
