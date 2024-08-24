<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address
    $to = 'bogus.kilian@outlook.de';
    
    // Subject of the email
    $emailSubject = "New Contact Form Submission: " . $subject;
    
    // Email body content
    $emailBody = "You have received a new message from the contact form on your website.\n\n" .
                 "Name: " . $name . " " . $lastName . "\n" .
                 "Email: " . $email . "\n" .
                 "Subject: " . $subject . "\n" .
                 "Telephone: " . $telephone . "\n\n" .
                 "Message:\n" . $message;

    // Headers for the email
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "There was a problem sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
