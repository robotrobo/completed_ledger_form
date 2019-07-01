<?php 
$ses = $_GET['ses'];

$otp = $_GET['otp'];
// echo $name;
// $string = ('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\xampp\htdocs\check_otp.py '.escapeshellarg($ses) .' '.escapeshellarg($otp));
$string = ('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\inetpub\wwwroot\python\check_otp.py '.escapeshellarg($ses) .' '.escapeshellarg($otp));
$ans = shell_exec($string);
echo $ans;
?>
