const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const nav = document.querySelector('nav')

let load = 0

let intV = setInterval(blurring,20)

function blurring() {
    load++
    if(load > 99){
        clearInterval(intV)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load,0,100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

    if(load >= 90){
        nav.classList.add('visible')
    }

}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }