{
    calculateResult = (amount, currencyIn, currencyOut) => {
        return amount * currencyIn / currencyOut
    };

    const onFormSubmit = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElementIn = document.querySelector(".js-currencyIn");
        const currencyElementOut = document.querySelector(".js-currencyOut");

        const amount = +amountElement.value;
        const currencyIn = currencyElementIn.value;
        const currencyOut = currencyElementOut.value;
        const currencyOutText = currencyElementOut.options[currencyElementOut.selectedIndex].text;
        
        const result = calculateResult(amount, currencyIn, currencyOut);
        updateResultText(result, currencyOutText);
    };

    const updateResultText = (result, currencyOutText) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${currencyOutText}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", onFormSubmit);
    };
    init();
}