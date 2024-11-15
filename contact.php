<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $mobile = htmlspecialchars(trim($_POST['mobile']));
    $email = htmlspecialchars(trim($_POST['email']));
    
    // Validation
    $errors = [];
    if (empty($name)) {
        $errors[] = "Name is required.";
    }
    if (empty($mobile) || !preg_match('/^[0-9]{10}$/', $mobile)) {
        $errors[] = "Valid 10-digit mobile number is required.";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required.";
    }

    if (empty($errors)) {
        $to = "gujjeti97@gmail.com"; // Replace with your email
        $subject = "Contact Form Submission";
        
        // Table format message
        $message = "
        <html>
        <head>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>Contact Form Details</h2>
            <table border='1' cellpadding='5' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
                <tr>
                    <th style='background-color: #f2f2f2;'>Field</th>
                    <th style='background-color: #f2f2f2;'>Details</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>$name</td>
                </tr>
                <tr>
                    <td>Mobile</td>
                    <td>$mobile</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>$email</td>
                </tr>
            </table>
        </body>
        </html>";

        // Set headers to send HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: no-reply@status-mall.com"; // Replace with your domain's email address
        

        if (mail($to, $subject, $message, $headers)) {
            echo "<script>
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent',
                        text: 'Thank you, we will contact you shortly.'
                    }).then(function() {
                        window.location = 'index.php';
                    });
                  </script>";
        } else {
            echo "<script>
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Message could not be sent, please try again later.'
                    });
                  </script>";
        }
    } else {
        foreach ($errors as $error) {
            echo "<script>
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: '$error'
                    });
                  </script>";
        }
    }
}
?>
