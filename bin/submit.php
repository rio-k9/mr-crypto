<?php
     if(filter_has_var(INPUT_POST, 'submit')){
        $recaptcha_secret = "6Lefe2IUAAAAALTm9p2fRhkeWWKjzR7gFrND0Xgt";
        $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
        $response = json_decode($response, true);
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        if($response["success"] === true){
             $toEmail = 'info@mrcrypto.com';
            $subject = 'New Lead - ' .$name;
            $body = '
             <h3> You have a Mr Crypto Lead -' .$name .'</h3>
            <h4>Contact Details</h4>
            <ul>
                <li>First name:' .$name .'</li>
                <li>Email:' .$email .'</li>
            </ul>
            ';
            $headers = "MIME-Version: 1.0" ."\r\n";
            $headers .="Content-Type:text/html;charset=UTF-8" ."\r\n";

            $headers .= "From: Mr. Crypto Academy <noreply@mrcryptoacademy.co.uk>" ."\r\n";
            if(mail($toEmail, $subject, $body, $headers)){
                header("Location: ../product.html");
                die();
            }
            else {
                header("Location: ../fail.html");
                die();
            }
        }
        else {
            header("Location: ../fail.html");
            die();
        }
    }

?>

