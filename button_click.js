function GetTime() {
    message = document.getElementById("result")

    if (document.getElementById("result").innerHtml == Date()) {
        document.getElementById("result").innerHtml = "";
    }
    else {
        document.getElementById("result").innerHtml = Date();
    }
}