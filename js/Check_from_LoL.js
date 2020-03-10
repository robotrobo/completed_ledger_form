let input_name;
let input_pass;

function Check_from_LoL(Data) {
    console.debug('checkfromlol');

    input_name = user_in.value().toUpperCase();
    input_pass = pass_in.value();
    console.debug("Checking name");


    httpGet(`${window.location.origin}/php/login.php?user=${encodeURIComponent(user_in.value())}&hash=${encodeURIComponent(md5(input_pass))}`, (comp_test) => {
        if (comp_test == "0 results") {
            document.getElementById("loading").style.display = "none";
            alert("Sorry wrong username or pass, please retry");
            window.location.href = "index.php";
        } else {
            let php_url = `${window.location.origin}/php/make_request.php?name=${encodeURIComponent(comp_test)}`;
            console.log("trying php now1 for" + comp_test);
            httpGet(`${window.location.origin}/php/log.php?string=${comp_test} logged in.`)
            httpGet(php_url, (data) => {
                // debug = data;
                ledger_success(data, comp_test); // In Ledger_request.js
            });
        }
    });

}