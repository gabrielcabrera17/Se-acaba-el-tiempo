function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
const secondsHand = document.getElementById('seconds');
const minutes = document.getElementById('minutes');

setInterval(function() {
    const time = getSecondsSinceStartOfDay();
    const angle = (time / 60) * 360;
    
    // Aplicar rotación a la manecilla de los segundos
    secondsHand.style.transform = `rotate(${angle}deg)`;
}, 1000);
