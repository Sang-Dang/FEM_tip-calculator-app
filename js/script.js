const allButtons = document.querySelectorAll(".button-item");
const allMainInputBoxes = document.querySelectorAll(".main-input-box");
const allInputBoxes = document.querySelectorAll("input");

function isEmpty(str) {
    return str === null || str.match(/^ *$/) !== null || str.match(/^\s*$/) !== null;
};

function reset() {
    resetButtons();
    allInputBoxes.forEach(item => {
        item.value = "";
    })
};

function resetButtons() {
    allButtons.forEach(item => {
        item.classList.remove("active");
    });
};

document.querySelector("#input-custom-tip").addEventListener("blur", () => {
    
})

allButtons.forEach(item => {
    item.addEventListener('click', () => {
        resetButtons();
        item.classList.toggle("active");
    })
});
