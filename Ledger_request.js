let ledger_request, bal_req;
let ledger_data;

function ledger_success(data, j, admin) {
    ledger_data = data;

    // console.debug("***************LEDGER START*******************************");
    // console.debug(data);
    // console.debug("***************LEDGER END*******************************");
    // display(data.split(/\n/),j);
    //now requesting opening/closing balance.
    request_for_closing(data, j, admin);

}

function ledger_failure(err) {
    console.debug("***************LEDGER ERROR START*******************************");
    console.debug("Sorry there's an error");
    console.debug(err);
    console.debug("***************LEDGER ERROR END*******************************");
}
let cur_name;

let debug_bal, test, regex, phone_regex, phone_number, close_bal_reg, close_bal, open_bal_reg, open_bal;

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

}

function bal_suc(bal_dat, admin) {
    debug_bal = bal_dat;
    console.log("reached bal_suc " + cur_name);
    regex = new RegExp(`<LEDGER NAME="${escapeRegex(cur_name)}" RESERVEDNAME="">[^]{300}`);
    let det_arr = bal_dat.match(regex)[0].split('\n');

    det = det_arr.join('\n');
    close_bal_reg = /<CLOSINGBALANCE TYPE=\"Amount\">(.*)<\/CLOSINGBALANCE>/;
    close_bal = det.match(close_bal_reg)[1];

    open_bal_reg = /<OPENINGBALANCE TYPE=\"Amount\">(.*)<\/OPENINGBALANCE>/;
    open_bal = det.match(open_bal_reg)[1];
    console.log("calling display with admin = " + admin)
    display(ledger_data.split(/\n/), cur_name, admin);
}



function request_for_closing(data, j, admin) {
    ledger_data = data;
    cur_name = j;
    console.log(j)
    // bal_req = `<ENVELOPE>  <HEADER>  <VERSION>1</VERSION>  <TALLYREQUEST>EXPORT</TALLYREQUEST>  <TYPE>COLLECTION</TYPE>  <ID>Remote Ledger Coll</ID>  </HEADER>  <BODY>  <DESC>  <STATICVARIABLES>  <SVEXPORTFORMAT>$$SysName:ASCII</SVEXPORTFORMAT>  </STATICVARIABLES>  <TDL>  <TDLMESSAGE>  <COLLECTION NAME="Remote Ledger Coll" ISINITIALIZE="Yes">  <TYPE>Ledger</TYPE>  <NATIVEMETHOD>Name</NATIVEMETHOD>  <NATIVEMETHOD>OpeningBalance </NATIVEMETHOD>  <NATIVEMETHOD>ClosingBalance </NATIVEMETHOD>  <NATIVEMETHOD>LedgerPhone </NATIVEMETHOD>  <NATIVEMETHOD>LedgerMobile </NATIVEMETHOD>  </COLLECTION>  </TDLMESSAGE>  </TDL>  </DESC> </BODY> </ENVELOPE>`
    console.debug('reached here');
    httpGet(`${window.location.origin}/make_bal_req.php`, (resp) => bal_suc(resp, admin), ledger_failure);


}