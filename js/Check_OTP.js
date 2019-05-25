// let api_key = "50900ad3-d2e6-11e8-a895-0200cd936042";

function Check_OTP() {
    document.getElementById("loading").style.display = "none";
    let send_url = `${window.location.origin}/otp_req.php?num=${num_in.value()}&method=request_otp`;
    // let bal_check_url = `https://2factor.in/API/V1/50900ad3-d2e6-11e8-a895-0200cd936042/BAL/SMS`;
    //send OTP
    // httpPost(send_url,req_suc, req_fail);
    // let php_url = `${window.location.origin}/make_request.php?name=${j}`;
    // document.cookie = `name=${j}`;
    console.log("trying php now");
    httpGet(send_url, req_suc, req_fail);
}



let opt_debug;

function req_suc(data) {
    console.log("reached success " + data);
    opt_debug = data;
    if (data)
        data = JSON.parse(data);
    else {
        console.log("data");
        let p = createP("Theres an error, try again please ");
        p.position(sub_button.position().x, sub_button.position().y + 100);
    }
    if (data.Status === "Success") {
        let otp_entered = window.prompt("Please enter the OTP");
        Check_the_gen_otp(data.Details, otp_entered);
    }
}

function req_fail(err) {
    console.log(err);

}

function Check_the_gen_otp(session_id, otp_entered) {
    let check_url = `${window.location.origin}/otp_req.php?ses=${session_id}&otp=${otp_entered}&method=verify_otp`;

    httpGet(check_url, check_req_suc, check_req_fail);


}

function check_req_suc(data) {
    if (JSON.parse(data))
        data = JSON.parse(data);
    else
        console.log("error");
    if (data.Details === "OTP Matched") {

        httpGet(`${window.location.origin}/log.php?string=${encodeURIComponent(final_comp_name)}%20registered`);
        Save_to_file(final_comp_name, username_in.value(), pass_in.value());
    } else {
        alert("Sorry wrong otp, Try again");
        window.location.href = "register.php";

    }
}

function check_req_fail(err) {
    let p = createP("theres an err: " + err);
    p.position(sub_button.position().x, sub_button.position().y + 100);

}