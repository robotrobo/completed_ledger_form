let table, name_head;
let debugarr;

function display(arr, name_of_comp,admin) {
    // let party_name = name_of_comp;
    // if(lab1 && lab2 && user_in && pass_in && sub_button && register_button && info_re){
    if(!admin){
    lab1.remove();
    debug = arr;
    lab2.remove();
    user_in.remove();
    pass_in.remove();
    sub_button.remove();
    register_button.remove();
    info_re.remove();
    // }
    }
    name_head = createElement("h1", `${name_of_comp}`);
    table = createElement("table", "<thead><tr><th>Date</th><th>Particular</th><th>Vch type</th><th>Debit</th><th>Credit</th></tr></thead>");
    table.id("mytable");
    table.attribute("class", "table");
    tbl = document.getElementById("mytable");



    for (let i = 0; i < arr.length; i++) {
        var row = tbl.insertRow();
        let temp_array = arr[i].split(",") //.splice(2,1);
        temp_array.splice(2, 1);
        // debugarr = temp_array;
        // console.debug(temp_array);
        if (temp_array[0] !== "\"\"") {
            for (let j = 0; j < temp_array.length; j++) {
                var cell = row.insertCell();
                if (j == 3 && temp_array[j] != '') {
                    cell.innerHTML = abs(eval(temp_array[j]));
                } else if (j == 1 && temp_array[j] == "\"(as per details)\"") {
                    cell.innerHTML = "GST sales";
                } else {
                    cell.innerHTML = temp_array[j];
                }
            }
            // console.debug(arr[i]);
        } else {
            continue;
        }
    }
    
    row = tbl.insertRow();
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";
    cell = row.insertCell();
    cell.innerHTML = "";
    if (abs(eval(open_bal)) > 0) {
        cell = row.insertCell();
        cell.innerHTML = `<strong>Opening balace:${abs(eval(open_bal))}</strong>`;
        cell = row.insertCell();
        cell.innerHTML = "";
    } else if (abs(eval(open_bal)) < 0) {
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
    if (abs(eval(close_bal)) > 0) {
        cell = row.insertCell();
        cell.innerHTML = `<strong>Closing- balace:${abs(eval(close_bal))}</strong>`;
        cell = row.insertCell();
        cell.innerHTML = "";
    } else if (abs(eval(close_bal)) < 0) {
        cell = row.insertCell();
        cell.innerHTML = "";
        cell = row.insertCell();
        cell.innerHTML = `<strong>Closing balace:${abs(eval(close_bal))}</strong>`;
    }
    
    
    reset_button.position(windowWidth / 2, table.size().height + 300);
    httpGet(`${window.location.origin}/log.php?string=${encodeURIComponent(name_of_comp)}%20logged%20in`);
    document.getElementById("dev").style.display = "none";
   
    document.getElementById("loading").style.display = "none";
}