// let marks=[79,57,97,35,86];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);

//loop overs an array

// using for loop

let heroes=["ironman","spiderman","batman","hulk","thor"];
for(let i=0; i<heroes.length; i++){

    console.log(heroes[i]);
}
//using for-of loop 
let villans=["thanos","loki","voldmart","vecna"];
for(let villan of villans){
    console.log(villan);
}

//prac question
/*for a given array with marks of student-.[85,97,44,37,76,60]
find the average marks of the entire class */

let marks=[85,97,44,37,76,60];

let sum=0;

for(let val of marks){
    sum += val
}
let avg= sum / marks.length;
console.log(`avg marks of class student = ${avg}`); // using template literals that studied in strings

//prac question
/* for a given array with prices of items->[250, 645,300,900,50] all items have an offer of 10% off on them.
 cahnge the array to store final price after applying offer. */
 //using for-of loop

 let item= [250, 645,300,900,50];
 let j= 0;
 
 for(let price of items){
    let offer= price/10;
    items[j]=items[j]-offer;
    console.log(`price after offer =${items[j]}`);
    i++;
 }
console.log(items);

// //OR
// // using for loop

let items= [250, 645,300,900,50];

let i= 0;

for(let i=0; i<items.length; i++){
    let offer= items[i]/10;
    items[i]=items[i]-offer
}
console.log(items);

// array methods e.g [pus, pop, ToString]
// applying push method

let fruit= ["apple","mango", "banana", "melon", "guava"]
fruit.push("lichi","watermelon");

console.log(fruit);

// applying pop method

let foodItem= ["apple","mango", "banana", "melon", "guava"]
console.log(foodItem);
foodItem.pop();

console.log(`deleted=${foodItem.pop()}`);// pop method deleted last item firstly 

//ToString converted array into strings

let veggies=["potato","tomato","peas","sweetpotato"]
console.log(veggies);
console.log(veggies.toString());// converted array into strings