function tellFortune(numberOfChidren, partnersName, geographicLocation, jobTitle) {
    document.write("You'll be a ", jobTitle, " In ", geographicLocation, ", and married to ", partnersName, " with ", numberOfChidren, "<br>");
}
tellFortune(3, "Alice", "Jordan", "software engineer");

document.write("<hr>");

function calculateDogAge(puppysAge) {
    document.writeln("Your doggie is ", puppysAge * 7, " years old in dog years!<br>");
}
calculateDogAge(1);

document.write("<hr>");

function calculateSupply(Age, amountPerDay) {
    const maxAge = 100;
    let total = (maxAge - Age) * 365 * amountPerDay;
    document.write("You will need ", total, " cups of tea to last you until the ripe old age of ", maxAge, "<br>");
}
calculateSupply(30, 3);

document.write("<hr>");

function greet(name) {
    document.write("Hello ", name, ", <br>");
}
greet("Adam");

// what is the error
// function double(cat) {
//   return 2  x;//you shoul define x "let x"
// }

// function double(7) {argument is number 
//   return 2  7;
// }

// function double('7') {
//   return 2  'x'; it should be return 2 '7'
// }


// fix these functions
// function double1(x) {
//   return 2 ,x ;
// }

// function double2(x) {
// return 2 ,x;
// }

// function double3 (x)  {
//   return 2 ,x;}

document.write("<hr>");

function cube(cube) {
    return Math.pow(4, 3);
}
cube(4);

document.write("<hr>");

function multiply(num1, num2) {
    document.write("The multiply of (", num1, ",", num2, ") is = ", num1 * num2, "<br>");
}

multiply(3, 4);
multiply(5, 4);

document.write("<hr>");

function canIGetADrivingLicense(Age) {
    if (Age >= 20) {
        document.write("yes you can.<br>");
    }
    else
        document.write("please come back after ", 20 - Age, "years to get one<br>");
}
canIGetADrivingLicense(20);
canIGetADrivingLicense(17);
canIGetADrivingLicense(21);

document.write("<hr>");

function sameLength(stringarg1, stringarg2) {

    if (stringarg1.length === stringarg2.length) { document.write("true <br>"); }
    else
        document.write("flase <br>");
}

sameLength('tree', 'car');
sameLength('tree', 'clue');


document.write("<hr>");

function largerNubmer(num1, num2) {
    if (num1 > num2) {
        document.write(num1, "<br>");
    }
    else if (num2 > num1) {
        document.write(num2, "<br>");
    }
}
largerNubmer(5, 6);
largerNubmer(5, 3);

document.write("<hr>");

function smallerNubmer(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        document.write(num1, " <br>");
    }
    else if (num2 <= num1 && num2 <= num3) {
        document.write(num2, " <br>");
    }
    else if (num3 <= num1 && num3 <= num2) {
        document.write(num3, " <br>");
    }

}
smallerNubmer(8, 6, 7);
smallerNubmer(5, 99, 34);
smallerNubmer(5, 99, 3);
smallerNubmer(5, 3, 3);

document.write("<hr>");

function shorterString(str1, str2, str3, str4, str5) {
    let array = [str1, str2, str3, str4, str5];
    let shortstr = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < shortstr.length) {
            shortstr = array[i];
        }

    }
    document.write(shortstr, "<br>");
}
shorterString('air', 'school', 'car', 'by', 'github');
shorterString('air', 'tr', 'car', 'by', 'github');
shorterString('by', 'tr', 'car', 'air', 'github');
shorterString('air', 'by', 'car', 'school', 'github');
shorterString('air', 'tr', 'by', 'car', 'github');
shorterString('air', 'tr', 'car', 'github', 'by');

document.write("<hr>");

function longerString(str1, str2, str3, str4) {
    let array = [str1, str2, str3, str4];
    let longstr = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longstr.length) {
            longstr = array[i];
        }

    }
    document.write(longstr, "<br>");
}
longerString('air', 'school', 'car', 'github');
longerString('school', 'air', 'car', 'github');
longerString('air', 'car', 'school', 'github');
longerString('air', 'github', 'car', 'school');

document.write("<hr>");

function isEven(num1) {
    if (num1 % 2 == 0) {
        document.write("true<br>");
    }
    else
        document.write("false<br>");
}
isEven(1);
isEven(2);

document.write("<hr>");

function isOdd(num1) {
    if (num1 % 2 == 0) {
        document.write("false<br>");
    }
    else
        document.write("true<br>");
}
isOdd(4);
isOdd(5);

document.write("<hr>");

function positive(num1) {
    document.write(Math.abs(num1), "<br>");
}
positive(4);
positive(-5);

document.write("<hr>");

function fullName(firstName, lastName) {
    document.write(firstName + " " + lastName + "<br>");
}
fullName('Adam', 'McCallen');
fullName('Alex', 'Mercer');
document.write("<hr>");

function average(num1, num2, num3, num4) {
    let array = [num1, num2, num3, num4];
    let sum = 0;
    let count = 0;

    for(const avg of array){

        sum +=avg;
        count++;
    }

    document.write(sum / count, "<br>");
}
average(1, 2, 3, 4, 5);
average(5, 7, 9, 3, 5);
document.write("<hr>");

function randomNumber(){
    document.write(Math.random(),"<br>")
}
randomNumber();

document.write("<hr>");

function randomBetweenNumbers(min,max){
    document.write(Math.random()*(max-min)+min,"<br>");
}
randomBetweenNumbers(1,8);
randomBetweenNumbers(3,100);

document.write("<hr>");

function scoreInUniversty(num){
    if(num>=95 && num<=100){
        document.write("A<br>");
    }
    else if(num>=85 && num<=94){
        document.write("B<br>");
    }
    else if(num>=70 && num<=84){
        document.write("C<br>");
    }
    else if(num>=50 && num<=69){
        document.write("D<br>");
    }
    else if(num>=0 && num<=49){
        document.write("F<br>");
    }
}
 scoreInUniversty(96);
 scoreInUniversty(3);
 scoreInUniversty(71);

 document.write("<hr>");

 let co=0;
 function counter(){
   co++;
   document.write(co,"<br>");
 }
 function restcounter()
 {
    let rest=co;
    co=0;
    document.write(co,"<br>");
 }
counter();
restcounter();

 










