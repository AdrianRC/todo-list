var input = document.querySelector("input[type='text']");
var toDoList = document.querySelector("#toDoList");
var listItems = document.querySelectorAll("li");
var plusSign = document.querySelector(".inputDisplay");
var inputVisible = true;

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        createLI(this.value);
        this.value = "";
    }
});

function createLI(text) {
    var newLI = document.createElement("li");
    newLI.appendChild(createIcon());
    newLI.insertAdjacentText("beforeEnd", " " + text);
    toDoList.appendChild(newLI);
}

toDoList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.tagName == "LI") {
        element.classList.toggle("done");
    } else if (element.tagName == "SPAN") {
        fade(element.parentNode);
    } else if (element.tagName == "I") {
        fade(element.parentNode.parentNode);
    }
});

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            //element.style.display = 'none';
            element.parentNode.removeChild(element);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 15);
}

function createIcon() {
    var newSpan = document.createElement("span");
    var newIcon = document.createElement("i");
    newIcon.setAttribute("aria-hidden", true);
    newIcon.classList.add("fa", "fa-trash-o");
    newSpan.appendChild(newIcon);
    return newSpan;
};

plusSign.addEventListener("click", function () {
    if (inputVisible) {
        input.style.display = "none";
        inputVisible = false;
        plusSign.classList.remove("fa-minus");
        plusSign.classList.add("fa-plus");
    } else {
        input.style.display = "block";
        inputVisible = true;
        plusSign.classList.remove("fa-plus");
        plusSign.classList.add("fa-minus");
    }
});

