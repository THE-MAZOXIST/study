/*
Написать функцию которая выводит список всех имен
 в поле "data" заданного списка

writeAllMembers(list) -> ["roma", "max"]
*/
function getAllNames(list) {
  let names = [];
  let current = list;

  while (current) {
    names.push(current.data);
    current = current.next;
  }

  return names;
}

let list_family = {
  data: "max",
  next: {
    data: "roma",
    next: {
      data: "andrey",
      next: null
    }
  }
};

const result = getAllNames(list_family);
console.log(result)
