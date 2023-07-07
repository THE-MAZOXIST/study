/*
Напишите программу, которая выводит числа от 1 до 10 в консоль.

*/

function to_10(i){
  if (typeof i == 'string') {
    return 'проверь значения';
  }
  while (i <= 10) {
    console.log(i)
    i++
  }
}
