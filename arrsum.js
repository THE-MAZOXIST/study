/*
Создайте массив чисел и найдите сумму всех элементов.
*/


function arrsum(array){
var sum = 0;

  for(var i = 0; i < array.length; i++){
      sum += array[i];
      }
  if (typeof sum === 'number') {
      return sum;
      }
  else {
      return 'проверь значения';
    }
}
