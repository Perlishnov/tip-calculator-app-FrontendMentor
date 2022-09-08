"use strict";

//Input HTML ELEMENTS

const billInput = document.getElementById("bill-input");
const tip5Percent = document.getElementById("tip-5");
const tip10Percent = document.getElementById("tip-10");
const tip15Percent = document.getElementById("tip-15");
const tip25Percent = document.getElementById("tip-25");
const tip50Percent = document.getElementById("tip-50");
const tipCustomPercent = document.getElementById("custom-tip-input");
const numberPeopleInput = document.getElementById("number-people-input");

//OutPut HTML ELEMENTS
const OutPutTipAmount = document.getElementById("output-result-tips");
const OutPutTotalAmount = document.getElementById("output-result-total");

// Special elements
const resetButton = document.getElementById("reset-btn");
const numberPeopleInputMessage = document.getElementById(
  "number-people-input-message"
);
const numberPeopleInputContainer = document.getElementById(
  "number-people-input-container"
);

resetButton.addEventListener("click", () => {
  if (billInput.value === "" && numberPeopleInput.value === "") {
    resetButton.removeEventListener("click");
  } else {
    billInput.value = "";
    numberPeopleInput.value = "";
    tip10Percent.value = "";
    OutPutTipAmount.innerHTML = "&dollar;0.00";
    OutPutTotalAmount.innerHTML = "&dollar;0.00";
    resetButton.classList.add("disabled");
  }
});
billInput.addEventListener("input", () => {
  if (billInput.value === "") {
    resetButton.classList.add("disabled");
  } else {
    resetButton.classList.remove("disabled");
  }
});
numberPeopleInput.addEventListener("input", () => {
  if (numberPeopleInput.value === "") {
    resetButton.classList.add("disabled");
  } else {
    resetButton.classList.remove("disabled");
  }
  if (parseInt(numberPeopleInput.value) === 0) {
    numberPeopleInputContainer.classList.add("error");
    numberPeopleInputMessage.style.visibility = "visible";
  } else {
    numberPeopleInputContainer.style.outlineColor = "26c0ab";
    numberPeopleInputMessage.style.visibility = "hidden";
  }
});
