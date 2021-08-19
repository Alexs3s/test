// прокрутка
//доступная высота и шырина окна
//1. Получаем обьект окна броузера
let wind=document.documentElement;
//2.Получаем шырину без прокрутки
let windWidh=wind.clientWidth;
// 3.Получаем высоту
let windHeighet=wind.clientHeight;
console.log(windWidh,windHeighet )