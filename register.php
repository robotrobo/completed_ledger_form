<!DOCTYPE html>
<html lang="">
<!--
// $r =  shell_exec('C:\Users\Administrator\AppData\Local\Programs\Python\Python37\python.exe C:\xampp\htdocs\import_LoL.py');
-->
<head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">

</head>

<!-- <title>p5.js example</title> -->
<style>
    body {

        font-family: 'Open Sans', sans-serif;
        padding: 0;
        margin: 0;
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
</style>

<!-- <script type=text/javascript> -->
<!-- //   let LoL_data = `<?php //echo $r ?>`; -->
<!-- //   console.log(LoL_data); -->
<!-- //   let LoL= LoL_data; -->
  <!-- </script> -->
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->

<!-- jQuery library -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->

<!-- Latest compiled JavaScript -->

<body>
<div id="loading">
  <img id="loading-image" src="loader.gif" alt="Loading..." />
</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>

    <script src="libraries/bootstrap.js"></script>
    <script src="libraries/p5.js"></script>
    <script src="libraries/p5.dom.js"></script>
    <script src="JavaScript-MD5-2.10.0\JavaScript-MD5-2.10.0\js\md5.js"></script>
    <script src="js/register.js"></script>
    <script src="js/Check_if_already_present.js"></script>
    <script src="js/Save_to_file.js"></script>
    <script src="js/Check_OTP.js"></script>
    <script>
        window.onload = function(){ document.getElementById("loading").style.display = "none" }   ;
    </script>
</body>

</html>
