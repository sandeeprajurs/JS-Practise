// Function Constructor

// var john = {
// 	name: 'John',
// 	yearOfBirth : 1990,
// 	job :'teacher',
// };

// var Person = function(name, yearOfBirth, job){      //function constructor..should be in caps
//  	this.name = name;
//  	this.yearOfBirth = yearOfBirth;
//  	this.job = job;
//  	// this.calculateAge = function(){             //Not able to override    
//  	// 	console.log(2016 - this.yearOfBirth);
//  	// }
// }

// Person.prototype.calculateAge = function(){           //inheriting methods   //this are not inside the object, thse are inside the prototype
//  	console.log(2016 - this.yearOfBirth);             
// }

// Person.prototype.lastName = 'Smith';                //inheriting attributes

// var john = new Person('John', 1990, 'teacher');     //creating new Person object using the Person constructor..this is called as instanciation
// var shon = new Person('Shon', 1980, 'artist');  
// var dan = new Person('Dan', 1970, 'developer');  

// john.calculateAge();
// shon.calculateAge();
// dan.calculateAge();

// console.log(john.lastName);
// console.log(shon.lastName);
// console.log(dan.lastName);

// console.log(john.hasOwnProperty('job'));
// console.log(john.hasOwnProperty('lastName'));
// console.log(john instanceof Person);
// console.log(john.__proto__ === Person);


// Premitive vs Objects

// //Premetives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// //objects
// var obj1 = {
// 	name : 'John',
// 	age : 26
// };
// var obj2 = obj1;  //referencing obj1 address to obj2, here i am not instanciating
// obj2.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);


// // Functions

// var age =27;
// var obj = {
// 	name: 'Jonas',
// 	city: 'Lisbon'
// }; 

// function change(a, b){
// 	a = 30;
// 	b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);     //when we pass premitive a simple copy is created
// console.log(obj.city);   //when we pass obj ref it changes the original obj properties


//Lecture: Passing Functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i=0; i< arr.length; i++){
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }

// function calculateAge(el) {
// 	return 2016 - el;
// }

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRate(el) {
// 	if (el >= 18 && el <= 81){
// 		return Math.round(206.9 - (0.67 * el));
// 	}
// 	else{
// 		return -1;
// 	}
// }

// console.log(arrayCalc(years, calculateAge));
// console.log(arrayCalc(years, isFullAge));
// console.log(arrayCalc(years, maxHeartRate));


// Lecture: Functions returning functions 

// function interviewQuestion(job){
// 	if(job === 'designer') {
// 		return function(name) {
// 			console.log(name + ', can you please explain what UX design is?');
// 		}
// 	}
// 	else if(job === 'teacher') {
// 		return function(name) {
// 			console.log('What subject do you teach, '+ name +'?');
// 		}
// 	} 
// 	else {
// 		return function(name) {
// 			console.log('Hello '+ name + ', What do yo do?');
// 		}
// 	}
// }

// var teachQuestion = interviewQuestion('teacher');
// teachQuestion('John');
// var designWebsite = interviewQuestion('designer');
// designWebsite('Marry');

// interviewQuestion('business man')('sandeep'); //here interviewQuestion is returning a function and i am passing "sandeep" as argument to that function


// Lecture : IIFE(Immediately Invoked Function Expression)

// function game(){                      
// 	var score = Math.random() * 10;  //the only purpose here is to privitise score variable
// 	console.log(score >= 5);         // so instead of doing like this lets use iffe 
// }

// game();                             


// (function () {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);     
// })();


// (function (goodLuck) {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5 - goodLuck);     
// })(5);   //passing argument into iife


//Lecture: Closures

// function retirement(retirementAge) {
// 	var a = ' years left until retirnment.';
// 	return function(yearOfBirth) {
// 		var age = 2016 - yearOfBirth;
// 		console.log((retirementAge - age) + a);
// 	}
// }

// var retirnmentUS = retirement(66);
// retirnmentUS(1990);

