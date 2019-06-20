<?php 
// error_reporting(0);
$comp =  $_GET["comp"];
$user =  $_GET["user"];
$pass =  $_GET["pass"];
// var_dump($_GET);

$fp = fopen('Usernames_and_pass.txt', 'a');//opens file in append mode
$STRING = $comp.':'.$user.':'.$pass; 
// echo $STRING;
$lines = file('Usernames_and_pass.txt', FILE_IGNORE_NEW_LINES);
// echo $lines[0];
// echo '<pre>'; print_r($lines); echo '</pre>';
// $flag= false;
// for ($x = 0; $x <= count($lines); $x++) {
//     if($lines[$x]==$STRING){
//         echo "<h1>As you are already registered Please go to <a href = index.html>Back</a></h1>";
//         die();
//     }
// } 
write_to_file($STRING);


function write_to_file($STRING)  {
$fp = fopen('Usernames_and_pass.txt', 'a');//opens file in append mode  
// echo $fp;
fwrite($fp, "\n".$STRING);  

fclose($fp);  
}   
?>