<?php
ini_set('display_errors', 1);
$name = $_GET['name']; 
$string = ('py.exe C:\inetpub\wwwroot\python\import_ledger.py '.escapeshellarg($name));
$ans = shell_exec($string);
echo $ans;
?>