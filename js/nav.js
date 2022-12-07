function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementsByClassName("icon");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("open").id = "closed";
    } else {
        x.style.display = "block";
        document.getElementById("closed").id = "open";
        console.log(y.id)
    
    }
}
