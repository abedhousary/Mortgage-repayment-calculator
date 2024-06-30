let mortageammount = document.querySelector(".amminput");
let yearsinp = document.querySelector("#years");
let interestrate = document.querySelector("#Interestrate");
let radios = document.querySelectorAll(".radio-cont");


let emptycon = document.querySelector(".empty");
let resultcon = document.querySelector(".result-con");
let button = document.querySelector(".button");


function calculateMortgage(principal, annualInterestRate, yearss) {
    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let numberOfPayments = yearss * 12;
    let monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(2);
}

function updatePricing() {
    let principal = parseFloat(mortageammount.value) || 0;
    let annualInterestRate = parseFloat(interestrate.value) || 0;
    let years = parseFloat(yearsinp.value) || 0;

    if (principal > 0 && annualInterestRate > 0 && years > 0) {
        let monthlyPayment = calculateMortgage(principal, annualInterestRate, years);
        let totalRepayment = monthlyPayment * (years * 12);
        result.textContent = `$${monthlyPayment}`;
        repay.textContent = `$${totalRepayment}`;
    } else {
        result.textContent = '';
    }
}




mortageammount.onfocus = () => {
    let requiredsymbol = document.querySelector("#mortageamm");
    requiredsymbol.classList.add("active-input")
}
mortageammount.onblur = () => {
    let requiredsymbol = document.querySelector("#mortageamm");
    requiredsymbol.classList.remove("active-input")
}


yearsinp.onfocus = () => {
    let requiredsymbol = document.querySelector("#yearssym");
    requiredsymbol.classList.add("active-input")
}
yearsinp.onblur = () => {
    let requiredsymbol = document.querySelector("#yearssym");
    requiredsymbol.classList.remove("active-input")
}



interestrate.onfocus = () => {
    let requiredsymbol = document.querySelector("#Interestratesym");
    requiredsymbol.classList.add("active-input")
}
interestrate.onblur = () => {
    let requiredsymbol = document.querySelector("#Interestratesym");
    requiredsymbol.classList.remove("active-input")
}




radios.forEach((e) => {
    e.addEventListener("click", function () {
        radios.forEach((i) => { i.classList.remove("acitveradio") })
        e.classList.add("acitveradio")
    })
})



button.onclick = () => {
    emptycon.style.display = "none";
    resultcon.style.display = "flex";
    updatePricing()
}

