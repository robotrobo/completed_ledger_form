<?php 
$string = ('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\inetpub\wwwroot\import_bal.py ');
$out ="";
$out = shell_exec($string);
echo $out;
?>