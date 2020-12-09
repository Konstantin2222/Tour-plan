<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма

if (empty($name)) {
    $title = "Запрос на подписку Best Tour Plan";
    $body = "
    <h2>Новый запрос</h2>
    <b>Почта для рассылки:</b> $email<br><br>
    ";
} elseif (empty($email)) {
    $title = "Новое обращение Best Tour Plan";
    $body = "
        <h2>Новое Сообщение</h2>
        <b>Имя:</b> $name<br>
        <b>Номер телефона:</b> $phone<br><br>
        <b>Сообщение:</b><br>$message
        ";
} elseif (empty($none)) {
    $title = "Новое обращение Best Tour Plan";
    $body = "
        <h2>Новое обращение</h2>
        <b>Имя:</b> $name<br>
        <b>Номер телефона:</b> $phone<br><br>
        <b>Почта:</b> $email<br><br>
        <b>Сообщение:</b><br>$message";
}



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'konstantinmailphp@gmail.com'; // Логин на почте
    $mail->Password   = '25kosta02'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('konstantinmailphp@gmail.com', 'Константин Прибыл'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('pribilkosta@gmail.com');

    // Прикрипление файлов к письму
    if (!empty($file['name'][0])) {
        for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
            $filename = $file['name'][$ct];
            if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
                $rfile[] = "Файл $filename прикреплён";
            } else {
                $rfile[] = "Не удалось прикрепить файл $filename";
            }
        }
    }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
