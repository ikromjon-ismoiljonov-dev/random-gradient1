const body = document.querySelector('body');
const container = document.getElementById('.container');
const colorText = document.querySelector('.color-text');

const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]

var btnColor = document.getElementById('btn-color');

function Copy(text){
    var elem = document.createElement('textarea');
    elem.value = text.innerText;
    btnColor.innerHTML = 'Copied !'
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

// random color function

function getGradient(){

    let color = '#';

    for(let i = 0; i < 6; i++){

        const randomNumber = Math.trunc(Math.random() * values.length);
        color += values[randomNumber];

    }
    return color;
}

function setGradient(){
    btnColor.innerHTML = 'Copy to Code'
    const color1 = getGradient();
    const color2 = getGradient();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`

    body.style.background = bgColor;
    colorText.textContent = bgColor;
}
setGradient();
    