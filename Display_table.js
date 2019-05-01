let table, name_head;
let debugarr;

function display(arr, name_of_comp, admin) {
    // let party_name = name_of_comp;
    // if(lab1 && lab2 && user_in && pass_in && sub_button && register_button && info_re){
    // if (!admin) {
    //     lab1.remove();
    //     debug = arr;
    //     lab2.remove();
    //     user_in.remove();
    //     pass_in.remove();
    //     sub_button.remove();
    //     register_button.remove();
    //     info_re.remove();
    //     // }

    name_head = createElement("h1", `${name_of_comp}`);
    table = createElement("table", "<thead><tr><th>Date</th><th>Particular</th><th>Vch type</th><th>Debit</th><th>Credit</th></tr></thead>");
    table.id("mytable");
    table.attribute("class", "table");
    tbl = document.getElementById("mytable");



    let total_debit = 0;
    let total_credit = 0;

    for (let i = 0; i < arr.length; i++) {
        var row = tbl.insertRow();
        let temp_array = arr[i].split(",") //.splice(2,1);
        temp_array.splice(2, 1);
        // debugarr = temp_array;
        // console.debug(temp_array);
        if (temp_array[0] !== "\"\"") {
            for (let j = 0; j < temp_array.length; j++) {
                var cell = row.insertCell();
                if (j == 4 && temp_array[j] != '') {
                    let amount = abs(eval(temp_array[j]));
                    total_credit += amount;
                }
                if (j == 3 && temp_array[j] != '') {
                    let amount = abs(eval(temp_array[j]));
                    cell.innerHTML = amount;
                    total_debit += amount
                } else if (j == 1 && temp_array[j] == "\"(as per details)\"") {
                    cell.innerHTML = "GST sales";
                } else {
                    cell.innerHTML = temp_array[j];
                }
            }
        } else {
            continue;
        }
    }
    // console.debug(total);

    row = tbl.insertRow();
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";

    console.log(`total debit: ${total_debit} \n total credit: ${total_credit}`);
    let total = total_credit - total_debit;
    console.log(`total = ${total}`);
    let calc_opening = eval(close_bal) - total;
    console.log(`Calc opening = ${calc_opening}`);
    open_bal = calc_opening.toFixed(2);
    if (eval(open_bal) < 0) {
        cell = row.insertCell();
        cell.innerHTML = `<strong>Opening balace:${abs(eval(open_bal))}</strong>`;
        cell = row.insertCell();
        cell.innerHTML = "";
    } else if (eval(open_bal) > 0) {
        cell = row.insertCell();
        cell.innerHTML = "";
        cell = row.insertCell();
        cell.innerHTML = `<strong>Opening balace:${abs(eval(open_bal))}</strong>`;
    }
    row = tbl.insertRow();
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";


    if (eval(close_bal) < 0) {
        cell = row.insertCell();
        cell.innerHTML = `<strong>Closing balace:${abs(eval(close_bal))}</strong>`;
        cell = row.insertCell();
        cell.innerHTML = "";
    } else if (eval(close_bal) > 0) {
        cell = row.insertCell();
        cell.innerHTML = "";
        cell = row.insertCell();
        cell.innerHTML = `<strong>Closing balace:${abs(eval(close_bal))}</strong>`;
    }

    // admin_button.remove();
    // reset_button.position(windowWidth / 2, table.size().height + 300);
    httpGet(`${window.location.origin}/log.php?string=${encodeURIComponent(name_of_comp)}%20logged%20in`);

    document.querySelector("#loading").style.display = "none";
    document.querySelector(".wrapper").style.display = "none";
    document.querySelector("body").bgColor = "white";
}