<?php
//  var_dump(ini_get('fastcgi.impersonate')); 
// phpinfo();
$file_data = "Stuff you want to add\n";
$file_data .= file_get_contents('database.txt');
file_put_contents('database.txt', $file_data);
?>