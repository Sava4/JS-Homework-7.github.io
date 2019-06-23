//Опишите своими словами, как Вы понимаете, что такое Document Object Model (DOM)
// Это структура данных которая описывает все что отрисовывается в браузере со всеми параметрами и деталями.

let arr = ['hello', 'world', 'Kiev', 'Kharkiv',['1', '2', '3', 'sea', 'user', 23], 'Odessa', 'Lviv'];
let arr2 = ['1', '2', '3', 'sea', 'user', 23];

let main = document.getElementById('main');

const listFromArray = array => `<ul>${array.map(item => Array.isArray(item) ? listFromArray(item) : `<li>${item}</li>`).join('')}</ul>`;

let tim = 10
const clearList = () => {
    if (tim !== 0) {
        document.getElementById('timer').innerText = `Remaining time is: ${tim}`
        tim--
    } else {
        main.remove();
        clearInterval(interval);
        document.getElementById('timer').innerText = 'No time left!'
    }
}

main.innerHTML = listFromArray(arr);
const interval = setInterval(clearList, 1000);