let final_comp_name;
let not_present_in_ledger = false;

function bal_failure(err) {
    console.log(err);
}
let debug_bal, test, regex, comp_regex, phone_number, close_bal_reg, close_bal, open_bal_reg, open_bal;


function bal_suc(bal_dat) {
    debug_bal = bal_dat;
    console.log("reached bal_suc");
    regex = new RegExp(`[^]{180}<LEDGERMOBILE TYPE=\"String\">${num_in.value()}<\/LEDGERMOBILE>[^]{110}`);

    if (bal_dat.match(regex)) {
        let det_arr = bal_dat.match(regex)[0].split('\n');

        console.log(det_arr);
        // debug_bal = det_arr;
        let det = det_arr.join('\n');
        comp_regex = /(?<=<LEDGER NAME=\")(.*)(?=\" RESERVEDNAME="">)/ //using look behin6d and look ahead operators

        if (det.match(comp_regex)) {
            final_comp_name = det.match(comp_regex)[0];
            window.onload = function () {
                document.getElementById("loading").style.display = "none"
            };

            httpGet(`php/test_dupli.php?user=${username_in.value()}`, (resp) => {
                console.log("Response from test_dupli: " + resp);
                if (resp == "not present") Check_OTP();
                else {
                    document.getElementById("loading").style.display = "none";
                    alert("This username is already registered press okay to go to the login page");
                    window.location.href = "index.php";
                }
            })
        
        } else {
            window.onload = function () {
                document.getElementById("loading").style.display = "none"
            };
            let p = createP("Please use the number present in the ledger");
            p.position(windowWidth / 2, sub_button.position().y + 100);
        }

        
    } else {
        window.onload = function () {
            document.getElementById("loading").style.display = "none"
        };
        let p = createP("Please use the number present in the ledger");
        p.position(windowWidth / 2, sub_button.position().y + 100);

    }
}

function request_for_closing() {
    console.debug('reached here');
    httpGet(`${window.location.origin}/php/make_bal_req.php`, bal_suc, bal_failure);

}

function Check_if_already_present() {
    document.getElementById("loading").style.display = "block";
    console.log('button_pressed');

request_for_closing();

}