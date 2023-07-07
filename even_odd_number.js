/*
Напишите программу, которая определяет, является ли число четным или нечетным.
*/

function even(x){
  if (typeof x == 'string') {
    return 'проверь значения';
  }
   if(Number.isInteger(x) == true){return x % 2 == 0}else{return undefined}
}
