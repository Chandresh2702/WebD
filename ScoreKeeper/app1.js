const p1 = document.querySelector("#p1Button")
const p2 = document.querySelector("#p2Button")
const reset = document.querySelector("#reset")
const span1 = document.querySelector("#p1Display")
const span2 = document.querySelector("#p2Display")
const wscore = document.querySelector("#playto")
let score = document.querySelector("#playto").value

wscore.addEventListener('change', function () {
    score = parseInt(this.value);
})

p1.addEventListener('click', function(){
    span1.innerText = (parseInt(span1.innerText) + 1)
    if(parseInt(span1.innerText) == score){
        p1.disabled = true
        p2.disabled = true
        span1.classList.add('green')
        span2.classList.add('red')
    }
})
p2.addEventListener('click', function(){
    span2.innerText = (parseInt(span2.innerText) + 1)
    if(parseInt(span2.innerText) == score){
        p1.disabled = true
        p2.disabled = true
        span2.classList.add('green')
        span1.classList.add('red')
    }
})
reset.addEventListener('click', function(){
    span1.innerText = "0"
    span2.innerText = "0"
    p1.disabled = false
    p2.disabled = false
    span1.classList.remove('green')
    span1.classList.remove('red')
    span2.classList.remove('green')
    span2.classList.remove('red')
})
