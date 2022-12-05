/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
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