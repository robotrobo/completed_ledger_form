let table, name_head;
let debugarr;

function display(arr, name_of_comp, admin) {

    document.querySelector('body').style.background = "white";
    select('.site-footer').remove();
    name_head = createElement("h1", `${name_of_comp}`);
    document.getElementsByTagName('h1')[1].style.color = "black"
    httpGet(`${window.location.origin}/php/log.php?string=${encodeURIComponent(name_of_comp)}%20logged%20in`);
    name_head.style.color = "black"
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
                let cell = row.insertCell();
                // cell.style.
                let regex = /".*"/  //check if string is covered with quotations
                if(typeof(temp_array[j] == "string") && regex.test(temp_array[j])){
                    console.log(`${temp_array[j]} becomes ${eval(temp_array[j])}`)
                    temp_array[j] = eval(temp_array[j])
                }
                if (j == 4 && temp_array[j] != '') {
                    let amount = abs(eval(temp_array[j])).toFixed(2);
                    cell.style.textAlign = "right"
                    total_credit += int(amount);
                }
                if (j == 3 && temp_array[j] != '') {
                    let amount = abs(eval(temp_array[j])).toFixed(2);
                    cell.style.textAlign = "right"
                    cell.innerHTML = amount;
                    total_debit += int(amount)
                } else if (j == 1) {
                    if (temp_array[j] == "(as per details)") {
                        
                        cell.innerHTML = "GST sales";
                        
                    }
                    else{
                        cell.innerHTML = temp_array[j]
                    }
                } else {
                    cell.innerHTML = temp_array[j];
                }
            }
        } else {
            continue;
        }
    }
    // console.debug(total);
    console.log(`total debit: ${total_debit} \n total credit: ${total_credit}`);
    let total = total_credit - total_debit;
    console.log(`total = ${total}`);
    let calc_opening = eval(close_bal) - total;
    console.log(`Calc opening = ${calc_opening}`);
    open_bal = calc_opening.toFixed(2);

    row = tbl.insertRow();
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Opening Balance:</strong>";

    if (eval(open_bal) < 0) {
        cell = row.insertCell();
        cell.style.textAlign = "right"
        cell.innerHTML = `<strong>${abs(eval(open_bal))}</strong>`;
        cell = row.insertCell();
        cell.innerHTML = "";
    } else if (eval(open_bal) > 0) {
        cell = row.insertCell();
        cell.innerHTML = "";
        cell = row.insertCell();
        cell.style.textAlign = "right"
        cell.innerHTML = `<strong>${abs(eval(open_bal))}</strong>`;
    }
    row = tbl.insertRow();
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "<strong>Closing Balance:</strong>";


    if (eval(close_bal) < 0) {
        cell = row.insertCell();
        cell.style.textAlign = "right"
        cell.innerHTML = `<strong>${abs(eval(close_bal))}</strong>`;
        cell = row.insertCell();
        cell.innerHTML = "";
    } else if (eval(close_bal) > 0) {
        cell = row.insertCell();
        cell.innerHTML = "";
        cell = row.insertCell();
        cell.style.textAlign = "right"
        cell.innerHTML = `<strong>${abs(eval(close_bal))}</strong>`;
    }

  

    document.querySelector("#loading").style.display = "none";
    document.querySelector(".wrapper").style.display = "none";
    document.querySelector("body").background = "white";
}