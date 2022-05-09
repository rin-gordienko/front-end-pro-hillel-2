
1.
let x = prompt("enter your number");
if (x > 0) {
    alert("positive number");
} else if (x < 0) {
    alert("negative number");
} else {
    alert("zero");
}



2.
let firstNumber, secondNumber, thirdNumber;
firstNumber = 52;
secondNumber = -4;
thirdNumber = -68;
if (firstNumber < secondNumber) {
    alert("firstNumber" + "\n"+ firstNumber);
} else if (secondNumber < thirdNumber) {
    alert("secondNumber" + "\n"+ secondNumber);
} else {
    alert("thirdNumber" + "\n"+ thirdNumber);
} 
    



3.
let myMoney, friendMoney, allMoney;
myMoney = prompt("Enter your money");
friendMoney = prompt("Enter your friends money");
allMoney = parseInt(myMoney) + parseInt(friendMoney);
if (allMoney < 50000) {
    alert("Beer")
} else {
    alert("Majorka");
}



4.
let age = prompt("Enter your age");
if (age >= 20 && age < 27) {
    alert("Вислати повiстку");
} 




5.
let bus = prompt("Enter your bus number");
if (bus == 7 || bus == 225 || bus == 255) {
    alert("Dobby is free to go home");
} else {
    alert("Dobby must keep waiting");
}


6.

let day = prompt("Enter a weekday");
if (day == "Saturday" || day == "Sunday") {
    alert("Dobby is free today");
} else {
    alert("Dobby must work to eat");
}


7.

let x, y;
x = prompt("Enter an x number from -20 to 20");
y = prompt("Enter an y number from -20 to 20");
if(x <= 1 && x <= 20 && x >= -20 && y <= 20 && y >= -20 && y >= 3 || y < 0) {
    alert(Number(x)+Number(y));
} else {
    alert("Incorrect");
}





8.

let x, y;
x = prompt("Enter a number x");
y = prompt("Enter a number y");
if(x > 2 && x < 11 || y >= 6 && y < 14) {
    alert(+x +2);
} else {
    alert(+x +5);
}




9.

let userName = prompt("Give us your soul and a name to call it");

// what false means 

if(userName != false && userName != null) {
    alert(`Welcome to the purgatory, ${userName}`);
} else {
    alert("soul unidentified");
}



10.

let greeting, lang;
greeting = "";
lang = prompt("Choose ua en ko");
if(lang == "ua") {
    greeting = "Привіт!"
    alert(greeting);
} else if(lang == "en") {
    greeting = "Hello!";
    alert(greeting);
} else if(lang == "ko") {
    greeting = "안녕!";
    alert(greeting);
} else {
    alert("please choose a language")
}

switch (lang) {
    case "ua":
        greeting = "Привіт!"
        alert(greeting);
        break;
    case "en":
        greeting = "Hello!"
        alert(greeting);
        break;
    case "ko":
        greeting = "안녕!";
        alert(greeting);
        break;
    default:
        alert("please choose a language");
}


Циклы

11.
let string = ""
for (let i = 0; i < 11; i++) {
    if (!(i % 2)) {
        string += ".";
    } else {
        string += "#";
    }
}
console.log(string);





12.

let userName = prompt("enter your name");
let happyBirthday = "";
for (let i= 0; i < 3; i++) {
    happyBirthday += "Happy birthday to you\n";
    if (i==1) {
        happyBirthday += `Happy birthday dear ${userName}\n`;
    }
}
alert(happyBirthday)




13.
let noWayOut;
do {
    noWayOut = confirm("Do you really want to leave?");
} while (noWayOut != true);


14. 

let randomNumber = +(prompt("enter any number"));
let rangeNumber = +(prompt("enter limit number"));
let result = 0;
for (let i = randomNumber; i <= rangeNumber; i++) {
    if (i % 2) {
        result = result + i;
    }
}
alert(result);



15.

let iteration = 0;
while (true) {
    let random = Math.random();
    if(random > 0.9 && iteration > 0) {
        alert(`Random figure - ${random}\nIteration number - ${iteration}`)
        break;
    }
    iteration++;
}



16.

let result;
for (let firstNumber = 1; firstNumber <= 9; firstNumber++) {
    for (secondNumber = 1; secondNumber <= 9; secondNumber++) {
        result = firstNumber * secondNumber;
        console.log(`${firstNumber} * ${secondNumber} = ${result}`);
    }
}




18.

let userNumber, total, enter;
total = 0;
enter = 0;
do {
    userNumber = prompt("Enter any number");
    total = +userNumber + total;
    enter++
} while (userNumber);
alert(`Total ${total}\nNumbers entered ${enter - 1} `);




19.
let password = "24446666688888888";

for (let i = 0; i == 0;) {
    let enteredPassword = prompt("Enter the password");
if (enteredPassword == password) {
    alert("You are successfully authorized");
    break;
} else if (enteredPassword == null) {
    if(confirm("Are u sure u want to cancel authorization?")) {
        alert("You cancelled authorization")
        break;
    } 
    }
}





20.

for (let i = 1; i <= 50; i++) {
    if (!(i%3) && !(i%5)) {
        console.log("FizzBuzz");
    } else if(!(i%5)) {
        console.log("Buzz");
    } else if(!(i%3) ) {
        console.log("Fizz");
    } else { 
        console.log(i);
    }

}