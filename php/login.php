<?php
$servername = "localhost";
$username = "root";
$password = "9575024567";
$dbname = "login_info";
$table = "users";

//get params
$user = $_GET["user"];
$hash = $_GET["hash"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT comp FROM $table where user = '$user' and hash ='$hash'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
     echo $row[comp];
    }
} else {
    echo "0 results";
}
$conn->close();
?>