function formValidate(){
var userName = document.getElementById("name").value ;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var text =" ";
var error=document.getElementById("error")
var username1 = document.getElementById("username").value ;
console.log("hello");
if (userName.length < 5 || username1.length < 5 ) {
   text = "Please Enter Valid Name";
   error.innerHTML= text;
   return false;
}
else if(email.indexOf("@")== -1 && email.length < 6){
    text = "Please Enter Valid Mail";
    error.innerHTML= text;
    return false;
}
else if(password.length < 8){
    text = "Please Enter Valid Password";
    error.innerHTML= text;
    return false;
}
else {

    alert("Done");
   return true;
    
}

}
function formValidatee(){
    var username = document.getElementById("username").value ;
    var password = document.getElementById("password").value;
    var text =" ";
    var error=document.getElementById("error")
    
    console.log("hello");
    if (username.length < 5 ) {
       text = "Please Enter Valid Name";
       error.innerHTML= text;
       return false;
    }

    else if(password.length < 8){
        text = "Please Enter Valid Password";
        error.innerHTML= text;
        return false;
    }
    else {
    
        alert("Done");
        
        return true;
        
    }
    
    }