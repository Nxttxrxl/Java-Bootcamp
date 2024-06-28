
document.addEventListener('DOMContentLoaded', () => {
    const bulbOn = document.getElementById('bulb-on') as HTMLImageElement | null;
    const bulbOff = document.getElementById('bulb-off') as HTMLImageElement | null;
    const switchOn = document.getElementById('switch-on') as HTMLImageElement | null;
    const switchOff = document.getElementById('switch-off') as HTMLImageElement | null;
    const opacitySlider = document.getElementById('opacity-slider') as HTMLInputElement | null;
    const rotateSlider = document.getElementById('rotate-slider') as HTMLInputElement | null;

    // let lightOn = true;

    if (opacitySlider && bulbOn && bulbOff) {
        opacitySlider.addEventListener('input', () => {


            const opacityValue = parseFloat(opacitySlider.value);
            bulbOn.style.opacity = opacityValue.toString();
            if (opacityValue <= 0.25) {
                bulbOn.classList.add('hidden');
                bulbOff.classList.remove('hidden');
                switchOn?.classList.add('hidden');
                switchOff?.classList.remove('hidden');

            } else if (opacityValue > 0) {
                bulbOn.classList.remove('hidden');
                bulbOff.classList.add('hidden');
                switchOn?.classList.remove('hidden');
                switchOff?.classList.add('hidden');
            }
        })
    }


    if (rotateSlider && bulbOn && bulbOff) {
        rotateSlider.addEventListener('input', () => {
            const rotateValue = parseFloat(rotateSlider.value);
            bulbOn.style.transform = `rotate(${rotateValue}deg)`;
            bulbOff.style.transform = `rotate(${rotateValue}deg)`;
        })
    }

    switchOff?.addEventListener('click', () => {

        switchOff?.classList.toggle('hidden');
        switchOn?.classList.toggle('hidden');
        bulbOn?.classList.toggle('hidden');
        bulbOff?.classList.toggle('hidden');
        if (opacitySlider) {
            opacitySlider.value = "1";
        }
        if (bulbOn) {
            bulbOn.style.opacity = "1";
        }

    });

    switchOn?.addEventListener('click', () => {

        switchOff?.classList.toggle('hidden');
        switchOn?.classList.toggle('hidden');
        bulbOn?.classList.toggle('hidden');
        bulbOff?.classList.toggle('hidden');
        if (opacitySlider) {
            opacitySlider.value = "0.25";
        }
        if (bulbOn) {
            bulbOn.style.opacity = "0.25";
        }


    });

})


