var toggle = true;

function sampleCSS() {
    'use strict';
    document.getElementById("css").value = "h4{color: lightblue; text-align: center;}\np{font-family: verdana, cursive; font-size: 35pt; text-align: right;}";
}

function sampleHTML() {
    'use strict';
    document.getElementById("html").value = "<h4>Hello World!</h4>\n<p>Welcome to me code editor application!</p>";
}

function launchHTML() {
    'use strict';
    var htmlText = document.getElementById("html").value;
    document.getElementById("display").innerHTML = htmlText;
}

function toggleCSS() {
    'use strict';
    var cssText = document.getElementById("css").value;

    if (toggle) {
        document.getElementById("style").innerHTML = cssText;
        document.getElementById("toggle").style.backgroundColor = "green";
        toggle = false;
    } else {
        document.getElementById("style").innerHTML = ""; 
        document.getElementById("toggle").style.backgroundColor = "darkblue";
        toggle = true;
    }

}

function clearCode() {
    'use strict';
    document.getElementById("display").innerHTML = "";
    document.getElementById("style").innerHTML = "";
    document.getElementById("toggle").style.backgroundColor = "darkblue";
    document.getElementById("css").value = "";
    document.getElementById("html").value = "";
}

function changeTitle() {
    var newTitle = prompt("Enter a New Page Title: ");    
    document.getElementById("title").innerHTML = newTitle;
    document.getElementById("header").innerHTML = newTitle;
}