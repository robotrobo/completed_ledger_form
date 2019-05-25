<?php 
$method = $_GET['method'];
// echo $name;
if($method=="request_otp"){
    $num = $_GET['num'];
    $string = ('py.exe C:\inetpub\wwwroot\python\otp_req.py '.' '.escapeshellarg($method).' '.escapeshellarg($num));
    $ans = shell_exec($string);
    echo $ans;
}
elseif($method=="verify_otp"){
    $ses = $_GET['ses'];
    $otp = $_GET['otp'];
    // echo $name;
    $string = ('py.exe C:\inetpub\wwwroot\python\otp_req.py '.escapeshellarg($method).' '.escapeshellarg($ses) .' '.escapeshellarg($otp));
    $ans = shell_exec($string);
    echo $ans;    
}
?>