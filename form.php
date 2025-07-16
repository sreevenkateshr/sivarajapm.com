<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "2001ksanjay@gmail.com"; // 🔁 Replace with your real email
    $subject = htmlspecialchars($_POST['subject'] ?? 'No Subject');
    $name = htmlspecialchars($_POST['from_name'] ?? 'Anonymous');
    $email = filter_var($_POST['from_email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (!$email) {
        http_response_code(400);
        echo "Invalid email address.";
        exit;
    }

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Message could not be sent.";
    }
} else {
    http_response_code(403);
    echo "Forbidden request.";
}
?>

