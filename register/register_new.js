let info_re;
let debug1;
let  user_in, pass_in, sub_button, num_in;
let LoL_request = '<ENVELOPE> 	<HEADER>    		<VERSION>1</VERSION>    		<TALLYREQUEST>Export</TALLYREQUEST>    		<TYPE>Data</TYPE>    		<ID>List of Ledgers</ID> 	</HEADER><BODY><DESC><TDL><TDLMESSAGE><REPORT NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <FORMS>List of Ledgers</FORMS>   </REPORT><FORM NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TOPPARTS>List of Ledgers</TOPPARTS>   <XMLTAG>"List of Ledgers"</XMLTAG>   </FORM><PART NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TOPLINES>List of Ledgers</TOPLINES>   <REPEAT>List of Ledgers : Collection of Ledgers</REPEAT>   <SCROLLED>Vertical</SCROLLED>   </PART><LINE NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <LEFTFIELDS>List of Ledgers</LEFTFIELDS>   </LINE><FIELD NAME="List of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <SET>$Name</SET>   <XMLTAG>"NAME"</XMLTAG>   </FIELD><COLLECTION NAME="Collection of Ledgers" ISMODIFY="No" ISFIXED="No" ISINITIALIZE="No" ISOPTION="No" ISINTERNAL="No">  <TYPE>Ledger</TYPE>   </COLLECTION>  </TDLMESSAGE>  </TDL></DESC></BODY></ENVELOPE>';



document.querySelector("#pass").onkeypress = function (e) {
  if (!e) {
    e = window.event
  };
  var keyCode = e.keyCode || e.which;
  if (keyCode == 13) {
    submitted();
  };
}

function setup() {
  noCanvas();
  user_in = select('#username');
  pass_in = select('#pass');
  num_in  = select('#phone_input');
}

function submitted() {
  document.querySelector('form').style.display = 'none';
  document.getElementById('loading').style.display = "none";
  // document.querySelector('h1').style.display = 'none';  
  Check_if_already_present();  // In Check_if_already_present.js

}