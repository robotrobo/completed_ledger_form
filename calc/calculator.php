

<?php 
$fa1 = $_GET("fa1");
$fa2 = $_GET("fa2");
$term1 = $_GET("term1");
$term2 = $_GET("term2");


$string = ('py.exe .\percentage_cal.py '.escapeshellarg($fa1)." ".escapeshellarg($fa2)." ".escapeshellarg($term1)." ".escapeshellarg($term2));
$ans = shell_exec($string);
echo $ans;

?>