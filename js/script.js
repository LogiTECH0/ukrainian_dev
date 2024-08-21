function straightUp() {
    window.scroll(0,0);
}
function redirectDiscord() {
    window.location.href = "https://discord.gg/d5rW7V7n";
}
function redirectTelegram() {
    window.location.href = "https://t.me/ukrainian_dev";
}
function redirectItch() {
    window.location.href = "https://brimtech.itch.io"
}
function redirectItch1() {
    window.location.href = "https://brimtech.itch.io/shot-down"
}
function redirectItch2() {
    window.location.href = "https://brimtech.itch.io/physics-simulator";
}
function redirectItch3() {
    window.location.href = "https://brimtech.itch.io/fpv";
}
const buttons = document.querySelectorAll('.btn');
 
buttons.forEach(button => {
    button.addEventListener('click', redirectTelegram);
});
document.querySelectorAll('.text').forEach(function(element) {
    let textColor = window.getComputedStyle(element).color;
    if (textColor !== 'rgb(0, 0, 0)' && textColor !== '#000000') {
        element.classList.add('text-outline');
    }
    console.log('yes')
});
const audioElement = document.getElementById('myAudio');
    audioElement.volume = 0.3;