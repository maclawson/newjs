const pick = document.getElementById("pick")
const amount = document.getElementById("amount")
const answer = document.getElementById("answer")

let dollar = 1600
let pounds = 2000
let euro = 1800


function converter() {
    // console.log(amount.value)
    amount.value = 1600
    console.log(pick.value)
    if (pick.value =="$") {
        answer.value =amount.value/dollar
    }

    
    if (pick.value =="P") {
        answer.value  =amount.value/pounds
    }

    amount.value = 1800
    if (pick.value =="E") {
        answer.value =amount.value/euro
    }

}


