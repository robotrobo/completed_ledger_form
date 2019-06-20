
 <!DOCTYPE html> 
 
<!-- Calls a python file in my computer to call the LoL ledger-->
<?php
$r =  shell_exec('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\inetpub\wwwroot\import_LoL.py');

?>
<html lang="eng">

<head>
  <center>
    <h1>
      Anish Foods Pvt Ltd
    </h1>
  </center>

</head>

<style>
th{
  position:sticky;
}
#loading {
   width: 100%;
   height: 100%;
   top: 10%;
   left: 25%;
   position: fixed;
   display: block;
   opacity: 0.7;
   /* background-color: #fff; */
   z-index: 99;
   text-align: center;
}

#loading-image {
  position: absolute;
  top: 100px;
  left: 240px;
  z-index: 100;
}
footer {
    text-align: center;
    position: fixed;
    height: 50px;
    bottom: 0;
    width: 100%;
}
</style>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->

<body>
<div id="loading">
  <img id="loading-image" src="loader.gif" alt="Loading..." />
</div>
  <script type=text/javascript>
  let LoL_data = `<?php echo $r ?>`;
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
  <script src="JavaScript-MD5-2.10.0/JavaScript-MD5-2.10.0/js/md5.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script>
  <script src="sketch.js"></script>
  <script src="Check_from_LoL.js"></script>
  <script src="Ledger_request.js"></script>
  <script src="Display_table.js"></script>
  <div id="info_reg" class="alert alert-info">
    <strong>Please Note !</strong> If you are visting this website for the first time press <strong>Register</strong>
  </div>
  <div id="info_time" class="alert alert-info">
    <strong>Website Working hours!</strong>10 am to 7 pm - working days
  </div>
<script>
  window.onload = function(){ document.getElementById("loading").style.display = "none" }   ;

</script>
<footer id="dev" class="fixed-bottom alert alert-success">
Website developed by Anish Agrawal (Contact number- 9575024567)
</footer>
</body>

</html>