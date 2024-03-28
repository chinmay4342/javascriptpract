// let text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumchinmaypandey";
// let length=text.length;
// console.log(length);
// let a = 5;
// let b =2;
// console.log("a==b",a==b);

// const a=10;
// const b=9;
// console.log("a==b",a==b);
// let a = 5;
// let b = 2;

// a **=4;
// console.log("a=",a);

// let a = 5;
// let b =12;

// console.log("a>b",a>b);


// let number = [843,8457,875,56,87394,];
// let shorting = number.sort();
// console.log(shorting)

// let names = ["chinmay","amit","deepak","faku"];
// let sortingNames = names.sort();
// console.log(sortingNames);


// let numb =[2,4.7,9,6,3,10,50,100,20];
// let numbsort =numb.sort((a,b)=>a-b);
// console.log(numb);

// let numb1=[90,.0008,0.568,0.437,1324,0.767,786,0.0008765,0.12344556];
// let numbsort1 numbsort1.sort((b,a)=>b-a);
// console.log(numsort1);

// let num=[10,20,30,50];
// let result=numbers.find(element =>element >25);
// let result1=numbers.findindex(element =>element >25);

// console.log(result);
// console.log(result1);

//logical operater
// let a=5;
// let b=3;
// let cond1 =a<b;//false
// let cond2 = a===5; //true
// console.log("cond1 && cond2=",cond1 && cond2);

// let chinmay= 110;
// let sudip =231;
// let condition1 =chinmay>sudip;// false
// let condition2 =chinmay<sudip;// true
// console.log('condition1&&condition2',condition1 && condition2);
 
//condition Statement
// let age=18;
// if (age>=18) {
//     console.log("yes");

// }

// let students_marks= [90,84,'fail',87,78,false,"not present"];
// students_marks[7]=100;//changing mthe new value of an array
// students_marks[2]=94;//adding a new value to the  array 
// console.log(students_marks[0]);
// console.log(students_marks[1]);
// console.log(students_marks[2]);
// console.log(students_marks[3]);
// console.log(students_marks[4]);
// console.log(students_marks[5]);
// console.log(students_marks[6]);
// console.log(students_marks[7]);// index not exist coz undifined
// console.log("the class 12 marks length",students_marks.length);
// console.log(students_marks);
// console.log(typeof students_marks);// object print

// // array method
// let num =[1,2,3,34,4];
// let b = num.toString();
// console.log(b);
// //join method
// let c =num.join("_")
// console.log(c,typeof c)

// // let ram=[12,32,53,54];
// // let sham= num.toString()
// // let r=ram.pop()
// // console.log(ram,r)// pop return the poped elements
// // pop method
// // let r =num.pop()
// // console.log(num,r)//)// pop return the poped elements

// // let r = num.push(56)
// // console.log(num,r)
// let r=num.unshift(6)
// console.log(num,r)
// let plantitem = ["moneyplan","mango","citrius",];
// plantitem.push("adeniuam","somalia");
// console.log.apply(plantitem);
//find: whatever the condition which we are giving, if it satisfyies then the one which satifies first will be output
//findIndex, if find the index of the value which satisfies the condition
// let numbers = [10, 20, 3, 4, 50];
// let result = numbers.find(element => element > 25);
// let result1 = numbers.findIndex(element => element > 25);
// console.log(result); //50 (value which satisfies the condition)
// console.log(result1); //4 (index)
// const people = [
//     {name: "alice", age: 10},
//     {name: "bob", age: 30},
//     {name: "shyam", age: 20},
// ]
// const person = people.find(people => people.age > 18);
// const person1 = people.findIndex(people => people.age > 18);
// console.log(person)
// console.log(person1)
// let numbers1 = [10, 20, 30, 40, 30, 50, 30];
// console.log(numbers1.lastIndexOf(30)) //lastindex of the value
// //fill method in javascript is used to fill all the elements of an array withe value which we given
// const array1 = new Array(5).fill(1);
// console.log(array1)
// const array2 = [1, 2, 3, 4, 5];
// array2.fill("apple", 1, 4);
// console.log(array2)
// const person4 = {fname: "venkat", loc: "banglaore"};
// const fillPerson = new Array(3).fill(person4);
// console.log(fillPerson);
// //join method
// let mobiles = ["LG", "IPHONE", "OPPO", "VIVO"];
// console.log(mobiles);
// let joinMob = mobiles.join(" ** ");
// console.log(joinMob)
// //tostring() method is used to convert an object or array into the string representation
// let mobiles1 = ["LG", "IPHONE", "OPPO", "VIVO"];
// console.log(mobiles1);
// let toStringMobiles = mobiles1.toString();
// console.log(toStringMobiles);
// console.log(toStringMobiles.length);
// //reduce method in javascript used to reduce an array to a single value. it takes the callback function as an argument which will be executed for each element of the array.
// // array.reduce(callback(accumulator, currentvalue), initialvalue);
// //callback a function that is used to called for each element in the array
// //accumulator: the accumulated result of the previous iterations;
// //currentValue: the current element being processed in the array
// //initialvalue; an initial value for the accumalator.

// const numbers = [1, 2, 3, 4, 5]; //15
// const sum = numbers.reduce((accumulator, currentvalue) => {
//     return accumulator + currentvalue
// }, 0);
// console.log(sum);
// 8:28
// //sorting in javascript
// //ascending order sorting
// //descending order sorting
// //if we wanted to sort we have use sort method
// let numbers = [7, 8 , 9, 1, 2, 3, 4, 5];
// let sorting = numbers.sort();
// console.log(sorting)
// let names = ["a", "c", "b", "d"];
// let sortingNames = names.sort();
// console.log(sortingNames)
// let numb = [2, 1, 3, 20, 10, 4, 100, 50, 5, 90, 9];
// let numbSort = numb.sort();
// console.log(numbSort);
// let numb1 = [2, 1, 3, 20, 10, 4, 100, 50, 5, 90, 9];
// let numbsort1 = numb1.sort((a, b) => a - b); // ascending sorting
// console.log(numbsort1)
// let numb2 = [2, 1, 3, 20, 10, 4, 100, 50, 5, 90, 9];
// let numbsort2 = numb2.sort((a, b) => b - a); // descending sorting
// console.log(numbsort2)
// let students = [
//     {name: "alice", age: 22},
//     {name: "bob", age: 20},
//     {name: "charlie", age: 25},
// ]
// let sortedStudents = students.sort((a, b)=> b.age - a.age);
// console.log(sortedStudents);
// //compare alog or method
// //1, 2, 3, 4, 5, 9, 10, 20, 50, 90, 100
// //three conditions
// // if the value is -ve, 'a' will sorted before 'b';
// // if the value is +ve,  "b" will sorted bfore "a";
// // if the values is zero, no changes will be made
// //flat method in javascript, flat method is used to flatten the nested array.
// const arr = [1, [2, 3],4, 5, 6];
// console.log(arr);
// console.log(arr.flat());
// const arr1 = [1, [2, 3], [4, [5, 6]]];
// console.log(arr1);
// console.log(arr1.flat(2));
// const arr2 = ["a", ["b", "c"], "d", "e", "g"];
// console.log(arr2.flat());

// condition statement
// let mode ="black";
// let color;
// if(mode==="dark"){
//     color= "black";
// } else if(mode==="blue"){
//     color="blue";
// }else if (mode==="pink"){
//     color="blue"
// }else if(mode==="cherryred"){
//     color="red";
// }else{white};
// console.log(color);

// let day ="wednesday";
// switch(day){
//     case "monday";
//     alert("today is monday");
//     break;
//     case "wednesday";
//     alert('to dayt iswednesday');
//     break;
//     case "friday";
//     alert('to dayt is friday');
//     break;
//     default:
//         alert("normal day")
// }

   
// let x;
// console.log(x);

// let numes =["a","b","c","d"];
// let sortingNames =names.sort();
// console.log(sortingNames);

// reversing the values

// const mobiles = ["LG", "IPHONE", "OPPO", "VIVO"];

// for (let i = mobiles.length-1; i >=0; i--) {
// console.log(mobiles[i])
// }

// //finding the values

// let numbers = [1,2,3,4,5];

// let sum = 0;

// for(let i=0; i < numbers.length; i++){

// Sum = sum + numbers[i]

// }

// console.log("sum is", sum)

// //looping array of objects

// const mobiles1 = [
// {name: "LG", price: 10000},
// {name: "oppo", price: 20000},
// {name: "VIVO", price: 30000},

// for(let mobilesData of mobiles1){

// console.log(mobilesData.name + " is " + mobilesData.price)
// }

// //for in loop, in javascript is used to iterate over the properties of an object

// let person = {
// name: "venkat",
// place: "bangaloe",
// country: "india"

// }
// for (let properties in person) {
// console.log(properties);
// console.log(properties + ":" + person [properties])

// }

// //for of is used to iterate over the iterable objects example array, strings etc

// let colors1 = ["red", "green", "orange"];
// for(let localcolor of colors1) {
//      console.log(localColor)
// }

// let name = "venkat";

// for(let index of name){ 
//     console.log(index);
// }

// //white loop in javascript is used to repatedly execute the block of code as long as the spcified condition is true.

// let count = 0;
// while(count <5) { 
//     console.log(count); //0 count++
// }

// //1st iteration count = 0, 0 < 5, output: 0
// //2nd 1, 1 < 5, output: 1

// let password = "welcome";
// let attempts = 3;

// while(attempts > 0){
// let userInput = prompt("Enter the password:");
// if(userInput === password) {

// alert("password is correct, access given")

// break;

//   } else {
// attempts--;
//      console.log("incorrect password")
//   }

// }
 

// //inserting the values into the set

// let setValues = new Set();
// console.log(setValues);
// setValues.add("LG");
// setValues.add("oppo");
// setvalues.add("iphone");
// console.log(setValues)
// console.log(setvalues.size);
// // inserting the values into the array

// let arr = [];
// arr[0] = 1;
// arr[20] = 1;
// console.log(arr.length)

// let mobiles = new Set();
// let lg = "LG";
// let oppo = "OPPP";
// mobiles.add(lg);
// mobiles.add(oppo)
// console.log(mobiles);

// function add(a,b){
//     returna+b;
// }
// function substract(a,b){
//     returna-b;
// }
// function multiply(a,b){
//     returna*b;
// }
// function divede(a,b){
//     returna/b;
// }
// (add,substract,multiply,divide);

// export defult function hi(chinmay){
//     console.log("hello,${chinmay}")
// }


// console.log("hi wrold");
// console.log("hi1 wrold");
// console.log("hi2 wrold");
// calcutate();
// console.log("hi3 wrold");
// console.log("hi4 wr4old");
// function calcutate() {
//     let sum=0;
//     for(leti=0;i<100000000;i++){
// sum+-i;
//     }
//     console.log("math result",sum);
// }


// console.log("hi wrold");
// console.log("hi1 wrold");
// console.log("hi2 wrold");
// setTimeout(()=>{
//     calculate();
// })
// console.log("hi3 wrold");
// console.log("hi4 wr4old");
// function calcutate() {
//     let sum=0;
//     for(leti=0;i<100000000;i++){
// sum+-i;
//     }
//     console.log("math result",sum);
// }
// step1(10,function(result,error)) {
//     if(error){
//         step2(result1,function(result2,error)){
//             if(error){
//                 step3(result2,function(result3,error)){
//                     if(error){
//                         console.log("result"result3);
//                     }
//                 }
//             }
//         }
//     }
// }


// function add (a,b, consoleprint){
//     const result= a+b;
//     console.log(result);
// }

// function consoleprint(result) 
// {
    
// }

//a promise in javascript is anobject which will help us to check the operation wheter is reject or  resolve 

// function fetchData() {
//     return new Promise(resolve,reject)=>{
//         setTimeout(() =>){
//             let data ="data is facehed";/// this is coming backhand
//             resolve(dada);
//         },1000)
//     });
    
// }

// fetchData()
// .then(()=>){
//     console.log("data got",data);
// }

async function fetchUserData(){
    const url = "https://api.github.com/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getUsers(){
    const users = await fetchUserData();
    console.log(users)
}
getUsers();





