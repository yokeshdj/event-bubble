var create = document.getElementById("create");
create.addEventListener("click",createCard);
var result = document.getElementById("result");
function createCard(){
    var div = document.createElement("div");
    var nameEl = document.createElement("h1");
    var name = event.target.parentNode.getElementsByTagName("input")[0].value;
    var numEl = document.createElement("h1");
    var num = event.target.parentNode.getElementsByTagName("input")[1].value;
    var btn = document.createElement("button");
    var hideMsg = document.createElement("h1")
    hideMsg.id = "hideMsg";
    hideMsg.textContent = "Number Hidden"
    hideMsg.className = "hide";
    num.className = "show";
    btn.textContent = "Hide";
    nameEl.textContent = name;
    numEl.textContent = num;
    div.append(nameEl,btn,numEl,hideMsg)
    result.append(div);
}

result.addEventListener("click",handleBtn);
function handleBtn(){
    if(event.target.textContent == "Hide"){
        var num  = event.target.parentNode.getElementsByTagName("h1")[1];
        var hideMsg = document.getElementById("hideMsg")
        num.className = "hide";
        hideMsg.className = "show"
        event.target.textContent = "Show"
    }
    else if(event.target.textContent == "Show"){
        var num  = event.target.parentNode.getElementsByTagName("h1")[1];
        var hideMsg = document.getElementById("hideMsg")
        num.className = "show";
        hideMsg.className = "hide"
        event.target.textContent = "Hide"
    }
}