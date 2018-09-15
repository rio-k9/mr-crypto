<?php
date_default_timezone_set("Europe/London");

$current_date = date('d/m/Y | H:i:s');
if(filter_has_var(INPUT_POST, 'submit')){
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    if(!empty($email) && !empty($name)){
        $to = 'rkarim@websoar.co.uk';
        $subject = 'New Lead - ' .$name;
        $body = '
         <h3> You have a Mr Crypto Lead - ' .$name .'</h3>
        <h4>Contact Details</h4>
        <ul>
            <li>Date:' .$current_date .'</li>
            <li>First name:' .$name .'</li>
            <li>Email:' .$email .'</li>
        </ul>
        ';
        $headers = "MIME-Version: 1.0" ."\r\n";
        $headers .="Content-Type:text/html;charset=UTF-8" ."\r\n";
        $headers .= "From: Mr Crypto Academy <noreply@mrcryptoacademy.com>" ."\r\n";
        mail($to, $subject, $body, $headers);
    }
}
?>

