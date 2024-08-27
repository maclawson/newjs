  const screen=document.getElementById("screen")
//   const cal =document.getElementById("cal")
  let operator
  let num1 
  let signpress = false
  // let num2
  let clear
  let offon = false
  // let deletenumber
  

  

  function printnumber(n){
    // screen.innerText += n
    if(signpress == false){
        screen.innerText += n
     }
    else{
        screen.innerText = n
        signpress = false
    }
  }
  function Symbol(s){
    operator = s
    num1 = screen.innerText
    console.log(num1)
    signpress = true
  }

 function solve() {
    console.log(typeof(num1))
    console.log(typeof(screen.innerText))
    
    

    // let ans = 0
    if (operator ==1){
      screen.innerText = parseInt(num1) + parseInt(screen.innerText)
      // screen.innerText = ans
    }
    else if (operator == 2){
      screen.innerText = num1 - screen.innerText
      // screen.innerText = ans
    }

    else if (operator == 3){
      screen.innerText = num1 * nscreen.innerText
      // screen.innerText = ans
    }

    else if (operator == 4){
      screen.innerText = num1 / screen.innerText
      // screen.innerText = ans
    }
    
  
 }

 function clearscreen(){
  num1 = ""
  oparetor = ""
  signpress = false
  screen.innerText = ""
}

function deletenumber(){
  // let up = screen.innerText 
  screen.innerText  = screen.innerText.substring(0,screen.innerText.length-1)

}

function oncal() {

  num1 = ""
  oparetor = ""
  signpress = false
  screen.innerText = "0"

}

function offcal() {
  num1 = false
  oparetor = false
  signpress = true
  screen.innerText = ""
}
 