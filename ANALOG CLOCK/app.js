const secondHand = document.querySelector(".seconds")
const minuteHand = document.querySelector(".minutes")
const hourHand = document.querySelector(".hours")


function getTime(){
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()
    let timeInterval = 6

    
    secondHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minuteHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
    hourHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'
}



setInterval(getTime, 100)
