<?php 
// $name = $_GET['name'];
// echo $name;
// $string = ('py.exe C:\xampp\htdocs\import_bal.py ');
$string = ('py.exe C:\inetpub\wwwroot\python\import_bal.py');
$ans = shell_exec($string);
echo $ans;
?>