/*console.log("hello wrold");
/*print hello wrold*/
/*Artimatic operaters*/
// let a = 5;
// let b= 2;
// console.log("a+b=",a+b);
// console.log("a-b=", a-b);
// console.log("a/b=", a/b);
// console.log("a*b=", a*b);
// console.log("a%b=",a%b);
// //exponentiation
// console.log("a**b=",a**b);

// let str="hello wrold!";
// let sliced=str.slice(0,12);
// console.log(sliced);

// //let str1="hello wrold hi india";
// //let sliced=str.slice(7);
// //console.log(sliced1);

// let str2="hello wrold!";
// let sliced=str.slice(-6);
// console.log(sliced2);

// let str3="javascript";
// let sliced=str.slice(0,3);
// console.log(sliced3);

// let str4="javascript";
// let sliced=str.slice(0,3);
// console.log(sliced4);

// let str5="programning";
// let sliced=str.slice(0,3);
// console.log(sliced4);

// let str1="hello, wrold!";
// let substring=str1.substr(7, 5);
// console.log(substring)

// let str2="hello, wrold!";
// let substring1=str2.substr(7);
// console.log(substring1)

// let str3= "javascript!";
// let substring2=str3.substr(4, 7);
// console.log(substring2)

//let originalstring= "hi";
//let repatedstr=orginalstring.repeat(4);
//console.log(repatedstr);

//let originalstring1= "chinmay";
//num=100
//let repatedstr1=orginalstring1.repeat(num);
//console.log(repatedstr);

//let star="helllo,wrold and wrold and wrold";
//console.log(str.match(/wrold/))
//let star1="Helllo,wrold and wrold and wrolD";
//console .log(str.match(/wrold/gi))

//let numbers =[1,2,3,];
//let concateNum =  numbers.concat(4,5,6,7,8);
//console.log(concateNum);

//let array1 =[1,2,3];
//let array1 =["a","b","c"];


//push and pop
//push method in javascript is used to add one or more elements to the end of the array

//let numbers = [1, 2, 3, 4];
//numbers.push(500);
//numbers.push(1000);
//console.log(numbers)
//let mobiles = ['LG', "IPHONE", "BPL", "VIVO"];
//mobiles.push("SAMSUNG", "OPPO");
//console.log(mobiles)//normal way of inserting elements into an array

//let values = [];
//values[0] = 10;
//values[1] = 20;
//console.log(values);
//using push
//let values = [];
//values.push(10, 20, 30, 40);
//console.log(values);
//let values = [1, 2];
//console.log(values); //1, 2
//values.push(3, 4); //to existing and i wanted to push/add the new elements
//console.log(values)
//let values1 = [1, 2, 3, 5]; //concat combining
//let values2 = [2, 3, 5, 6];
//pop: is used to remove the last element from an array and returns the removed element

// let mobiles = ['LG', "IPHONE", "BPL", "VIVO"];
// console.log(mobiles);
// let removMobile1 = mobiles.pop();
// let removMobile2 = mobiles.pop();
// console.log(mobiles)
// let numbers = [1, 2, 3, 4, 5];
// let lastNumber = numbers.pop(); //5
// console.log(numbers);
// console.log(lastNumber);
// let mixedArr = [1, "string", {value: 10}];
// let removedMixedElement = mixedArr.pop();
// console.log(mixedArr);

// const number=[5,10,15,20,-1];
// const positivenumber=number.every(number=>number>0);
// console.log(positivenumber);

// const mobiles = ["lg","samsung","bpl","iphone"];
// const allMobiles = mobiles.every(mobile=>mobile.length>2);
// console.log(allages);

// const number=[1,3,5,7,13,2];
// const evenNumber = numbers.some(num=> % 2===0);
// console.log(evenNumber);

// const word = ['appale',"banana","kibi","grapes"];
// const checkWords =word.some(word=>word.length>5);
// console.log(checkWords);

// let num =[40,90,103,70];
// let checkNum = mum.some(num=>num>100);
// console.log("checknumb>100",checkNum);

//filter method in javascript is used to create a new array containing elements that satisfy a specific condition






// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers); //1, 2, 3, 4, 5, 6
// const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers); // 2, 4, 6
// const students = [
//     {fname: "Omkar", grade: 90},
//     {fname: "chimay", grade: 60},
//     {fname: "viswa", grade: 50},
//     {fname: "nitish", grade: 80},
// ];
// const highGrades = students.filter(student => student.grade > 70);
// console.log(highGrades)
// const business = [
//     {site: "flipkart", business: 90},
//     {site: "amazon", percentage: 60},
//     {site: "myntra", percentage: 50},
//     {site: "fab", percentage: 80},
// ];
// const offers = business.filter(business => business.business > 70);
// console.log(highGrades)
// const percentages = [20, 30, 60, 90];
// const maxPercentage = 90;
// const filterPer = percentages.filter(percentage => (percentage/maxPercentage) * 100 > 70);
// console.log(filterPer)
// //pop and push
// //shift and unshift
// //shift is used to remove the first element from the array and returns the removed element
// //pop will remove the last element
// let values = [1, 2, 3, 4, 5];
// let removeFirst = values.shift();// will remove the first
// console.log(removeFirst); //1
// console.log(values); // 2, 3, 4, 5
// let values4 = [1, 2, 3, 4, 5];
// let pops = values.pop();// will remove the last
// console.log(pops); //5
// console.log(values4); // 1, 2, 3, 4,
// //push: will will add the elements to the last in the array
// //unshift: is used to add one or more elements to the beginninng of an array
// let values1 = [1, 2, 3, 4, 5];
// values1.unshift(400, 500);
// console.log(values1)
// let values2 = [1, 2, 3, 4, 5];
// values2.push(400, 500);
// console.log(values2)


// let a=5;
// let b=10


// console.log('a+b=',a+b);
// console.log("b-a=",b-a);
// console.log("b/a=",b/a);
// console.log("chinmays");
// console.log("msan");
// console.log();

// // //conditional statements
//  let number=20;
//  if(number%2===0){
//     console.log(number,"is even")
//  }
// else{
//     console.log(number,"is odd")
// }

// let age = 20;
// if(age<18){
//     console.log("junior");

// }else if (age>60){
//     console.log("senior")
// }else{console.log("middle")

// let x; // variable declared but not initialized
// console.log(x); // Output: undefined

// let y = null; // variable intentionally set to null
// console.log(y); // Output: null

// let obj = { property: null }; // property intentionally set to null
// console.log(obj.property); // Output: null


// // //local scope
// function print() {
//     var number = 50
//     var square = number * number
//     console.log(square)
//   }

//   print() // 2500
//   console.log(number)
//   // ReferenceError: number is not defined



//   //  golobal scope
//   var number = 50

// function print() {
//   var square = number * number
//   console.log(square)
// }
// console.log(number) // 50
// print() // 2500

// sorting method
// assending order 
//dessinding order

// let numbers =[7,8,9,1,2,3,4,5,6];
// let sorting = numbers.sort();
// console.log(sorting);

// let numes =["a","b","c","d"];
// let sortingNames =names.sort();
// console.log(sortingNames);

// // let numb = [2,1,3,20,10,4,100,50,5,90]
// // let sortingnumb=numb.sort();
// // console.log(numb);

// let age = 18;
// if(age>=18){
//     console.log("u can vote")
// }
// if(age<=18){
//     console.log("you can't aplicable for vote")

// }
//  let mode="dark";
//  let color;
//  if(mode=== "dark"){
//     color="black";

//  }

//  if(mode==="light"){
//     colour="white";

//  }

// console.log(color)

// let mode1="light";
// let color1;
// if(mode1==="dark"){
//     color1="black";
// }
// else{
//     color1="wite";
// }
// console.log(color1);

// odd or even

// let num =100;
// if(num%2===0){
//     console.log(num,"even");

// }else{
//     console.log(num,"odd")
// }

// let amount=108757;
// if(amount%2===0){
//     console.log(amount,"is even")
// }else{
//     console.log(amount,"is odd")
// }

// let mode = "dark";// dark avabile that dark print
// let color;
// if(mode==="dark") {
//     color="black";
// }else if (mode==="blue") {
//     color="blue";
// }else if(mode==="pink") {
//     color="pink";
// }else{
//     color="white"
// }
// console.log(color);//silver notavabile that white  print

// if(mode==="silver"){
//     console.log(mode);
// }

// let age= 12;
// let result= age>=18?"adult":"not adult"
// console.log(result);

// let age1= 28;
// let result1 = age>=18?"adult":"no adult"
// console.log(result);


// const lorem= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quisquam sapiente impedit rerum dolorum itaque facilis atque debitis eos? Explicabo dolor sed fugiat odit, voluptatem at hic. Nostrum maxime, dolor similique aperiam ducimus asperiores ipsam excepturi porro in. Culpa dicta nesciunt veritatis quia ea reiciendis modi nihil exercitationem quas a molestiae error voluptates, esse rem possimus iste asperiores incidunt provident cumque eligendi pariatur, enim laudantium ab! Vitae ducimus neque natus non nemo autem soluta impedit et illo eum? Maiores pariatur consequuntur numquam, ratione totam illo reprehenderit eius accusamus, deserunt laudantium quasi atque ullam eveniet veritatis unde perspiciatis architecto vitae iusto ex quidem id cupiditate animi impedit! Fugiat eius illum quaerat molestiae iure optio dolor deleniti dolorem ipsa ipsum debitis inventore, alias asperiores! Eos unde minima necessitatibus quae rem reprehenderit quod doloremque optio officia laudantium, tempora accusantium aliquam voluptate modi fugit nobis ipsa est odio vel sit molestias autem? Neque quam inventore ullam error provident reprehenderit vero voluptate, ducimus a perspiciatis et tempore placeat est quas doloribus eaque ex pariatur dignissimos, enim sunt? Maiores voluptates labore dolore alias quae id. Totam similique laboriosam dolorum voluptates atque autem sint repellendus nulla exercitationem quo, aliquid ut? Labore, dolorum iure incidunt laboriosam sit quo"

// const sit=lorem.split(" ").filter((element)=>{
// return element==="ipsum"
// })

// console.log(sit);
// const generateNumber=()=>{


//     randomNumer.innerHTML="yyyyyyy"

// let arr = [50,5, 8, 20, 21, 2, 4, 8, 75]
// // }
// function getbigNumber(params) {
//     document.querySelector(".randomNumber").innerHTML="gbyubhyu";
    
    
// }

// function getlittle(prams) {document.querySelector('.randomNumber').innerHTML="chinmay"

    
// }

// function rakes(params) {
//     let chinmay=prompt()
//     document.querySelector(".randomNumber").innerHTML=chinmay

// }

// let acccountNumber=prompt("enter your adhar id");
// if(accountNumber%2===0);{
//     console.log(acccountNumber,"valid")
// }else{
//     console.log(acccountNumber,"invalid")
// }

// let score=prompt("enter your scour0-100");
// let grade;
// if(score<=90 && score>=100);{
//     grade="A+"
// }else if(score>=80 && score<=89){
//     grade="A";
// }else if(score>=70&&score<=79);{
//     grade=("B+");
// }else if (score>=60&&score<=69) {
//     grade="B"
// }else if (score<=) {
    
// }
// let something= new person("venkat", "bangalore");
// something.hello()



// class Boook{
//     constructor(title.author,publicationyear){
//         this.title=title;
//         this author=author;
//         this.publication= publicationyear
//     }
// )chinmay(){
//     console.log(this.title,this.author,this.publicationyear)
//     }
// }

// let person={
//     fullName:function (city,country){
//         return this.firstName+' '+this.lastName+' '+' '+ country;
//     }
        
//     }

//     let person1={
//         firstName:"venkat";
//         lastName:"m"
//     }
       
    
//     let fullName= person.fullName.call(person1,"bangalore","india");
//         console.log(fullName)


// function sum(...sum){
//     return num.reduce((total,num)=>total+num,0);
// }
// console.log((sum)(6,10,20,54,72))

// function add(...number){
//     let total=0;
// for (let num of number){
//     total=total+num
// }
// return total;
// }
// console.log(add(1,2,3,4,51000,2399))


// const arr1 =[1,2,3];
// const arr2=[4,5,6];
// console.log(arr1+''+arr2);
// // console.log(arr3);

// const arr4 =[1,2,3,4];
// const arr5=[...arr4,4,5,6,7,8,9,10];
// console.log(arr5);


// const name ={fnname: "chinmay",lname:"panday"};
// const addr={city:"kolkata",state:"westbengal"};
// const fullobj ={...name,addr};
// console.log(fullobj);
 
//destracturing
// let numbers=[1,2,3,4,5,6];
// let [one,two,three,four,five]=numbers;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);

// let details = {name:"chinmay",city:"kolkata",state:"westbengal"};
// let name = details.name;
// let city = details.city;
// let state =details.state;
// console.log(name,city,state);


// let details2 = {name1:"chinmay",city1:"kolkata",state1:"westbengal"};
// let {name1,city1,state1}=details1;
// console.log(name1,city1,state1);
// //nested object

// let details = {name:"chinmay",city:"kolkata",state:"westbengal"};
// let city=details.name;
// let state= details.address.state;
// console.log(name,city,state);

// destructring
// let details = {name:"chinmay",city:"kolkata",state:"westbengal"};
// let{namme,address:{city,state}}=details;
// console.log(name,city,state)
// function userdata(user){
//     console.log(user.name)
//     console.log(user.name)
// }

// export let {add,substract,mulyiply,divide

// console.log(10+"20");//1020

// console.log(10-"20");//bug(1st bug in java script)

// console.log("java "        + "script");// javascript

// console.log(" "+" ");//
// console.log("chinmay "+"panday");//chinmay panday
// console.log("chinmay "-"panday");//NaN(two string when minuse)
// console.log(true+true);2
// console.log(true+false);1
// console.log(false+true);//1
// console.log(false-true);//-1

// // diffrance null vs undifine
// var iAmUseless=null;
// console.log(iAmUseless);//null
// console.log(typeof(iAnUseless));// object (2nd bug)

// var iAmStandBy;
//onsole.log(iAmStandBy);

// var myName="chinmay";
// var myPhoneNumber=9647224342;
// console.log(isNaN(myName));
// console.log(isNaN(myPhoneNumber));
// if(isNaN(myName)){
//     console.log("plz Enter the valid phone number")
// }

// NaN===NaN;
// Number.NaN===NaN;
// isNaN(NaN);
// isNaN(Number.NaN);

// console.log(NaN===NaN);

// console.log("remainder operater",56%2);
 // increment& decriment operater
//++num=>prefix;num++postfix
//@1 num++postfix
// var num=70;
// var newNum=num++ +8;
// console.log(num);//71
// console.log(newNum);//78
// //@2++num=>prefix
// var num=70;
// var newNum=++num +7;
// console.log(newNum);//78

// var num=15
// var newNum=num-- +7;
// console.log(newNum);//22

// var num=70;
// var newNum=--num -7;
// console.log(newNum);//62

// //Equal (==)
// var a=10;
// var b=20;
// console.log(a==b);
// // not equal(!=)
// var a=10;
// var b=20;
// console.log(a!=b);

// // //logical and (&&0 oparater(logical jonction)
// var a=13;
// var b=14;
// var c=15;
// var d=16;
// console.log((a<b)&& (b>a)&&(d>c) && (c<d));

// //logical OR (||)oparater(logical disjonction)
// var a=13;
// var b=14;
// var c=15;
// var d=16;
// console.log((a<b)|| (b>a)||(d>c) || ((c<d)));//some true then resul true. if all false then false.

// //! not oparater
// console.log(!true);//false

// // concatination
// var myName = "chinmay"
// var $2ndName="panday"
// console.log("chinmay"+" pandey");
// console.log(myName+$2ndName);

// //exponentiation power
// console.log(5**3);//125
// console.log(10**-1);//1/10=0.1
// console.log(5+"chinmay");//5chinmay
// console.log(5-"chinmay");//NaN
//sol1 var a=var 

// var a=50;
// var b=76;
// //output b=50;a=76
// var c=b;//c=76
// b=a;
// a=c;
// console.log("the value of the a is= "+a);
// console.log("the value of the b is="+b);
//sol 2 show a=b;b=a
// var a= 10;
// var b=20;
// //outputa=20;b=10
// a=a+b;//a=30
// b=b-a;//10
// a=a-b;//20
// console.log("the value of the a is= "+a);
// console.log("the value of the b is="+b);

// control statement & loops ......

// if..else
// switch statement
// while loop
// do-while loop
// for loop 
// for in loop 
// for of loop
// conditionl operater.
 ///// switch statement 
// var year =2021;
// if (year%4===0){
//     console.log("is leap year");
// }else{console.log("is not leap year");
     
// }
// var age=12;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("you can not vote");

// }
// // if else short kart
// var age=18;
// console.log((age>=18)?"u can":"u cant")

// find the area of a circle,rectungular,triangle.
// var area = "ball";
// var PI=3.14,l=10,b=23,h=3,r=4;
// if(area=="circle"){
//     console.log("the area of the circle is: "+PI*r**2);
// }else if(area== "triangle"){
// console.log("the area of tringle is: "+(l*b)/2);
// }else if(area=="square"){
//     console.log("the area of square is: " +(l*b));

// }else if(area=="rectangle"){
//     console.log("the area of the rectangle is: "+(b*l));
// }else{
//     console.log("please enter the valid data");

// }
//    var area="triangle";
//    var PI=3.14,l=27,b=12,h=3,r=11;
//    switch(area){
// case "circle":
// console.log("the area of the circle is: "+PI*r**2);
// break
// case"triangle":
//  console.log("the area of triangle is : "+(l*b)/2);
// break
//  case"squre":
//  console.log("the area of squre is : "+l*b);
// break
//  case "rectuangular":
// console.log("the area of the rectangle is: "+(b*l));
// break
// default:
// console.log("please enter the valid data");
// }
//if not use break then circle,rect,sqr,tri area output.

// while loop statement

//  var num=20;
//  while(num<=20){
//     console.log(num);// infinte loop
//  }
// var num=0;
// while(num<=10){
//     console.log(num);
//     num++;
// }

// do whele loop statement

//  var nam=0;

//  do{
//     console.log(nam);
//     nam++;
//  }while(nam<=10);// 1to 10 

 //// for loop

// for(var num=0;num<=10;num++){
//     console.log(num);///0 to 10
// }

//  for(var number=1;number<=10;number++){
//     var tableOf=16;
//     //// console.log(tableOf+"*"+number+"="+tableOf*number);//16 ghar numta
// console.log(`${tableOf}*${number}=${tableOf*number}`);
//  }

//1 function deffination
//a function deffination ( alsoso called function declaration or function statement)

  
// function sum(){
//     var a=10,b=20;
//     var total =a+b;
//     console.log(total);
// }
  
// function sum(){
//     var a=10,b=20;
//     var total = a+b;
//     console.log(total);
// }sum();////30

// 2.tamplate literals(tamplate strings)

//  for(var number=1;number<=10;number++){
//     var tableOf=16;
// console.log(`${tableOf}*${number}=${tableOf*number}`);
//  }

//3.defults paramiter

// function nam(a,b){
// return a*b;
// }
// console.log(nam(5,3));//15
// function nam(a,b=5){
//     return a*b;
//     }
//     console.log(nam(5));//5is a difolt paramiter=25

//fat arrow function
// const sum=()=>{
//     let a=5;b=6;
//     return`the sum of the two number is ${(a=5)+(b=6)}`;
// }
// console.log(sum());
// //convert fat arrow function.
// const sum=()=> `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum());

/////////// arrays in javascript//////

// var myFnds = ["chinmay",1,3,6,7,9,10,23,45]
// console.log( myFnds[myFnds.length-1]);
// console.log(myFnds.length);
// for(var i=0;i<=myFnds.length;i++){
//     console.log(myFnds[i]);
// }
//\\ we use for in loop(index number)

//var myFriendsName=['mampi',"chinmaY ","golu","dhoulu","ball","cat"]
// for(let elements in myFriendsName){
// console.log(elements);//1,2,3,4,5,6,
// }

// \\for  of loop
 
// var collickList =['mampi',"chinmaY ","golu","dhoulu","ball","cat"]

// for(let elements of collickList){
//     console.log(elements);// element 

// }

//\\Array.prototype.forEach()
// var myFriendsName=['mampi',"chinmaY ","golu","dhoulu","ball","cat"]
// myFriendsName.forEach(function(elements,index,arry){
// console.log(elements);
// console.log(index);
// console.log(myFriendsName);
// })
//\\ //\\Array.prototype.()push method 
// const animal =['mampi',"chinmaY ","golu","unknown","dhoulu","ball","cat"]
// animal.push("ranjit","golooo");// last push(ranjit goloo)
// console.log(animal);

// const count = animal.push("ranjit","golooo","known");
// console.log(count);// 12(array length)

// unshift
//  const nameOfemployee=['mampi',"chinmaY","golu","unknown","dhoulu","ball","cat"];
// nameOfemployee.unshift("chintu");
// console.log(nameOfemployee);
// const count=nameOfemployee.unshift("jan","unknouon");
// console.log(count);

//\\ //\\Array.prototype.()unshift 
// const myNumber=[1,2,3,4,5,6,7];
// myNumber.unshift(8,9);
// console.log(myNumber);// 8,9 (add at first)


//\\Array.prototype.()shift 




//\\Array.prototype.pop method

// const plant =[ 'adeniuam','ficus','lotus','rubber','tamato','garlick'];
// console.log(plant);//all
// console.log(plant.pop());//garlick
// console.log(plant);//remove(garlick)


//\\Array.prototype.splice method// vvi method

// const months=['jan',"feb","mar","April","nov",];
// const newMonths=months.splice(months.length,0,"dec");
// console.log(months);


// const months=['jan',"feb","mar","April","Nov"];
// const indexOfMonth=months.indexOf("mar");
// if(indexOfMonth!=-1){
//     const newMonthsUpdate=months.splice(indexOfMonth,1);
// }else {
//     console.log("no deta found");
// }
// march uodate

// const months=['jan',"feb","mar","April","nov",];
// const indexOfMonth = months.indexOf("Feb");
// if(indexOfMonth!=-1){
// const monthsUpdate=months.splice(indexOfMonth,1)
// console.log(month);
// }else{
//     console.log("no deta");
// }

// const newMonths=months.splice(months.length,0,"dec");
// console.log(months);


//\\map vvi

//  const array1=[1,2,4,5,7,25,65];
//  //num >9
// let newArr= array1.map((currentelement,index,arr)=>{
//     return currentelement>9;
// })
// console.log(array1);
// console.log(newArr);//f,f,f,f,f,t,t

let newArray = array1.map((curElm,index,arr)=>{
   return"index no =${index}and the valueis ${currentElemen} belong to $ {arr}"
})
console.log(newArray);






