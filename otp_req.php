<?php 
$method = $_GET['method'];
// echo $name;
if($method=="request_otp"){
    $num = $_GET['num'];
    $string = ('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\inetpub\wwwroot\otp_req.py '.' '.escapeshellarg($method).' '.escapeshellarg($num));
    $ans = shell_exec($string);
    echo $ans;
}
elseif($method=="verify_otp"){
    $ses = $_GET['ses'];
    $otp = $_GET['otp'];
    // echo $name;
    $string = ('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\inetpub\wwwroot\otp_req.py '.escapeshellarg($method).' '.escapeshellarg($ses) .' '.escapeshellarg($otp));
    $ans = shell_exec($string);
    echo $ans;    
}
?>