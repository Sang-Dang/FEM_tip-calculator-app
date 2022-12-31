const allButtons = document.querySelectorAll(".button-item");
const inputBoxes = document.querySelectorAll("input");
const tipBox = document.querySelector("#input-custom-tip");
const alltips = document.getElementById("tip-amount");
const total = document.getElementById("total-amount");
var checkEmpty = [false, false, false];

function isEmpty(str) {
    str = String(str);
    return !str.trim();
}

function reset() {
    resetButtons();
    checkEmpty = [false, false, false];
    inputBoxes.forEach(item => { item.value = ""; });
    alltips.innerHTML = "$0";
    total.innerHTML = "$0";
}

function resetButtons() {
    allButtons.forEach(item => {
        item.classList.remove("active");
    });
};

inputBoxes[0].addEventListener("blur", () => {
    if (!isEmpty(inputBoxes[0].value)) {
        checkEmpty[0] = true;
    } else {
        checkEmpty[0] = false;
    }
    submit();
})

// custom tips
tipBox.addEventListener("blur", () => {
    var number = tipBox.value.charAt(tipBox.value.length - 1) == "%" ? tipBox.value.slice(0, -1) : tipBox.value;
    if (isEmpty(number) || isNaN(number) || number < 0) {
        tipBox.value = "";
    } else {
        if (tipBox.value.charAt(tipBox.value.length - 1) != "%") {
            tipBox.value += "%";
        }
        resetButtons();
        checkEmpty[1] = isEmpty(tipBox.value) ? false : true;
        submit();
    }
});

// number of people
inputBoxes[2].addEventListener("blur", () => {
    if (inputBoxes[2].value <= 0 || isEmpty(inputBoxes[2])) {
        document.getElementById("errormsg").style.opacity = 1;
        inputBoxes[2].classList.add("error");
        checkEmpty[2] = false;
    } else {
        document.getElementById("errormsg").style.opacity = 0;
        inputBoxes[2].classList.remove("error");
        checkEmpty[2] = true;
        submit();
    }
});

function submit() {
    if (checkEmpty.includes(false)) {
        return;
    }
    var bill = inputBoxes[0].value;
    var tip;
    if (inputBoxes[1].value.length != 0) {
        tip = inputBoxes[1].value.slice(0, -1);
    } else {
        tip = document.querySelector(".button-item.active").innerHTML.slice(0, -1);
    }
    var people = inputBoxes[2].value;

    console.log("bill: " + bill);
    console.log("tip: " + tip);
    console.log("people: " + people);

    var tipfinal = (bill * (tip / 100)) / people;
    var totalfinal = tipfinal + (bill / people);
    alltips.innerHTML = "$" + tipfinal;
    total.innerHTML = "$" + totalfinal;
    console.log("tips: " + tipfinal + ". Total: " + totalfinal);
}

// radio buttons
allButtons.forEach(item => {
    item.addEventListener('click', () => {
        resetButtons();
        item.classList.toggle("active");
        tipBox.value = "";
        checkEmpty[1] = true;
        submit();
    })
});
