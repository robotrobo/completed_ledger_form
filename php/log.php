<?php
$string = $_GET['string'];


$fp = fopen('./log/log.txt', 'a');//opens file in append mode  
date_default_timezone_set('Asia/kolkata');
$date = date('d/m/y g:i a');
fwrite($fp, "\n".$string .' - '.$date);  
echo $string
fclose($fp);



?>