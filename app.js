function change(){
    var div = document.getElementById("box");
    var bgcolor = document.getElementById("bgcolor").value;
    div.style.backgroundColor = bgcolor;

    var textcolor = document.getElementById("textcolor").value;
    div.style.color = textcolor;

    var textsize = document.getElementById("textsize").value;
    div.style.textSize = textsize + "px";

    var width = document.getElementById("width").value;
    div.style.width = width + "px";

    var height = document.getElementById("height").value;
    div.style.height = height + "px";

    var bdradius = document.getElementById("bdradius").value;
    div.style.borderRadius = bdradius + "%";
}
