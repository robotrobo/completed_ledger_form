<?php
ini_set('display_errors', 1);
$name = $_GET['name']; 
$string = ('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\inetpub\wwwroot\import_ledger.py '.escapeshellarg($name));
$ans = shell_exec($string);
echo $ans;
?>