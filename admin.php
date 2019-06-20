<!DOCTYPE html>

<?php 
$LoL =  shell_exec('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\inetpub\wwwroot\import_LoL.py');  
   
 ?>

<head>

<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <style>
  /* Style the input field */
  #myInput {
    padding: 20px;
    margin-top: -6px;
    border: 0;
    border-radius: 0;
    background: #f1f1f1;
  }
  </style>
</head>

</head>
<script>

let a = `<?php echo $LoL ?>`
</script>

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
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
<script src="JavaScript-MD5-2.10.0/JavaScript-MD5-2.10.0/js/md5.js"></script>
  
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
    <script src="JavaScript-MD5-2.10.0/JavaScript-MD5-2.10.0/js/md5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src = "Ledger_request.js"></script>
    <script src = "Display_table.js"></script>  
    <script src="libraries/bootstrap.js"></script>
    <script src = "admin.js"></script>
<!-- nahh -->
  <body>

<div class="container">
  <h2>Anish foods pvt. ltd.</h2>
  <h2>admin</h2>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <input class="form-control" id="myInput" type="text" placeholder="Search..">
      
    </ul>
  </div>
</div>

<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>

</body>
</html>
