let amountElement = document.querySelector(".amount");
let currencyElementIn = document.querySelector(".currencyIn");
let currencyElementOut = document.querySelector(".currencyOut");
let formElement = document.querySelector(".form");
let resultElement = document.querySelector(".result");
let PLN = 1.00;
let EUR = 4.82;
let USD = 4.96;

formElement.addEventListener("input", () => {
    let amount = +amountElement.value;
    let currencyIn = currencyElementIn.value;
    let currencyOut = currencyElementOut.value;
    let result = resultElement.value;

    switch (currencyIn) {
        case "PLN":
            switch (currencyOut) {
                case "PLN":
                    result = amount * 1;
                    break;
                case "EUR":
                    result = amount / EUR;
                    break;
                case "USD":
                    result = amount / USD;
                    break;
            }
    }

    switch (currencyIn) {
        case "EUR":
            switch (currencyOut) {
                case "EUR":
                    result = amount * 1;
                    break;
                case "PLN":
                    result = amount * EUR;
                    break;
                case "USD":
                    result = amount * EUR / USD;
                    break;
            }
    }

    switch (currencyIn) {
        case "USD":
            switch (currencyOut) {
                case "USD":
                    result = amount * 1;
                    break;
                case "PLN":
                    result = amount * USD;
                    break;
                case "EUR":
                    result = amount * USD / EUR;
                    break;
            }

    }

    resultElement.innerHTML = `${result.toFixed(2)} ${(currencyOut)}`;
});