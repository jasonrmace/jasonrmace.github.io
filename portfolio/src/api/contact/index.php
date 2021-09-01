<?php

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['firstName']) && empty($_POST['lastName']) && empty($_POST['email']) && empty($_POST['subject']) && empty($_POST['content']) ) die();

if ($_POST) {
    // set response code - 200 OK
    http_response_code(200);

	$subject = $_POST['subject'];
	$to = 'jason.r.mace@gmail.com';
	$from = $_POST['email'];

    // data
	$msg = '<b><i>This is an email from jasonrmace.github.io contact form.</i></b><br /><br /><b>Message from:</b> ' . $_POST['firstName'] . ' ' . $_POST['lastName'] . '.<br /><br /><b><u>Message Content:</u></b><br />' . $_POST['message'];

    // Headers
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";

	mail($to, $subject, $msg, $headers);

    echo json_encode( array(
		"sent" => true
	));
}
else {
	// tell the user about error
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}