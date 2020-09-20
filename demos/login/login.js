function login() 
{
    var name=document.getElementById("name").value;
    var pass=document.getElementById("password").value;
    if(name=="") {
        window.alert("You must provide name");
        return;
    }
    if(pass=="") {
        window.alert("You must have password");
        return;
    }
    
    window.location.href = "logme.php?name="+name+"&password="+pass;
}