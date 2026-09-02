<?php

if(isset($_POST) && !empty($_POST)) {
	$fullname = $_POST['fullname'];
	$mobile = $_POST['mobile'];
	$email_id = $_POST['email'];
	$company = $_POST['company'];
	$building_type = $_POST['building_type'];
	$zip_code = $_POST['zip_code'];
	$parking_space = $_POST['parking_space'];
	$your_message = $_POST['msg'];
	
	$to = "support@lioncharge.tech, doosa.sateesh@gmail.com";

	$subject = "LionCharge - Get A Quote Form Details";
	
	$message = "LionCharge - Get A Quote Form Details:\r\n". "\n"
	 ."Full Name : ".$fullname. "\n"
	 ."\r\n E-mail : ".$email_id. "\n"
	 ."\r\n Phone Number : ".$mobile. "\n"
	 ."\r\n Company : ".$company. "\n"
	 ."\r\n Building Type : ".$building_type. "\n"
	 ."\r\n Property Zip Code : ".$zip_code. "\n"
	 ."\r\n # of parking spaces : ".$parking_space. "\n"
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