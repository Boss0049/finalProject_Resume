function showTheme(){
    var x = document.getElementById("bright");
    var y = document.getElementById("dark");
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundImage = "none";
    document.body.style.color = "#fff";
    if(x.style.display == "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";  
    }
}
function closeTheme(){
    var x = document.getElementById("bright");
    var y = document.getElementById("dark");
    document.body.style.backgroundImage = "url('/assets/img/bg-img.jpg')";
    document.body.style.color = "#000";
    if(y.style.display == "block"){
        y.style.display = "none";  
    }
    else {
        y.style.display = "block";
        x.style.display = "none";
    }
}
function onHover(){
    var date = new Date();
    document.getElementById("date").innerHTML = date;
    document.getElementById("hover").style.color = "#67a272";
}
function onOut(){
    document.getElementById("date").innerHTML = "";
    document.getElementById("hover").style.color = "#e84646";
}

