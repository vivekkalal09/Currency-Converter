const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
    updateExchangeRate();
})
for (let select of dropdown) {
    for (currCode in countryList) {
        // console.log(`${countryList[currCode]}`);
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode == "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode == "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    // console.log(currCode)
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();

})


const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const fromcurrency = fromCurr.value.toLowerCase()
    const tocurrency = toCurr.value.toLowerCase()

    const URL = `${BASE_URL}/${fromcurrency}.json`

    let response = await fetch(URL)
    let data = await response.json();
    rate = data[fromcurrency][tocurrency];
    // console.log(rate);

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}