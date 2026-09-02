<?php

if(isset($_POST) && !empty($_POST)) {
	$fullname = $_POST['fullname'];
	$mobile = $_POST['mobile'];
	$email_id = $_POST['email'];
	$your_message = $_POST['msg'];
	
	$to = "support@lioncharge.tech, doosa.sateesh@gmail.com";

	$subject = "LionCharge - Contact Form Details";
	
	$message = "LionCharge - Contact Form Details:\r\n". "\n"
	 ." Full Name : ".$fullname. "\n"
	 ."\r\n Mobile : ".$mobile. "\n"
	 ."\r\n E-mail : ".$email_id. "\n"
	 ."\r\n Message : ".$your_message. "\n";
	 
	$headers = "From: support@lioncharge.tech \r\nReply-To: support@lioncharge.tech";
	
	if(mail($to, $subject, $message, $headers)) {
		$result = array('status'=>'success', 'message'=>"Thank you.");
		echo json_encode($result);
	} else {
		$result = array('status'=>'error', 'message'=>"Please try again!");
		echo json_encode($result);
	}

} else {
	echo "Sorry! Please try again!";
}

   
?>