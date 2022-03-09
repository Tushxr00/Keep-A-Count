let count = 0

const btn_reset = document.getElementById("reset-el")
const btn_dec = document.getElementById("dec-el")
const btn_inc = document.getElementById("inc-el")
const countEl = document.getElementById("value-el")

btn_reset.addEventListener("click", function() {
    count = 0
    display_count()
})

btn_dec.addEventListener("click", function() {
    count--
    display_count()
})

btn_inc.addEventListener("click", function() {
    count++
    display_count()
})

function display_count() {
    if (count < 0) {
        countEl.style.color = "red"

    } else if (count > 0) {

        countEl.style.color = "green"
    } else {
        countEl.style.color = "black"
    }
    countEl.textContent = count
}