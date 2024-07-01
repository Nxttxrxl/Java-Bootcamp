document.addEventListener("DOMContentLoaded", () => {

    const screenText = document.getElementById("screen-text") as HTMLParagraphElement | null;
    const buttons = document.querySelectorAll(".button") as NodeListOf<HTMLButtonElement>;

    function calculate(event: MouseEvent): void {
        const button = event.target as HTMLButtonElement;
        const buttonText = button.textContent;


        if (screenText && buttonText && screenText.textContent) {
            if (buttonText === 'DEL') {
                if (screenText.textContent) {
                    screenText.textContent = screenText.textContent.slice(0, -1);
                }
            } else if (buttonText === 'RESET') {
                screenText.textContent = '';
            } else if (buttonText === '=') {
                try {
                    
                    const result = screenText.textContent = eval(screenText.textContent.replace('x', '*'));
                    screenText.textContent = result.toString
                } catch (error) {
                    screenText.textContent = 'Error';
                }
            } else {
                screenText.textContent += buttonText;
            }
        }


    }

    buttons.forEach(button => {
        button.addEventListener('click', calculate);


    });


});