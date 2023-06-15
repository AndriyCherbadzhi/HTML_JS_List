console.log('hello')

let count = 0;
let counterSelector = document.getElementById('counter')
function plusOne() {
    counterSelector.innerText = ++count
}
function minusOne() {
    counterSelector.innerText =  --count
}
function reset() {
    counterSelector.innerText =  count = 0;
}
