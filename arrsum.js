/*
Создайте массив чисел и найдите сумму всех элементов.
*/


function arrsum(array){
var sum = 0;

  for(var i = 0; i < array.length; i++){
      sum += array[i];
      }
      if (typeof sum == 'string') {
        return 'проверь значения';
      } else {
        return sum;
      }
}
