<?php
    if( isset($_POST['email']) && isset($_POST['message']) ){
        $e = 'info@kitech.rw';
        $m = $_POST['message'];
        $to = "info@template.rw";
        $subject = 'Contact Form Message';
        $message = '<b>Message from ' . $_POST['email'] . '</b><p>'.$m.'</p>';
        $headers = "From: $e\n";
        $headers .= "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\n";
        if( mail($to, $subject, $message, $headers) ){
            echo "success";
        } else {
            echo "not sent.";
        }
    }
?>