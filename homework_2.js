//Задача №1

const array = [1, 2, 3, 4, 5, 6, 10, 11, 14, 65, 23 ,53, 33, 'null', 'какая-то строка', 'undefined', 0, 15, 0];

function EvenOddZeroCount(array){
  
  let EvenCount = 0;
  let OddCount = 0;
  let ZeroCount = 0;
  
  array.forEach(function(arrItem) {

    if(typeof arrItem === 'number' && !isNaN(arrItem)) {
      if (arrItem === 0){
        ZeroCount++;
      } else if (arrItem % 2 === 0) {
        EvenCount++;
      } else {
        OddCount++;
      }
  } else if(arrItem === 0){
    ZeroCount++;
  }
  });
  
  console.log('Четных чисел:', EvenCount);
  console.log('Не четных чисел:', OddCount);
  console.log('Нулей:', ZeroCount);
               
}

EvenOddZeroCount(array);

//Задача №2

function isSimple(number) {
  
  if(number > 1000) {
    console.log( 'введены не верные данные, введите число менее 1000' );
    return;
  }
  
  if(number === 0 || number === 1) {
    console.log( number + '-не является простым числом.' );
    return;
  }
  
  for( let i = 2; i <= Math.sqrt(number); i++ ) {
    if ( number % i === 0 ) {
      console.log( number + '-не является простым числом.' );
      return;
    }
  }
  
  console.log( number + '-является простым числом.' );
  
}

isSimple(5);


//Задание №3

function numSum(x) {
  return function(y){
    return x + y;
  };
}

let newNum = numSum(5);
let resultSum = newNum(12);

console.log(resultSum);


//Задание №4

function intNumbers(from, to) {
  
  let start = from;
  const intervalNumb = setInterval(function(){
    console.log(start);
    if (start === to) {
      clearInterval(intervalNumb);
    }
    start++;
  }, 1000);
  
}

intNumbers(10, 16);

//Задание №5

const powNumber = (x, y) => x**y;

console.log(powNumber(2, 3));
console.log(powNumber(5, 2));
console.log(powNumber(6, 4));

