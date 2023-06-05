document.getElementById('hm4t1button').addEventListener('click', function (e) {
    e.preventDefault();

    let n1 = parseFloat(document.getElementById('hm4t1number1').value);
    let n2 = parseFloat(document.getElementById('hm4t1number2').value);

    document.getElementById('hm4t1number3').value = n1 > n2 ? n1 : n2;
});

document.getElementById('hm4t2button').addEventListener('click', function (e) {
    e.preventDefault();

    let km = parseFloat(document.getElementById('hm4t2distance1').value);
    let ft = parseFloat(document.getElementById('hm4t2distance2').value);

    let kmToM = km * 1000;
    let ftToM = ft * 0.305;

    document.getElementById('hm4t2result').value = kmToM < ftToM ? kmToM : ftToM;
});


document.getElementById('hm4t3button').addEventListener('click', function (e) {
    e.preventDefault();

    let a = parseInt(document.getElementById('hm4t3number1').value);
    let b = parseInt(document.getElementById('hm4t3number2').value);

    let answer = "";
    answer += (b % a === 0) ? "a дільник b. " : "a не дільник b. ";
    answer += (a % b === 0) ? "b дільник a." : "b не дільник a.";

    document.getElementById('hm4t3result').value = answer;
});

document.getElementById('hm4t4number').addEventListener('input', function (e) {
    e.preventDefault();

    let number = parseInt(document.getElementById('hm4t4number').value);

    document.getElementById('hm4t4result').value = (number % 10) % 2 === 0 ? "Парна" : "Непарна";
});

document.getElementById('hm4t5number').addEventListener('input', function (e) {
    e.preventDefault();

    let number = parseInt(document.getElementById('hm4t5number').value);
    let n1 = Math.floor(number / 10);
    let n2 = number % 10;
    let answer = "";

    if (n1 > n2) {
        answer = "1";
    } else if (n2 > n1) {
        answer = "2";
    } else {
        answer = "=";
    }

    document.getElementById('hm4t5result').value = answer;
});

document.getElementById('hm4t6number').addEventListener('input', function (e) {
    e.preventDefault();

    let number = parseInt(document.getElementById('hm4t6number').value);
    let n1 = Math.floor(number / 100);
    let n2 = Math.floor((number % 100) / 10);
    let n3 = number % 10;
    let sum = (n1 + n2 + n3);

    document.getElementById('hm4t6result').value = sum % 2 === 0
        ? "Сума цифр парна." : "Сума цифр непарна.";
    document.getElementById('hm4t7result').value = sum % 5 === 0 ? "Сума цифр кратна п'яти." : "Сума цифр не кратна п'яти.";
    document.getElementById('hm4t8result').value = (n1 * n2 * n3) > 100 ? "Добуток > 100." : "Добуток <= 100.";

    let answer4 = (n1 === n2 && n2 === n3) ? "Всі цифри однакові." : "Цифри не однакові.";
    document.getElementById('hm4t9result').value = answer4;

    let answer5;
    if (n1 === n2 || n2 === n3 || n1 === n3) {
        answer5 = "Є однакові цифри.";
    } else {
        answer5 = "Немає однакових цифр.";
    }
    document.getElementById('hm4t10result').value = answer5;

});



document.getElementById('hm4t11number').addEventListener('input', function (e) {
    e.preventDefault();
    let n = parseInt(document.getElementById('hm4t11number').value).toString();

    let palindrome = (
        n[0] === n[5] &&
        n[1] === n[4] &&
        n[2] === n[3]
    );
    document.getElementById('hm4t11result').value = (palindrome ? "" : "!") + "Паліндром";
});

//hm 5
document.getElementById('hm5button').addEventListener('click', function () {
    const birthYear = parseInt(document.getElementById('hm5birthYear').value);
    const city = document.getElementById('hm5city').value;
    const sport = document.getElementById('hm5sport').value;

    if (!birthYear || !city || !sport) {
        alert('Шкода, що Ви не захотіли ввести свій(ю) дату народження, місто або вид спорту.');
        return;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    let message = `Вік: ${age}\n`;

    switch (city) {
        case 'Київ':
            message += 'Ти живеш у столиці Києві (України).\n';
            break;
        case 'Вашингтон':
            message += 'Ти живеш у столиці Вашингтоні (США).\n';
            break;
        case 'Лондон':
            message += 'Ти живеш у столиці Лондоні (Великобританії).\n';
            break;
        default:
            message += `Ти живеш у місті ${city}.\n`;
            break;
    }

    switch (sport) {
        case 'футбол':
            message += 'Круто! Хочеш стати чемпіоном у футболі? Хочешь стати як Ліонель Мессі?\n';
            break;
        case 'теніс':
            message += 'Круто! Хочеш стати чемпіоном у тенісі? Хочешь стати як  Серена Вільямс?\n';
            break;
        case 'баскетбол':
            message += 'Круто! Хочеш стати чемпіоном у баскетболі? Хочешь стати як Майкл Джордан?\n';
            break;
    }

    alert(message);

});

//tab hm6
document.getElementById('hm6button').addEventListener('click', function () {
    const numOrStr = prompt('input number or string');
    console.log(numOrStr);

    switch (true) {
        case numOrStr === null:
            alert('ви відмінили');
            break;
        case numOrStr.trim() === '':
            alert('Empty String');
            break;
        case isNaN(+numOrStr):
            alert('number is Ba_NaN');
            break;
        default:
            alert('OK!');
            break;
    }
});

//tab hm7
window.onload = function () {
    // Task 1 Вивести на сторінку в один рядок через кому числа від 10 до 20
    let task1Result = '';
    for (let i = 10; i <= 20; i++) {
        task1Result += `${i}, `;
    }
    document.getElementById('hm7t1result').value = task1Result.slice(0, -2);

    // Task 2 Вивести квадрати чисел від 10 до 20
    let task2Result = '';
    for (let i = 10; i <= 20; i++) {
        task2Result += `${Math.pow(i, 2)}, `;
    }
    document.getElementById('hm7t2result').value = task2Result.slice(0, -2);

    // Task 3 Вивести таблицю множення на 7
    let task3Result = '';
    for (let i = 1; i <= 10; i++) {
        task3Result += `7 * ${i} = ${7 * i} ` + '\n';
    }
    document.getElementById('hm7t3result').value = task3Result.slice(0, -2);

    // Task 4 Знайти суму всіх цілих чисел від 1 до 15
    let task4Result = 0;
    for (let i = 1; i <= 15; i++) {
        task4Result += i;
    }
    document.getElementById('hm7t4result').value = task4Result;

    // Task 5 Знайти добуток усіх цілих чисел від 15 до 35
    let task5Result = 1;
    for (let i = 15; i <= 35; i++) {
        task5Result *= i;
    }
    document.getElementById('hm7t5result').value = task5Result;

    // Task 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500
    let task6Sum = 0;
    for (let i = 1; i < 500; i++) {
        task6Sum += i;
    }
    document.getElementById('hm7t6result').value = task6Sum / 499;

    // Task 7 Вивести суму лише парних чисел у діапазоні від 30 до 80
    let task7Sum = 0;
    for (let i = 30; i <= 80; i++) {
        if (i % 2 == 0) {
            task7Sum += i;
        }
    }
    document.getElementById('hm7t7result').value = task7Sum;

    // Task 8 Вивести всі числа в діапазоні від 100 до 200
    let task8Result = '';
    for (let i = 100; i <= 200; i++) {
        task8Result += `${i}, `;
        if ((i + 1) % 20 == 0) {
            task8Result += '\n';
        }
    }
    document.getElementById('hm7t8result').value = task8Result.slice(0, -2);

    // Task 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники
    document.getElementById('hm7t9button').onclick = function () {
        let num = document.getElementById('hm7t9number').value;
        let divisors = '';
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                divisors += `${i}, `;
            }
        }
        document.getElementById('hm7t9result').value = divisors.slice(0, -2);
    };

    // Task 10 Визначити кількість його парних дільників
    document.getElementById('hm7t10button').onclick = function () {
        let num = document.getElementById('hm7t10number').value;
        let evenDivisorsCount = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0 && i % 2 == 0) {
                evenDivisorsCount++;
            }
        }
        document.getElementById('hm7t10result').value = evenDivisorsCount;
    };

    // Task 11 Знайти суму його парних дільників
    document.getElementById('hm7t11button').onclick = function () {
        let num = document.getElementById('hm7t11number').value;
        let evenDivisorsSum = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0 && i % 2 == 0) {
                evenDivisorsSum += i;
            }
        }
        document.getElementById('hm7t11result').value = evenDivisorsSum;
    };


    // Task 12 Надрукувати повну таблицю множення від 1 до 10
    let multiplicationTable = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            multiplicationTable += `${j}*${i}=${j * i}\t`;
        }
        multiplicationTable += '\n';
    }
    document.getElementById('hm7t12result').value = multiplicationTable;

    // Task 8 1 Вивести на сторінку в один рядок через кому числа від 10 до 20
    let hm8t1result = '';
    for (let i = 40; i <= 60; i++) {
        hm8t1result += `${i / 2}, `;
        if ((i + 1) % 10 === 0) {
            hm8t1result += '\n';
        }
    }
    document.getElementById('hm8t1result').value = hm8t1result.slice(0, -2);

    // Task 8  2 Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
    let hm8t2result = '';
    for (let i = 10; i <= 100; i += 10) {
        let grivnaValue = (i * 40).toLocaleString();
        hm8t2result += `${i} долларів коштуе ${grivnaValue} гривень ` + '\n';

    }
    document.getElementById('hm8t2result').value = hm8t2result.slice(0, -2);

};


//tab hm8


// Task 3 Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
document.getElementById('hm8t3input').addEventListener('input', function (e) {
    e.preventDefault();
    let N = parseFloat(document.getElementById('hm8t3input').value);
    let hm8t3result = '';
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            hm8t3result += i + ', ';
        }
    }
    document.getElementById('hm8t3result').value = hm8t3result.slice(0, -2);
});

// Task 4 Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
document.getElementById('hm8t4input').addEventListener('input', function (e) {
    e.preventDefault();
    let num = parseFloat(document.getElementById('hm8t4input').value);
    let isPrime = true;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById('hm8t4result').value = isPrime && num > 1 ? num + ' просте.' : num + ' не просте';
});

// Task 5 Дано кілька. Визначити, чи можна одержати це число шляхом зведення числа 3 деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
document.getElementById('hm8t5button').addEventListener('click', function (e) {
    e.preventDefault();
    let n1 = parseFloat(document.getElementById('hm8t5_1input').value);
    let n2 = parseFloat(document.getElementById('hm8t5_2input').value);


    while (n2 > 1 && n2 % n1 === 0) {
        n2 /= n1;
    }

    document.getElementById('hm8t5result').value = n2 === 1;
});
