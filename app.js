const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const render = function () {
    const date = new Date()
    hours.textContent = date.getHours()
    minutes.textContent = date.getMinutes()
    seconds.textContent = date.getSeconds()
}
setInterval(render, 1000);