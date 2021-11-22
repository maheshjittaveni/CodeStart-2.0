// Number -> Any value from Positive, Negative, Fractional, Decimal
// var variable_name = value;
// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var age = 27;
console.log(age);

var account_number = 872122552563;
console.log(account_number);

//String - Any value which is enclosed inside single and double quotes

var user_name = "John Smith";
console.log(user_name);

//Boolean - Either true or false

var result = true;
console.log(result);

//Undefined - The variable has been created but the values has not been defined

var empty_data;
console.log(empty_data);

//Object - It is a collection of key value pairs.
// Syntax :
/*var variable_name = {
  key_1 : value,
  key_2 : value,
  key_3 : value 
}*/

var student_information = {
  first_name : "Karthick",
  last_name : "Kumar",
  age : 27,
  roll_number : 478541686,
  score : 450,
  grade : "A+"
}

console.log(student_information);
//Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value. 

//To Read a Value -> object_variable_name.key;
console.log(student_information.first_name);

//To Insert a new Value -> object_variable_name.new_key = new_value;
student_information.location = "Chennai";

//To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;
student_information.first_name = "Mr.Abc";

//To delete a existing Record -> delete object_variable_name.key
delete student_information.roll_number;

console.log(student_information)

//Array -> It is a collection of List data (List of Data)
//Syntax of creating an Array
//var variable_name = [ value_1, value_2, .... , Value_n ];

var total_marks = [68, 78, 57, 34, 51, 44];
console.log(total_marks);

var name_list = ["Karthick", "Kumar", "Ankit", "Harsh", "Yuvaraj"];
console.log(name_list);

var record_list = [
  {
    name: 'Mr.A',
    age: 45
  },
  {
    name: 'Mr.B',
    age: 78
  },
  {
    name : 'Mr.C',
    age : 45
  }
];
console.log(record_list);

// Operation in Array -> 4 Operation = Insert a new value, Read the Value, Edit the exiting value, Delete the value

//push() - Insert a new value at the end of array record
// array_variable_name.push(value_1, value_2, ... , value_n);
name_list.push("John");

//unshift() -> Insert a new value at the start of array record
name_list.unshift("Mr.ABC");

//To Read value from Array
// array_variable_name[index]
console.log(name_list[3]);

//To edit a value from Array
// array_variable_name[index] = new value;
name_list[2] = "Mr.XYZ";

//To delete a value 
// array_variable_name.splice(index, deleteCount);
name_list.splice(2,1);

console.log(name_list);

//Function -> Block of Code 
//Syntax for Creating a Function (Function Definition)
function function_name(){ 
  // code block
};
// function_name = should be a Proper text value -> a-z, A-Z, 0-9, $, _

//Syntax for Executing/Running the Function (Function Invocation)
// function_name();

function display_message(){
  var output = "The form has been submitted successfully";
  console.log(output);
}

function onLogin(){
  var result = "You have loggin to the application";
  console.log(result);
}

//Operators 
/* 
1. Arithmetic Operator -> +, -, *, /, %, ++, --
2. Assignment Operator -> =, ==, !=, ===, !==
3. Comparision Operator -> <, <=, >, >=
4. Logical Operator -> &&, ||, ! (AND, OR, NOT)
*/
// && AND
// true && true -> true
// false && true -> false
// true && false -> false
// false && false ->  false

// || OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

//Syntax - if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
Problem statement :
To verify whether the user is eligible for Voting in India
1. To pass a number value for a function as age input
2. To validate age is greater than or equal to 18
3. If the age is greater than or equal -> This user is Eligible for Vote
4. If the age is less than -> This user is Not Eligible for Vote
*/

function check_voting_age(){
  var value = prompt("Enter your age :");
  var age = parseInt(value);

  if(age >= 18){
    console.log("This user is Eligible for Vote");
  }
  else{
    console.log("This user is NOT Eligible for Vote");
  }
}

//Syntax - Multipe if else conditon
/*
  if(conditon) {
    // code block will execute if the condition is Truthy.
  }
  else if(condition){
   // code block will execute if the condition is Truthy
  }
  else{
    // code block will execute if the condition is Falsy.
  }
*/

/*
1. Pass person age -> Number
2. idenfity -> less then or equal to 18 -> The person is Minor
2. idenfity -> greater then 18 and less than 60 -> The person is Major
3. idenfity -> greater then or equal to 60 -> The person is Super Citizen
*/

function check_age_category(){
  var value = prompt("Enter your age :");
  var age = parseInt(value);

  if(age <= 18){
    console.log("The person is Minor")
  }
  else if(age > 18 && age < 60){
    console.log("The person is Major")
  }
  else{
    console.log("The person is Super Citizen")
  }
}

/* 
Syntax - for (loop)
for(initialization;  condition; increment/decrement){ 
  //code block
}
*/

for(var count = 1; count <= 10; count++){
 console.log("Loop is running on count ", count);
}

/*
1. Find even number for given limit.
Solution: 
1. Get number (limit) value from user while running the code.
2. Logic for finding even number -> Number % 2 => 0
3. Repeat this logic till n number
*/

function print_even_numbers(){
  var value = prompt("Enter the limit");
  var limit = parseInt(value);

  for(var count = 1; count <= limit; count++){
    if(count % 2 === 0){
      console.log('The even number is ', count)
    }
  }
}

/*Syntax - for in (loop) - Used to iterate Object properties
for(var key in object_variable_name){
 // coding
}
*/
for(var key in student_information){
  console.log("The key of object ",key);
  console.log("The value of object ",student_information[key]);
}

/*Syntax - for of (loop) - Used to iterate list of Array
for(var key of array_variable_name){
 // coding
}
*/
for(var value of record_list){
  console.log(value);
}

/*Syntax - While (loop)
while(condition){
 // loop code block
}
*/

var count = 1;
while(count <= 10){
  console.log("The count is ", count);
  count++
}

/*Syntax - While (loop)
do{
 // code block      
}while(condition)
*/

do{
  console.log("The count is ", count);
  count++
}while(count <= 10)

/*Syntax - Switch Case
switch(expression){
  case value :
    // code block
    break;
  case value :
    // code block
    break;
  default:
    //code block
}
*/

function find_weekday(){
  var value = prompt("Enter a number from 0 - 6")
  var day = parseInt(value);

  switch(day){
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log('Out of range')
  }
}

function display(){
  try{
    var day = "Monday";  // local scope
    // console.log(day);
    var number_1 = 25;
    var number_2 = 100;
    var result = number_1 + number_3;
    console.log(result);
  }
  catch(error){
    console.log(error);
    alert("Sorry, something went wrong pls try again!")
  }
 
}

function printData(){
  console.log(day);
}