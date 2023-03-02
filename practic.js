// //Задача 2
// При натисканні на кнопку "SWAP ME" виконується обмін змісту між двома інпутами.
// Можна нажимати на неї декілька разів або вручну змінити вміст інпутів. */
// //

// const btnRef = document.querySelector('#swapButton');
// const inputLeftRef = document.querySelector('[data-type = "left"]');
// const inputRightRef = document.querySelector('[data-type="right"]');

// btnRef.addEventListener('click', onBtnClick);

// function onBtnClick(event) {
//     const akFef = inputLeftRef.value;
//     inputLeftRef.value = inputRightRef.value;
//     inputRightRef.value = akFef;
// }

/*
Задача 3
Кнопка "Hide" ховає текст (замість літер - зірочки) і заміняє назву кнопки на
"Show", при повторному натисканні текст знову стає доступний (замість зірочок - літери) 
і кнопка приймає початковий вигляд.
*/

// const inputRef = document.querySelector('[data-target="passwordInput"]');
// const btnInput = document.querySelector('#passwordButton');

// btnInput.addEventListener('click', onBtnClick);

// function onBtnClick(event) {
//     if (inputRef.type === `text`) {
//         inputRef.type = `password`
//     } else {
//         inputRef.type = `text`
//     }
// }

// Задача 4
// Кнопка "Decrease" робить квадрат меньше на 10 пікселів,
// кпопка "Increase" - більше на 10 пикселів.
// */
// const boxRef = document.querySelector('#box');
// const decreaseRef = document.querySelector('[data-type="decrease"]');
// const increaseRef = document.querySelector('[data-type="increase"]');

// decreaseRef.addEventListener('click', onBtnDcrease);

// function onBtnDcrease (event) {
//     const size = boxRef.offsetWidth;
//     boxRef.style.width = `${size - 10}px`;
//     boxRef.style.height = `${size - 10}px`;
// }

// increaseRef.addEventListener('click', onBtnIncrease);

// function onBtnIncrease (event) {
//     const size = boxRef.offsetWidth;
//     boxRef.style.width = `${size + 10}px`;
//     boxRef.style.height = `${size + 10}px`;
// }

// Задача 6
// По кліку на кнопку "Double" збільшіть значення
// в кожному елементі списку у 2 рази
// */

// const listRef = document.querySelector('.list');
// const listItemsRef = document.querySelectorAll('.listItem');
// const btnRef = document.querySelector('#double');

// btnRef.addEventListener('click', onBtnDouble);

// function onBtnDouble(event) {
//     listItemsRef.forEach(item =>
//         item.textContent *= 2)
// }

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/
const formRef = document.querySelector(".checkboxForm");
const checkboxWrapperRef = document.querySelectorAll(".checkboxWrapper");

formRef.addEventListener("submit", onFormClick);

function onFormClick(event) {
  event.preventDefault();
  checkboxWrapperRef.forEach((item) => {
    if (item.querySelector("input:checked")) {
      item.remove();
    }
  });
}
