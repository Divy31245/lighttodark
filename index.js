const sunMooncontainer = document.querySelector('.container');

document.querySelector('.btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const currentRotation = parseInt(getComputedStyle(sunMooncontainer).getPropertyValue('--rotation'))
    sunMooncontainer.style.setProperty('--rotation', currentRotation + 180)
})