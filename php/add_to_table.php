<?php
$servername = "localhost";
$username = "root";
$password = "9575024567";
$dbname = "login_info";
$table = "users";

//get values
$comp =  $_GET["comp"];
$user =  $_GET["user"];
$pass =  $_GET["pass"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO $table (comp, user, hash)
VALUES ('$comp', '$user', '$pass')";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
} else {
    echo $conn->error;
}

$conn->close();
?> 