{
    function calculateResult(amount, currencyIn, currencyOut) {
        const EUR = 4.82;
        const USD = 4.96;

        switch (currencyIn) {
            case "PLN":
                switch (currencyOut) {
                    case "PLN":
                        return amount * 1;
                    case "EUR":
                        return amount / EUR;
                    case "USD":
                        return amount / USD;
                };
            case "EUR":
                switch (currencyOut) {
                    case "EUR":
                        return amount * 1;
                    case "PLN":
                        return amount * EUR;
                    case "USD":
                        return amount * EUR / USD;
                };
            case "USD":
                switch (currencyOut) {
                    case "USD":
                        return amount * 1;
                    case "PLN":
                        return amount * USD;
                    case "EUR":
                        return amount * USD / EUR;
                };
        };
    };

    const onFormSubmit = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElementIn = document.querySelector(".js-currencyIn");
        const currencyElementOut = document.querySelector(".js-currencyOut");

        const amount = +amountElement.value;
        const currencyIn = currencyElementIn.value;
        const currencyOut = currencyElementOut.value;

        const result = calculateResult(amount, currencyIn, currencyOut);
        console.log(result);

        updateResultText(result, currencyOut);
    };

    const updateResultText = (result, currencyOut) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${currencyOut}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", onFormSubmit);
    };
    init();
}