let info_re;
let debug1;
let lab_user, lab_pass, user_in, pass_in, sub_button, reset_button, register_button;
let LoL;



function setup() {
  info_re = document.getElementById('info_time');
  // document.cookie = "name=";
  info_re = new p5.Element(info_re);
  //Creating inputs ,the Submit button,and the reset button;
  lab1 = createElement("label", "Enter username:");
  lab1.position(0, info_re.position().y + info_re.height + 10);


  user_in = createInput("", "text");
  user_in.position(0, lab1.position().y + lab1.height + 10);

  user_in.id("username");
  user_in.attribute("type", "text");
  user_in.class("form-control");
  user_in.size(250);

  pass_in = createInput("", "password");
  pass_in.position(user_in.position().x, user_in.position().y + 200);
  pass_in.id("pass");
  pass_in.attribute("type", "password");
  pass_in.class("form-control");
  pass_in.size(250);
  lab2 = createElement("label", "Enter pass:");
  lab2.position(0, pass_in.position().y - 50);

  sub_button = createButton("Submit");
  sub_button.id("sub_button");
  sub_button.attribute("type", "btn");
  sub_button.class("btn .btn-primary");
  sub_button.position(windowWidth / 2 - 100, pass_in.position().y + 100);
  sub_button.mousePressed(_ => {
    document.getElementById("loading").style.display = "block";
    sub_button.addClass("btn-success");
    sub_button.attribute("disabled", "true");
    Check_from_LoL(LoL_data)
  });


  reset_button = createButton("Reset");
  reset_button.attribute("type", "btn");
  reset_button.class("btn .btn-primary");
  reset_button.position(windowWidth / 2 + 100, pass_in.position().y + 100);
  reset_button.mousePressed(() => {
    document.location.reload(true)
  });

  register_button = createButton("Register");
  register_button.attribute("type", "btn");
  register_button.class("btn .btn-primary");
  register_button.position(windowWidth / 2 - 100, reset_button.position().y + 50);
  register_button.mousePressed(() => {
    window.location = "register.php";
  });

  admin_button = createButton("Admin");
  admin_button.attribute("type", "btn");
  admin_button.class("btn .btn-primary");
  admin_button.position(windowWidth / 2 + 100, reset_button.position().y + 50);
  admin_button.mousePressed(() => {
    window.location = "admin.php";
  });
  document.querySelector("#pass").onkeypress = function (e) {
    if (!e) {
      e = window.event
    };
    var keyCode = e.keyCode || e.which;
    if (keyCode == 13) {
      Check_from_LoL()
    };
  }
}