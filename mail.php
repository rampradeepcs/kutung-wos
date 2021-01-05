<?php
$name = $_POST["name"];
$email = $_POST["email"];
$number = $_POST["number"];
$location = $_POST["location"];
$budget = $_POST["budget"];
$area = $_POST["area"];


$EmailTo = "rampradeepcs@gmail.com";
$Title = "Enquiry Received from WORLD OF SPAN Website";

// prepare email body text
$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";

$Fields.= "Contact: ";
$Fields .= $number;
$Fields .= "\n";

$Fields .= "Location: ";
$Fields .= $location;
$Fields .= "\n";

$Fields .= "Budget: ";
$Fields .= $budget;
$Fields .= "\n";

$Fields .= "Carpet Area: ";
$Fields .= $area;
$Fields .= "\n";


// send email
$success = mail($EmailTo,  $Title,  $Fields, "From:".$email);

