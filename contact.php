<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $topic = $_POST["topic"];
    $subject = $_POST["subject"];

    // Add your email address here
    $to = "wit.zakrzewski1337@gmail.com";

    // Email subject
    $email_subject = "New Contact Form Submission: $topic";

    // Email message
    $email_message = "First Name: $firstname\n";
    $email_message .= "Last Name: $lastname\n";
    $email_message .= "Topic: $topic\n";
    $email_message .= "Subject: $subject\n";

    // Send email
    mail($to, $email_subject, $email_message);

    // Redirect after submission (you can customize the URL)
    header("Location: thank_you.html");
    exit();
}

?>
