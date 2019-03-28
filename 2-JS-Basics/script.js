console.log('Hello World!');

// Lecture : variables1

// var name = 'sandeep';
// console.log(name);

// var age = '23';
// console.log(age);

// var male = true;
// console.log(male);

//undefined
//null

// Lecture : variables2

// var name = 'John';
// var age = 26;
// var job = 'Developer';
// var isMarried = false;
// console.log(name + ' is a ' + age + ' years old '+ job + '.Is he maried? '+ isMarried + '.');

// name = 'Ruby';
// age = 28;
// job = 'Developer';
// isMarried = true;
// console.log(name + ' is a ' + age + ' years old '+ job + '.Is he maried? '+ isMarried + '.');

// var lastName = prompt('What is your last name?');
// console.log(lastName)

// alert(name + ' is a ' + age + ' years old '+ job + '.Is he maried? '+ isMarried + '.');


// Lecture : Operators
	// === is prefered to use as no dynamic type conversion happens
// var now = 2016;
// var birthYear = now - 26;

// birthYear = now - 26 * 2;
// //2016 - 52
// //1964

// console.log(birthYear);

// console.log(++now);

// console.log(now += 1);  //same for mul, div,sub


// Lecture : If else Statement

// var age = "26";

// if(age == 26){  // == will do type conversion
// 	console.log('Age is '+age);
// }
// else{
// 	console.log('Age is not '+age);
// }

// if(age === 26){ // === will not do any type conversion
// 	console.log('Age is '+age+' no type conversion done');
// }
// else{
// 	console.log('Age is not '+age+' no type conversion done');
// }



// Lecture : boolean logics and switch statements

// var name = 'sandeep'
// var age = 23

// if(name === 'sandeep' && age === 23){ 
// 	console.log('You are young')
// }
// else{
// 	console.log('You are old')
// }



// var job = 'teacher';

// job = prompt('What does john do?');

// switch (job) {
// 	case 'teacher':
// 		console.log('John teaches kids.');
// 		break;
// 	case 'driver':
// 		console.log('John drives car.');
// 		break;
// 	case 'cop':
// 		console.log('John helps fight crime.');
// 		break;
// 	default:
// 		console.log('John does something else.');
// }


// CODING CHALLENGE 1

// var johnHeight = 165;
// var johnAge = 26;

// var friend1Height = prompt('Enter height of friend1');
// var friend1Age = prompt('Enter age of friend1');

// if(friend1Height > johnHeight && friend1Age > johnAge*5){
// 	console.log('friend wins');
// }
// else if(friend1Height === johnHeight && friend1Age === johnAge*5){
// 	console.log('Draw match');
// }
// else{
// 	console.log('john wins');
// }


// Lecture: Functions

// function calculateAge(yearOfBirth){
// 	var age = 2016 - yearOfBirth;
// 	return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
// console.log(ageMary);

// function yearsUntilRetirnmnet(name, year){

// 	var age = calculateAge(year);
// 	var retirnment = 65 - age;
// 	console.log(retirnment);
// }

// yearsUntilRetirnmnet('John', 1990)


// Lecture Arrays

// var names = ['John', 'sandeep', 'sudeep'];
// var years = new Array(1990, 1991, 1992);

// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);

// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue'); //insert to last index
// john.unshift('Mr.');  //insert to 0th index
// john.pop();  //remove last element from array
// john.shift(); //remove the first element
// console.log(john);

// //if indexOf wont find the element it returns -1
// if(john.indexOf('teacher') === -1){
// 	console.log('John is not a teacher')
// }


// Lecture : Objects and Properties

 /* First way of creating the object */
// var john = {
// 	name: "John",
// 	lastName: "Smith",
// 	yearOfBirth: 1990,
// 	job: "teacher",
// 	isMarried: false
// };

// console.log(john.name);
// console.log(john['lastName']);

// var xyz = "job";
// console.log(john[xyz]);


/* Second way of creating the object */
// var jane = new Object();
// jane.name = 'jane';
// jane.lastName = 'awesome';
// jane.yearOfBirth = 1992;
// jane.job = 'driver';
// jane.isMarried = true;

// console.log(jane);



// Lecture : Objects and Methods

	/* v1.0 */
// var john = {
// 	name: "John",
// 	lastName: "Smith",
// 	yearOfBirth: 1990,
// 	job: "teacher",
// 	isMarried: false,
// 	family: ['Jane', 'Mark', 'Bob'],                                                                                                                               
// 	calculateAge : function() {
// 		return 2016 - this.yearOfBirth;      //gets the yearOfBirth of this obj(john)
// 	}
// };

// var age = john.calculateAge();
// john.age = age; 
// console.log(john['age']);

   /* v2.0 */
// var john = {
// 	name: "John",
// 	lastName: "Smith",
// 	yearOfBirth: 1990,
// 	job: "teacher",
// 	isMarried: false,
// 	family: ['Jane', 'Mark', 'Bob'],                                                                                                                               
// 	calculateAge : function() {
// 		this.age = 2016 - this.yearOfBirth;      //gets the yearOfBirth of this obj(john)
// 	}
// };

// console.log(john.family[2]);
// john.calculateAge();
// console.log(john.age);


// Lecture : Loops

// for(var i=0; i<=5; i++){
// 	console.log(i);
// }

// var list = ['sandeep', 'sudeep', 'mahesh', 'rupesh', 'jayanth'];

// for(var i=0; i<list.length ; i++){
// 	console.log(list[i]);
// }

// for(var i=list.length-1; i>=0 ; i--){
// 	console.log(list[i]);
// }

// var i = 0;
// while(i < list.length){
// 	console.log(list[i]);
// 	i++;
// }

// for(var i=0; i<6; i++){
	
// 	console.log(i);
// 	if(i === 3){
// 		// console.log('breaking no');
// 		// break;
// 		console.log('continue executed');
// 		continue;
// 	}
// 	console.log('This wont print for 3');
// }


// Excercise 2

// function printFullAge(yearsOfBirth){
// 	agesOfPersons = [];

// 	for(var i=0; i<yearsOfBirth.length; i++){
// 	agesOfPersons[i] = 2016 - yearsOfBirth[i];
// 	}
	
// 	vectorBoolean = [];

// 	var i = 0;
// 	while(i < agesOfPersons.length){
// 	if(agesOfPersons[i] >= 18){
// 		vectorBoolean[i] = true;
// 		console.log('Person is of full age his age is'+agesOfPersons[i]);
// 	}
// 	else{
// 		vectorBoolean[i] = false;
// 		console.log('Person is not of full age as his age is'+agesOfPersons[i]);
// 	}
// 	i++;
// 	}

// 	return vectorBoolean;
// }

// yearsOfBirth = [1990, 1991, 1992, 1993, 1994];
// var full_1 = printFullAge(yearsOfBirth);
// console.log(full_1);

// yearsOfBirth = [2005, 2006, 2007, 2000, 1998];
// var full_2 = printFullAge(yearsOfBirth);
// console.log(full_2);
