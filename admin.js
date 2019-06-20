let drop,list;
let element;
window.onload = function(){

    let pass = "f8c1aabc8d4a9751090273cbed5bd8b5";
    if(md5(prompt("Please enter the pass or the page will refresh")) != pass)
         window.location.href = "admin.php";   
}


function call(name){

            let php_url = `${window.location.origin}/make_request.php?name=${encodeURIComponent(name)}`;
            console.log("trying php now for" + name);
            httpGet(php_url, (data) => {
                debug = data;
                ledger_success(data, name,1);
            });



}


function setup() {
// a.repla
a = a.split('\n')
  
    list = select('.dropdown-menu');
    // createElement('li','<a>tast</a>').parent(a) 
    for (let i = 0; i < a.length; i++) {
        if(a[i].match(/\"(.*)\"/))
        a[i] = a[i].match(/\"(.*)\"/)[1];
        // let element = createButton(a[i]);
        // // element.parent()
        // element.id(i)
        let li = createElement('li', `<a href="#" onclick="call(this.innerHTML); return false;" >${a[i]}</a>`)
        
        // let line = createElement("br");
        li.parent(list);
        // line.parent(list);
        // element.onClick(_ =>{
        //     let php_url = `${window.location.origin}/make_request.php?name=${encodeURIComponent(a[i])}`;
        //     console.log("trying php now for" + a[i]);
        //     httpGet(php_url, (data) => {
        //         // wrong=0;
        //         // console.log(data);
        //         debug = data;
        //         ledger_success(data, a[i],1);
        //     });


        // })
    }
    







// let b = createButton(label, [value])

}










$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      console.log(value);
      $(".dropdown-menu li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });