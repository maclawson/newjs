
// const bulb =document.getElementById("bulb")
// // console.log(bulb)
// const bulb1 =document.getElementById("bulb1")
// const bulb2 =document.getElementById("bulb2")

function changecolor1(){
    bulb.style.backgroundColor="red"
}
function stopcolor1(){
    bulb.style.backgroundColor="red"
}
function changecolor2(){
    bulb1.style.backgroundColor="green"
}

function changecolor3(){
    bulb2.style.backgroundColor="yellow"
}
 setTimeout(stopcolor1,2000)
//  setTimeout(changecolor2,4000)
//  setTimeout(changecolor3,6000)

 setInterval(changecolor1,2000)
 setInterval(changecolor2,4000)
 setInterval(changecolor3,6000)


