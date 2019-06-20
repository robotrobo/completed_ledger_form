<?php
 function make_ledger_request(){ 

	// $name = "abhijit roy";
    $name = $_COOKIE['name'];
	$string = ('C:/Users/anila/ppData/Local/Programs/Python/Python36/python.exe d:/XAMPP/htdocs/import_ledger.py '.escapeshellarg($name));
	$r =  shell_exec($string);
}	
    ?>
    <html>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script>
	<script src="sketch.js"></script>
	<script src="Check_from_LoL.js"></script>
	<script src="Ledger_request.js"></script>
	<script src="Display_table.js"></script>
	<script type=text/javascript>
		let ledger_data_debug = `<?php echo $r ?>`; 
		back_from_php(ledger_data_debug);
  	</script> 
</html>