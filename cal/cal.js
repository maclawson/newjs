const display =document.querySelector(".display");
const buttons =document.querySelectorAll("button");
const specialchars = ["%","-","*","/","+","="];
let output = "";

// Add  Event Listener to buttons call calculator() onclick
const calculate =(btnValue) => {
    // console.log(btnValue);
    if (btnValue === "*" && btnValue !== "") {
        output = eval(output.replace("%","/100"));
    } else if (btnValue=== "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output ==="" && specialchars.includes(btnValue)) return;
        output +=btnValue;
    }
    display.value = output;



};

buttons.forEach((button) =>{
    button.addEventlistener("click",(e) => calculate(e.target.dataset.value))
});