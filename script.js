//Опишите своими словами, как Вы понимаете, что такое Document Object Model (DOM)
// Это структура данных которая описывает все что отрисовывается в браузере со всеми параметрами и деталями.

let arr = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
let arr2 = ['1', '2', '3', 'sea', 'user', 23];

let main = document.getElementById('main');
let unordered = document.createElement('ul');
let listItem = document.createElement('li');

const newLi = val => {
    let l = document.createElement('li');
    l.innerText = `${val}`;
    return l;
}

const mapOverList = array => {
    array.map (el => unordered.appendChild(newLi(el)));
    main.appendChild(unordered);
}

let tim = 10
const clearList = () => {
    if (tim !== 0) {
        document.getElementById('timer').innerText = `Remaining time is: ${tim}`
        tim--
    } else {
        main.removeChild(unordered);
        clearInterval(interval);
        document.getElementById('timer').innerText = 'No time left!'
    }
}


mapOverList(arr);
mapOverList(arr2);

const interval = setInterval(clearList, 1000);




