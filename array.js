//array:variable that can store multiple values
let fruits=["apple","banana","pineaple","orange","passion"]
console.log(fruits);

fruits.push("coconut"); //adds an element
console.log(fruits);
fruits.pop(); //removes the last element
console.log(fruits);
fruits.unshift('mango') // adds element at the beginning
console.log(fruits);
fruits.shift();//removes elememt the beginning
console.log(fruits);

//displaying the element of an index
 let length=fruits.length;
 let index=fruits.indexOf("orange")
 console.log("the index in the array is "+index)


 //LOOPING THROUGH THE ELEMENT OF AN ARRAY

 let prices=[5,10,15,20,25,30];
 for(let i=0;i<prices.length;i+=1){
    console.log(prices[i]);
 }

 for(let i=prices.length-1;i>=0; i-=1){
    console.log(prices[i]);
 }

 //method 2
 for(let price of prices){
    console.log(price);
 }

 //sorting an array

fruits= fruits.sort();
console.log(fruits);
//sorting in areverse order
fruits=fruits.sort().reverse();
console.log(fruits);


//2D ARRAY.
let names=['stanley','jane','james','stephen'];
let meat=['eggs','chicken','fish','pork'];
let vegetables=["carrots",'spinach','onions','oranges'];
let x=[names,meat,vegetables];
console.log(x);

//replacing values
x[1][3]='mutton';
console.log(x);