let sum= 0;
let n = 100;

for(let i=1; i<=n; i++)
{
    sum= sum+ i;
}
console.log("sum=",sum);

//while loop

let x=1;

while(x<=5)
{
    console.log("x=",x)
    x++;
}

//do-while loop

let y=1;

do{
    console.log("y",y);
    y++;
}while(y<=5);

// for-of loop
let sr= "syedburair";
for(let val of sr){
    console.log("str=",sr);
}

// for-in loop 

let student = {
    name : "burair",
    age : 20,
    cgpa: 3.3,
    ispass: true,
};
for(let key in student){

    console.log("key",key, "value=",student[key]);
}

// print all even numbers from 0to100

for(num=0; num<=100; num++){

    if(num%2==0){
        console.log("even number=",num)
    }
}

// create a game where you start with any random game number. ask the user to keep guessing the game number until the user enters correct value.

let gameNum=25;

let userNum= prompt("guess the game number:");

while(userNum!=gameNum){
     userNum= prompt("you entered wrong number, enter again :");
}

console.log("conguratulation you enter the correct number");


// template literals string

let obj={
    item: 'pen',
    price: 19,
};
let str=`the cost of ${obj.item} is ${obj.price} rupees`
console.log(str);

