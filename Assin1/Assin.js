const screen1 = document.getElementById("screen1")
const screen2 = document.getElementById("screen2")
const screen3 = document.getElementById("screen3")
const screen4 = document.getElementById("screen4")

  let operator
  let num1 
  let count1 = 0
  let signpress = true



function printnumber() {
    console.log("printnumber")
    count1 = count1 + 1
    screen1.innerText = count1

}

function printnumber1(n) {
    console.log("printnumber")
    count1 = count1 + 1
    screen2.innerText = count1
}

function printnumber2(n) {
    console.log("printnumber")
    count1 = count1 + 1
    screen3.innerText = count1
}

function printnumber3() {
    console.log("printnumber")
    count1 = count1 + 1
    screen4.innerText = count1
}