//dom (document object model)
// dom has 4 pillars 
//1) selection of an element 
//2) changing of html 
//3) changing of css
//4) event listner 


// 1)
var a= document.querySelector("h1")
console.log(a);

// 2)
var a=document.querySelector("p")
a.innerHTML="this is my firt code in dom"

// 3)
var a=document.querySelector("p")
a.innerHTML="this is my firt code in dom"
a.style.backgroundColor= "red"

var a=document.querySelector("h1")
a.innerHTML="My new Heading"
a.style.color= "blue"

// 4)
var a=document.querySelector("button")
a.innerHTML="Click here"
a.style.backgroundColor = "blue"
a.style.color = "white"
a.addEventListener("click", function(){
    console.log("welcome to new page")
})
// another example of event listner 

var a = document.querySelector("h1")
a.addEventListener("click", function(){
    a.innerHTML = "Documents object model"
    a.style.color= "purple"
    a.style.backgroundColor = "black"

})

// switching off on bulb example of eventListener

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
        
        bulb.style.backgroundColor = "yellow"
        console.log("clickdef")
        flag =1
    }
    else{
       
        bulb.style.backgroundColor = "transparent"
        console.log("clickghf")
        flag = 0
    }
})