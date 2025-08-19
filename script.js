const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr/usd.json";


const dropdown = document.querySelectorAll(".dropdown select");

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
    console.log(element);
}



