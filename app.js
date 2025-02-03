/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
console.log();


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult=(ageNum) =>{
    if(ageNum>=18)
        return "Adult"
    else
        return "Minor"

}

console.log('case 1: Exercise 2 Result (age=21):', isAdult(21));
console.log('case 2: Exercise 2 Result (age=2):', isAdult(2));
console.log();


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) =>{ //a, e, i, o, and u
    if(char ==='a' ||char ==='A' ||
         char ==='e' ||char ==='E'||
         char ==='i'||char ==='I'||
         char ==='o'|| char ==='O'||
         char ==='u'|| char ==='U') 
            return true;
    else
    return false;
}
console.log('case 1: Exercise 3 Result (Vowel):', isCharAVowel("a"));
console.log('case 2: Exercise 3 Result (not Vowel):', isCharAVowel("h"));
console.log();





/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name,domain) =>{
    return `${name}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
console.log();




/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name,timeDay) =>{
    if(timeDay ==="morning")
        return `Good morning, ${name}`;
    else if(timeDay ==="afternoon")
        return `Good afternoon, ${name}`;
    else 
        return `good evening, ${name}`

}

console.log('case 1 :Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('case 2 :Exercise 5 Result:', greetUser("Sam", "afternoon"));
console.log('case 3 :Exercise 5 Result:', greetUser("Sam", "evening"));
console.log();




/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (...nums)=>{
    let max=nums[0];
    for(let c=1;c<nums.length;c++)
        if(nums[c]>max)
            max =nums[c];
        else
            continue;

    return max;
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log();



/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill,percentage)=>{
   return (bill*(percentage/100));
}

console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log();


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature =(temp,string)=>{
    if(string==="C" || string ==="F"){
        if(string ==="C") //C × 9/5 + 32
            return `${temp*(9/5)+32} F`;
        else //°C = (°F − 32) × 5/9
            return `${(temp-32)*(5/9)} C`;
    }

}

console.log('case 1 :Exercise 8 Result (C):', convertTemperature(32, "C"));
console.log('case 2 :Exercise 8 Result {F}:',convertTemperature(32, 'F'));
console.log();


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator =(num1,num2,string)=>{
    if(string==="add")
        return num1+num2;
    else if(string==="subtract")
        return num1-num2;
    else if(string==="multiply")
        return num1*num2;
    else
        return num1/num2;

}

console.log('case 1 :Exercise 9 Result (subtract):', basicCalculator(10, 5, "subtract"));
console.log('case 2 :Exercise 9 Result (add):', basicCalculator(10, 5, "add"));
console.log('case 3 :Exercise 9 Result (multiply):', basicCalculator(10, 5, "multiply"));
console.log('case 4 :Exercise 9 Result (divide):', basicCalculator(10, 5, "divide"));
<script defer src="./app.js"></script>
console.log();

console.log("===== level up =====");
console.log()

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (num)=>{
    if(num>=90)
        return "A";
    else if(num>=80 && num <90)
        return "B";
    else if(num>=70 && num <80)
        return "C";
    else if(num>=60 && num<70)
        return "D"
    else if (num<60)
        return "F"

}
console.log('Exercise 10 Result:', calculateGrade(90));
console.log('Exercise 10 Result:', calculateGrade(85));
console.log('Exercise 10 Result:', calculateGrade(70));
console.log('Exercise 10 Result:', calculateGrade(69));
console.log('Exercise 10 Result:', calculateGrade(20));
console.log()


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername=(Fname,Lname)=>{
    //finish

}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));












