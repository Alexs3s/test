let daitas=new Date();
let years=daitas.getFullYear();//год
let dais=daitas.getDay();//день недели
let mont=daitas.getMonth();//месяц

let days2=[
  'Вс',
  'Пн',
  'Вт',
  'Ср',
  'Чет',
  'Пят',
  'Суб'
];
let ned=days2[dais];
let mont2=[
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
let nedmon=mont2[mont];
function высокосный(){let t=years%4; if(t=0)return true;};
let b=nedmon;
console.log(высокосный())
