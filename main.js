function formValidate() {
var email = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var erorr = document.getElementById("erorr");
var text = "";
if (email.indexof("@") == -1 || email.length<10 ) {
    text = "Please Enter Valid Email";
    erorr.innerHTML=text;
    return false;
}
else if (pass.length<8){
    text = "Please Enter Valid Password";
    erorr.innerHTML=text;
    return false;
}
else{
    alert(success)
    return true;
}
}
