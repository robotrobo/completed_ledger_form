<?php
    $name = "abhijit roy";
    // $name = $_COOKIE['name'];
	$string = ('C:/Users/anila/AppData/Local/Programs/Python/Python36/python.exe d:/XAMPP/htdocs/import_ledger.py '.escapeshellarg($name));
	$r =  shell_exec($string);	
    ?>
    <html>
    <script src="Ledger_request.js"></script>
<script type=text/javascript>
    let ledger_data_debug = `<?php echo $r ?>`; 
  </script>
	
</html>