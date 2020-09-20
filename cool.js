function transferTo(html_site) {
    window.location.href = html_site;
}

function test() {
    var name=document.getElementById("text").value;
    var password=document.getElementById("pass").value;
    var alert = "This is your name: "+name+"\n"+"And this is your password: "+password;
    window.alert(alert);
    readTextFile("lol.txt");

}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                
            }
        }
    }
    rawFile.send(null);
}


