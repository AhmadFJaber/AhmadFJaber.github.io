function validateForm() {
  var firstName = document.forms["internshipForm"]["fname"].value;
  var lastName = document.forms["internshipForm"]["lname"].value;
  var elMail = document.forms["internshipForm"]["email"].value;
  var user = document.forms["internshipForm"]["uname"].value;
  var pass = document.forms["internshipForm"]["password"].value;
  var x;
  var empty = [];
  var i = 0 ;
  if (firstName == "") {
	document.getElementById('fname').style.borderWidth="thick";  
	document.getElementById('fname').style.borderColor="red";
    x=0;
	empty [i]="First Name";
    i++;
	
  }
  if (lastName == "") {
	document.getElementById('lname').style.borderWidth="thick";
	document.getElementById('lname').style.borderColor="red";
    x=0;
	empty [i]="Last Name";
    i++;
  }
  if (elMail == "") {
	document.getElementById('email').style.borderWidth="thick";  
	document.getElementById('email').style.borderColor="red";
    x=0;
	empty [i]="email";
    i++;
  }
  if (user == "") {
	document.getElementById('uname').style.borderWidth="thick";
	document.getElementById('uname').style.borderColor="red";
    x=0;
	empty [i]="Username";
    i++;
  }
if (pass == "") {
	document.getElementById('password').style.borderWidth="thick";
	document.getElementById('password').style.borderColor="red";
    x=0;
	empty [i]="Password";
    i++;
  }
  if(x == 0){
	  alert("The following items are empty and must be filled\n-"+empty.join("\n-"));
	  return false;
  }
}
	
function lNameField(){
	firstName = document.forms["internshipForm"]["fname"].value;
	if(firstName!=""){
		document.getElementById('fname').style.borderWidth="thin";  
		document.getElementById('fname').style.borderColor="black";
		document.getElementById('lname').disabled=false;
	}
	else if(firstName==""){
		document.getElementById('lname').disabled=true;
	}
}
function emailOpen(){
	lastName = document.forms["internshipForm"]["lname"].value;
	if(lastName!=""){
		document.getElementById('lname').style.borderWidth="thin";  
		document.getElementById('lname').style.borderColor="black";
		document.getElementById('email').disabled=false;
	}
	else if(lastName==""){
		document.getElementById('email').disabled=true;
	}
}
	function userOpen(){
	elMail = document.forms["internshipForm"]["email"].value;
	if(elMail!=""){
		document.getElementById('email').style.borderWidth="thin";  
		document.getElementById('email').style.borderColor="black";
		document.getElementById('uname').disabled=false;
	}
	else if(elMail==""){
		document.getElementById('uname').disabled=true;
	}
}
function passOpen(){
	user = document.forms["internshipForm"]["uname"].value;
	if(user!=""){
		document.getElementById('uname').style.borderWidth="thin";  
		document.getElementById('uname').style.borderColor="black";
		document.getElementById('password').disabled=false;
	}
	else if(user==""){
		document.getElementById('password').disabled=true;
	}
}
function passField(){
	pass = document.forms["internshipForm"]["password"].value;
	if (pass!=""){
		document.getElementById('password').style.borderWidth="thin";  
		document.getElementById('password').style.borderColor="black";
	}
}

function save(){
	var name = elMail.substring(0, elMail.lastIndexOf("@"));
	alert("The application of " + name + " is saved!");
}
function resetFields(){
	document.getElementById('fname').style.borderWidth="thin";  
	document.getElementById('fname').style.borderColor="black";
	document.getElementById('lname').style.borderWidth="thin";  
	document.getElementById('lname').style.borderColor="black";
	document.getElementById('email').style.borderWidth="thin";  
	document.getElementById('email').style.borderColor="black";
	document.getElementById('uname').style.borderWidth="thin";  
	document.getElementById('uname').style.borderColor="black";
	document.getElementById('password').style.borderWidth="thin";  
	document.getElementById('password').style.borderColor="black";
}
// to set datepicker
var today = new Date();
var yearAhead = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var lastYear = yyyy+1;
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 


today = yyyy+'-'+mm+'-'+dd;
yearAhead = lastYear+'-'+mm+'-'+dd;
document.getElementById('gradDay').setAttribute("max", yearAhead);
document.getElementById('gradDay').setAttribute("min", today);