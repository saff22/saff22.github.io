<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'safuraafreen@gmail.com';
  $headers = "From: $email";

  mail($to, $subject, $message, $headers);

  // You can handle the response to the client here, for example:
  echo 'Email sent successfully';
} else {
  // Handle invalid requests
  http_response_code(400);
  echo 'Invalid request';
}
?>
