/*
Создайте массив чисел и найдите сумму всех элементов.
*/


function arrsum(array){
var sum = 0;
if (typeof sum == 'string') {
  return 'проверь значения';
}
else {
  for(var i = 0; i < array.length; i++){
      sum += array[i];
      }
  console.log(sum);
  }
}
