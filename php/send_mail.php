<?php
echo "Enviando e-mail...";

if(isset($_POST['submit'])) {

    if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['mensagem'])) {
        header('location: ../index.html');
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
    $date = date('m/d/Y h:i:s a', time());

    //corpo do email
    $corpoEmail = 
    "
    <html>
    <p><b>Nome: </b>$name</p>
    <p><b>E-mail: </b>$email</p>
    <p><b>Mensagem: </b>$mensagem</p>
    <p><b>Data: </b>$date</p>
    </html>
    ";

    //destino
    $destino = "eric_lamounier@outlook.com";
    $assunto = "ATENÇÃO - Contato vindo de portfolio";

    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=utf-8\n";
    $headers.= "From: $name < $email > ";

    //enviar email
    mail($destino, $assunto, $corpoEmail, $headers);

    header("location: ../index.html");
}
?>