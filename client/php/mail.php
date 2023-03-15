<?php
if($_POST){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $topic = $_POST['topic'];
    $message = $_POST['message'];

    mail("contactokrl@gmail.com", "From: " . $mail . " ///Asunto: " . $topic, $message);
}
?>