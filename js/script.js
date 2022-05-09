
// В переменную x записывается число, введенное пользователем в диалоговое окно. 
// Проверить и вывести на экран, x – отрицательное число, положительное или ноль.

let x = prompt("enter your number");
if (x > 0) {
    alert("positive number");
} else if (x < 0) {
    alert("negative number");
} else {
    alert("zero");
}



// Создайте три переменные с любыми числовыми значениями. 
// Используя let  и не используя логические, найдите минимальное число и 
// отобразите на экране имя переменной и ее значение.

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
    


// У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
// В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. 
// С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

let myMoney, friendMoney, allMoney;
myMoney = prompt("Enter your money");
friendMoney = prompt("Enter your friends money");
allMoney = parseInt(myMoney) + parseInt(friendMoney);
if (allMoney < 50000) {
    alert("Beer")
} else {
    alert("Majorka");
}


// В переменную age запишите возраст человека. 
// Если значение больше или равно 20 и меньше 27, в alert выводится “Вислати повiстку”.

let age = prompt("Enter your age");
if (age >= 20 && age < 27) {
    alert("Вислати повiстку");
} 


// Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. 
// Какая маршрутка приехала – определяется в prompt. 
// Если ваша, то вы едете домой, в противном случае – ожидаете. 

let bus = prompt("Enter your bus number");
if (bus == 7 || bus == 225 || bus == 255) {
    alert("Dobby is free to go home");
} else {
    alert("Dobby must keep waiting");
}


// В переменную day записан текущий день недели. 
// Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.

let day = prompt("Enter a weekday");
if (day == "Saturday" || day == "Sunday") {
    alert("Dobby is free today");
} else {
    alert("Dobby must work to eat");
}


// Запросите из prompt переменные x и y значения от -20 до 20. 
// Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, 
// то выведите сумму этих переменных, иначе выведите 'Неверно!'.

let x, y;
x = prompt("Enter an x number from -20 to 20");
y = prompt("Enter an y number from -20 to 20");
if(x <= 1 && x <= 20 && x >= -20 && y <= 20 && y >= -20 && y >= 3 || y < 0) {
    alert(Number(x)+Number(y));
} else {
    alert("Incorrect");
}


// Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, 
// то увеличьте x на 2, иначе прибавьте к x число 5. 
// Выведите новое значение переменной на экран.

let x, y;
x = prompt("Enter a number x");
y = prompt("Enter a number y");
if(x > 2 && x < 11 || y >= 6 && y < 14) {
    alert(+x +2);
} else {
    alert(+x +5);
}


// Получите из prompt значение для имени пользователя. Выведите на экран приветствие. 
// Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.

let userName = prompt("Give us your soul and a name to call it");

if(userName != false && userName != null) {
    alert(`Welcome to the purgatory, ${userName}`);
} else {
    alert("soul unidentified");
}



// Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. 
// Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt). 
// Если она имеет значение ‘ua’, то в переменную greeting запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком. 
// Выведите на экран приветствие в зависимости от значения переменной lang. 
// Решите задачу через if-else и через switch-case.

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



// Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.

let string = ""
for (let i = 0; i < 11; i++) {
    if (!(i % 2)) {
        string += ".";
    } else {
        string += "#";
    }
}
console.log(string);



// Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. 
// Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you


let userName = prompt("enter your name");
let happyBirthday = "";
for (let i= 0; i < 3; i++) {
    happyBirthday += "Happy birthday to you\n";
    if (i==1) {
        happyBirthday += `Happy birthday dear ${userName}\n`;
    }
}
alert(happyBirthday)




// Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

let noWayOut;
do {
    noWayOut = confirm("Do you really want to leave?");
} while (noWayOut != true);


// В окно prompt вводится число. 
// Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. 
// Результат отобразите в окне alert. 

let randomNumber = +(prompt("enter any number"));
let rangeNumber = +(prompt("enter limit number"));
let result = 0;
for (let i = randomNumber; i <= rangeNumber; i++) {
    if (i % 2) {
        result = result + i;
    }
}
alert(result);



// Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. 
// Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

let iteration = 0;
while (true) {
    let random = Math.random();
    if(random > 0.9 && iteration > 0) {
        alert(`Random figure - ${random}\nIteration number - ${iteration}`)
        break;
    }
    iteration++;
}


// Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 

let result;
for (let firstNumber = 1; firstNumber <= 9; firstNumber++) {
    for (secondNumber = 1; secondNumber <= 9; secondNumber++) {
        result = firstNumber * secondNumber;
        console.log(`${firstNumber} * ${secondNumber} = ${result}`);
    }
}


// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. 
// После выхода из цикла распечатайте количество введенных чисел, их общую сумму.

let userNumber, total, enter;
total = 0;
enter = 0;
do {
    userNumber = prompt("Enter any number");
    total = +userNumber + total;
    enter++
} while (userNumber);
alert(`Total ${total}\nNumbers entered ${enter - 1} `);


// Напишите проверку пароля, введенного пользователем (заведомо определите пароль). 
// Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. 
// Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. 
// В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля

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


// Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

// - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»; 


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
