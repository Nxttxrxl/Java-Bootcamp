"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const bulbOn = document.getElementById('bulb-on');
    const bulbOff = document.getElementById('bulb-off');
    const switchOn = document.getElementById('switch-on');
    const switchOff = document.getElementById('switch-off');
    switchOff === null || switchOff === void 0 ? void 0 : switchOff.addEventListener('click', () => {
        switchOff === null || switchOff === void 0 ? void 0 : switchOff.classList.toggle('hidden');
        switchOn === null || switchOn === void 0 ? void 0 : switchOn.classList.toggle('hidden');
        bulbOn === null || bulbOn === void 0 ? void 0 : bulbOn.classList.toggle('hidden');
        bulbOff === null || bulbOff === void 0 ? void 0 : bulbOff.classList.toggle('hidden');
    });
    switchOn === null || switchOn === void 0 ? void 0 : switchOn.addEventListener('click', () => {
        switchOff === null || switchOff === void 0 ? void 0 : switchOff.classList.toggle('hidden');
        switchOn === null || switchOn === void 0 ? void 0 : switchOn.classList.toggle('hidden');
        bulbOn === null || bulbOn === void 0 ? void 0 : bulbOn.classList.toggle('hidden');
        bulbOff === null || bulbOff === void 0 ? void 0 : bulbOff.classList.toggle('hidden');
    });
});
