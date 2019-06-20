function done(stuff) {
  console.log(stuff);
  if (stuff.split(" ")[0] == "Duplicate")
    alert("You are already registered, redirecting you to the login page");
  else
    alert("You are now registered");

  window.location.href = "index.php";

}

function failed(err) {
  console.log(err);
  alert(err + "Please try again");

}

function Save_to_file(comp, user, pass) {

  console.debug(comp);
  console.debug(user);
  console.debug(md5(pass));
  httpGet(`${window.location.origin}/save.php?comp=${encodeURIComponent(comp)}&user=${encodeURIComponent(user)}&pass=${encodeURIComponent(md5(pass))}`)

  httpGet(`${window.location.origin}/phptest.php?comp=${encodeURIComponent(comp)}&user=${encodeURIComponent(user)}&pass=${encodeURIComponent(md5(pass))}`, done, failed)

  // alert(`Congratulations,you have now registered ${final_comp_name} as ${user}, please press ok to go to the login page `)
  // window.location.href = "index.php";
}