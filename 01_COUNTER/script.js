const value = document.getElementById("value")
const inc_btn = document.getElementById("inc_btn")
const dec_btn = document.getElementById("dec_btn")
const changeBy = document.querySelector(".change_inp")
const reset_btn = document.getElementById("reset_btn")

inc_btn.addEventListener("click", ()=>{
    const countValue = parseInt(value.innerText)
    const changeByValue = +changeBy.value
    value.innerText = countValue + changeByValue
})

dec_btn.addEventListener("click", ()=>{
    const changeByValue = +changeBy.value
    value.innerText = parseInt(value.innerText) - changeByValue
})

reset_btn.addEventListener("click", ()=>{
    value.innerText = 0
    changeBy.value = 0
})
