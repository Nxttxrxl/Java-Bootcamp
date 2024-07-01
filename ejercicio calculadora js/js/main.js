"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const screenText = document.getElementById("screen-text");
    const buttons = document.querySelectorAll(".button");
    function calculate(event) {
        const button = event.target;
        const buttonText = button.textContent;
        if (screenText && buttonText && screenText.textContent) {
            if (buttonText === 'DEL') {
                if (screenText.textContent) {
                    screenText.textContent = screenText.textContent.slice(0, -1);
                }
            }
            else if (buttonText === 'RESET') {
                screenText.textContent = '';
            }
            else if (buttonText === '=') {
                try {
                    const result = screenText.textContent = eval(screenText.textContent.replace('x', '*'));
                    screenText.textContent = result.toString;
                }
                catch (error) {
                    screenText.textContent = 'Error';
                }
            }
            else {
                screenText.textContent += buttonText;
            }
        }
    }
    buttons.forEach(button => {
        button.addEventListener('click', calculate);
    });
});
