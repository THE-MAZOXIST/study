/*
Написать функцию кторая принимает
в себя список обносвязный, и элемент
который надо в нем найти и возвращает
ссылку на этот элемент
*/


function findElementInLinkedList(head, target) {
  let current = head;

  while (current !== null) {
    if (current.data === target) {
      return current;
    }
    current = current.next;
  }

  return null; // Если элемент не найден, возвращаем null
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

let targetElement = findElementInLinkedList(list_family, "roma");
console.log(targetElement);
