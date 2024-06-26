
document.addEventListener('DOMContentLoaded', () => {
    const bulbOn = document.getElementById('bulb-on') as HTMLImageElement | null;
    const bulbOff = document.getElementById('bulb-off') as HTMLImageElement | null;
    const switchOn = document.getElementById('switch-on') as HTMLImageElement | null;
    const switchOff = document.getElementById('switch-off') as HTMLImageElement | null;

    switchOff?.addEventListener('click', () => {
        switchOff?.classList.toggle('hidden');
        switchOn?.classList.toggle('hidden');
        bulbOn?.classList.toggle('hidden');
        bulbOff?.classList.toggle('hidden');    
    });

    switchOn?.addEventListener('click', () => {
        switchOff?.classList.toggle('hidden');
        switchOn?.classList.toggle('hidden');
        bulbOn?.classList.toggle('hidden');
        bulbOff?.classList.toggle('hidden');
    });

})


