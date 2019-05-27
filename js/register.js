let comp_in, pass_in, username_in, num_in, lab1, lab2, lab3, lab4;
let LoL_request = '<ENVELOPE> 	<HEADER>    		<VERSION>1</VERSION>    		<TALLYREQUEST>Export</TALLYREQUEST>    		<TYPE>Data</TYPE>    		<ID>List of Ledgers</ID> 	</HEADER><BODY><DESC><TDL><TDLMESSAGE><REPORT NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <FORMS>List of Ledgers</FORMS>   </REPORT><FORM NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TOPPARTS>List of Ledgers</TOPPARTS>   <XMLTAG>"List of Ledgers"</XMLTAG>   </FORM><PART NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TOPLINES>List of Ledgers</TOPLINES>   <REPEAT>List of Ledgers : Collection of Ledgers</REPEAT>   <SCROLLED>Vertical</SCROLLED>   </PART><LINE NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <LEFTFIELDS>List of Ledgers</LEFTFIELDS>   </LINE><FIELD NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <SET>$Name</SET>   <XMLTAG>"NAME"</XMLTAG>   </FIELD><COLLECTION NAME="Collection of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TYPE>Ledger</TYPE>   </COLLECTION>  </TDLMESSAGE>  </TDL></DESC></BODY></ENVELOPE>';

function setup() {
    lab1 = createElement("label", "Enter your mobile number:");
    lab1.position(0, 100);

    num_in = createInput("", "text");
    num_in.position(0, lab1.position().y + lab1.height + 10);
    num_in.id("num");
    num_in.attribute("type", "text");
    num_in.size(250);
    num_in.class("form-control");
    //jquery to allow only numbers-
    $(document).ready(function () {
        //called when key is pressed in textbox
        $("#num").keypress(function (e) {
           //if the letter is not digit then display error and don't type anything
           if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
              //display error message
              $("#errmsg").html("Digits Only").show().fadeOut("slow");
                     return false;
          }
         });
      }); 
    username_in = createInput("", "text");
    username_in.position(num_in.position().x, num_in.position().y + 100);
    username_in.id("username");
    username_in.attrib
    function submitted() {ute("type", "text");
    username_in.size(200);
    username_in.class("form-control");

    lab2 = createElement("label", "Enter new username:");
    lab2.position(0, username_in.position().y - 50);


    pass_in = createInput("", "password");
    pass_in.position(username_in.position().x, username_in.position().y + 100);
    pass_in.id("pass");
    pass_in.attribute("type", "password");
    pass_in.size(200);
    pass_in.class("form-control");

    lab3 = createElement("label", "Enter new pass:");
    lab3.position(0, pass_in.position().y - 50);
    sub_button = createButton("Submit");
    sub_button.attribute("type", "btn");
    sub_button.class("btn .btn-primary");
    sub_button.position(windowWidth / 2, pass_in.position().y + 100);
    sub_button.mousePressed(Check_if_already_present); // Check_if_already_present.js

    reset_button = createButton("Reset");
    reset_button.attribute("type", "btn");
    reset_button.class("btn .btn-primary");
    reset_button.position(windowWidth / 2 + 200, pass_in.position().y + 100);
    reset_button.mousePressed(() => {
        document.location.reload(true)
    });

}}