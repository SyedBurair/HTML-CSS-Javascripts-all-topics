function myfunction(msg,n){
    console.log(msg)
}

myfunction("Hello World", 110)


// function sum(a,b){
//     console.log(a+b);
// }
// myfunction(23+78)


// function OneplusAvg(x,y){
//     return 1+(x+y)/2
// }    
// let a = 3;
// let b = 5;
// let c = 6;
// console.log("One plus average of a and b", OneplusAvg(a,b))
// console.log("One plus average of b and c", OneplusAvg(b,c))
// console.log("One plus average of a and c", OneplusAvg(a,c))

// function add(r,t){
//     s = r+t;
//     return s;
// }

// let val = add(45,23)
// console.log(val)


// const arrowMul = (g,h) =>{
//     console.log(g*h);
// }



// create funtion usin the 'FUNCTION' keyword that takes a string as an argumet and returns the number of vowels in the string

function countVowels(str){
    let count= 0;
    for(const char of str){
        if(char==='a'|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
    return(count);        
}
countVowels("syedburairabbasrizvi");// 8 vowels are in this name 
