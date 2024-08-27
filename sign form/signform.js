const users = [
    {
        email:"peter@gmail.com",
        password:"peter"

    },
    {
        email:"okey@gmail.com",
        password:"okey"  
    }
]

// document.getElementById("email")
// document.getElementById("password")

let useremail = document.getElementById("uemail")
let userpassword = document.getElementById("upassword")
// let nextuser = 0

console.log(useremail)
console.log(userpassword)

function login (){
    for(let i = 0;i < users.length;i ++){
        if(useremail == users[i].useremailemail && p==users[i].userpassword){
            alert("login succeful" )

        }
        else {
            alert("login failed")
        }
    
    }

}


