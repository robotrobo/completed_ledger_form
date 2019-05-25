<?php 
$ses = $_GET['ses'];

$otp = $_GET['otp'];
// echo $name;
// $string = ('py.exe C:\xampp\htdocs\check_otp.py '.escapeshellarg($ses) .' '.escapeshellarg($otp));
$string = ('py.exe C:\inetpub\wwwroot\python\check_otp.py '.escapeshellarg($ses) .' '.escapeshellarg($otp));
$ans = shell_exec($string);
echo $ans;
?>