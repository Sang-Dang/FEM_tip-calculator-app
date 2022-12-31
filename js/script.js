const allButtons = document.querySelectorAll(".button-item");
const inputBoxes = document.querySelectorAll("input");
const tipBox = document.querySelector("#input-custom-tip");

function isEmpty(str) {
    str = String(str);
    return !str.trim();
}

function reset() {
    resetButtons();
    inputBoxes.forEach(item => {
        item.value = "";
    })
};

function resetButtons() {
    allButtons.forEach(item => {
        item.classList.remove("active");
    });
};

tipBox.addEventListener("blur", () => {
    var number = tipBox.value.charAt(tipBox.value.length - 1) == "%" ? tipBox.value.slice(0, -1) : tipBox.value;
    if (isEmpty(number) || isNaN(number) || number < 0) {
        tipBox.value = "";
    } else {
        if (tipBox.value.charAt(tipBox.value.length - 1) != "%")
            tipBox.value += "%";
    }
});

inputBoxes[2].addEventListener("blur", () => {
    console.log(inputBoxes[2]);
    if(inputBoxes[2].value <= 0 || isEmpty(inputBoxes[2])) {
        document.getElementById("errormsg").style.opacity = 1;
        inputBoxes[2].classList.add("error");
    } else {
        document.getElementById("errormsg").style.opacity = 0;
        inputBoxes[2].classList.remove("error");
        submit();
    }
});

var alltips = document.getElementById("tip-amount");
var total = document.getElementById("total");

function submit() {
    var bill = inputBoxes[0].value;
    var tip;
    if(inputBoxes[1].value.length != 0) {
        tip = inputBoxes[1].value;
    } else {
        tip = document.querySelector(".buttonitem.active");
    }
    var people = inputBoxes[2].value;

    console.log(bill);
    console.log(tip);
    console.log(people);

    var tipfinal = (bill * (tip / 100)) / people;
    alltips.innerHTML = tipfinal;
}

allButtons.forEach(item => {
    item.addEventListener('click', () => {
        resetButtons();
        item.classList.toggle("active");
    })
});
