function myFunction(){
    console.log("perform task")
    console.log("perform function")
}

myFunction();

// or
// parameterized function

function parameterized(msg){ 
    console.log(msg)
}

parameterized("tast error");
parameterized("error 404");

//Arrow function 
// first sum

function sum(a,b){
    return(a+b);
}

const arrowSum= (a,b)=>{
    console.log(a+b);
}
// multiplication function
function mul(x,y){
    return(x*y)

}

const arrowMul = (x,y)=>{
    console.log(x*y);
}

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

// for each loop 
// for each loop is a method 
let array=[1,2,3,4,5];
array.forEach((val) => {
    console.log(val*val)
 });

//  map functio
//  map function is used for values ko use kr k new array create krna

 let nums = [56,45,43,34];

let newArr = nums.map((val) => {
     return val ;
 });

 console.log(newArr); 

// Filter function
// create a new array of elements that give true for a condition/FileSystemEntry. eg: all even number

let arr = [1,2,3,4,5,6,7,8,9];

let evenArr = arr.filter((val)=>{
    return val % 2 !== 0;
});

console.log(evenArr);

// Reduce Function

// array main multiple data or numbers hoty han reduce funciton is liye use hota ha k array main multiple number k oper koi function apply krne k baad single value return kary
// or
// performs some operations& reduce the array to a single value. it return that single value

let som=[2,4,5,6,7];// this function is basically perform sum of all array items and give output in single value 

let output =som.reduce((pre, cur)=>{ // pre and cur means previous value and current value. the value mean array first item that is previous value and current value is after the previous value 
    return pre + cur;
});

console.log(output);// answer is 24 


// find the largest number in array with REDUCE FUNCTION 

let numb = [10,34,45,43]

let maxNumb = numb.reduce((prev,curr)=>{
    return prev> curr? prev: curr;
});

console.log(maxNumb);
 
// -------------------prac question-----------------------

// we are given array of marks of students. filter our of the marks of student that scored 90+ 

let marks = [87,92,67,54,96,23,90,98];
// let std = [std1,std2,std3,std4,std5,std6,std7];

let marksOfStudent = marks.filter((per)=>{
    return per >= 90;
});

console.log(marksOfStudent);