let info_re;
let debug1;
let lab_user, lab_pass, user_in, pass_in, sub_button, reset_button, register_button;
let LoL;



function setup() {
  noCanvas();
  user_in = select('#username');
  pass_in = select('#pass');
  sub_button = select('#sub_button');
}

document.querySelector("#pass").onkeypress = function (e) {
  if (!e) {
    e = window.event
  };
  var keyCode = e.keyCode || e.which;
  if (keyCode == 13) {
    // document.getElementById("loading").style.display = "block";
    submitted();
  };
}

function submitted() {
  document.querySelector('form').style.display = 'none';
  document.querySelector('#formFooter').style.display = 'none';
  Check_from_LoL(LoL_data);

}