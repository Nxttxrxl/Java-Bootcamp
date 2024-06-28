"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const bulbOn = document.getElementById('bulb-on');
    const bulbOff = document.getElementById('bulb-off');
    const switchOn = document.getElementById('switch-on');
    const switchOff = document.getElementById('switch-off');
    const opacitySlider = document.getElementById('opacity-slider');
    const rotateSlider = document.getElementById('rotate-slider');
    // let lightOn = true;
    if (opacitySlider && bulbOn && bulbOff) {
        opacitySlider.addEventListener('input', () => {
            const opacityValue = parseFloat(opacitySlider.value);
            bulbOn.style.opacity = opacityValue.toString();
            if (opacityValue <= 0.25) {
                bulbOn.classList.add('hidden');
                bulbOff.classList.remove('hidden');
                switchOn === null || switchOn === void 0 ? void 0 : switchOn.classList.add('hidden');
                switchOff === null || switchOff === void 0 ? void 0 : switchOff.classList.remove('hidden');
            }
            else if (opacityValue > 0) {
                bulbOn.classList.remove('hidden');
                bulbOff.classList.add('hidden');
                switchOn === null || switchOn === void 0 ? void 0 : switchOn.classList.remove('hidden');
                switchOff === null || switchOff === void 0 ? void 0 : switchOff.classList.add('hidden');
            }
        });
    }
    if (rotateSlider && bulbOn && bulbOff) {
        rotateSlider.addEventListener('input', () => {
            const rotateValue = parseFloat(rotateSlider.value);
            bulbOn.style.transform = `rotate(${rotateValue}deg)`;
            bulbOff.style.transform = `rotate(${rotateValue}deg)`;
        });
    }
    switchOff === null || switchOff === void 0 ? void 0 : switchOff.addEventListener('click', () => {
        switchOff === null || switchOff === void 0 ? void 0 : switchOff.classList.toggle('hidden');
        switchOn === null || switchOn === void 0 ? void 0 : switchOn.classList.toggle('hidden');
        bulbOn === null || bulbOn === void 0 ? void 0 : bulbOn.classList.toggle('hidden');
        bulbOff === null || bulbOff === void 0 ? void 0 : bulbOff.classList.toggle('hidden');
        if (opacitySlider) {
            opacitySlider.value = "1";
        }
        if (bulbOn) {
            bulbOn.style.opacity = "1";
        }
    });
    switchOn === null || switchOn === void 0 ? void 0 : switchOn.addEventListener('click', () => {
        switchOff === null || switchOff === void 0 ? void 0 : switchOff.classList.toggle('hidden');
        switchOn === null || switchOn === void 0 ? void 0 : switchOn.classList.toggle('hidden');
        bulbOn === null || bulbOn === void 0 ? void 0 : bulbOn.classList.toggle('hidden');
        bulbOff === null || bulbOff === void 0 ? void 0 : bulbOff.classList.toggle('hidden');
        if (opacitySlider) {
            opacitySlider.value = "0.25";
        }
        if (bulbOn) {
            bulbOn.style.opacity = "0.25";
        }
    });
});
