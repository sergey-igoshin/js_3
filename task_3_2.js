/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

function countBasketPrice(basket) {
  let sum = 0, quantity = 0, order = '', c = '', total; 
  const newLine = '\n', o = '**************************************', cur = ' ' + '₽', apieces =  ' ' + 'ед.';

  for (let item of basket) {
    total = item.price * item.count;
    sum += total;
    quantity += item.count;
    order += item.title + whitespace(item.title, 'title') + item.count + apieces + whitespace(String(total), 'amount') + total + cur + newLine;
  }

  // Оформляем корзину
  if (quantity < 1) {
    c += o + newLine;
    c += 'Корзина пустая';
    c += newLine + o;
    return c;
  }
  c += o + newLine;
  c += 'Ваш заказ:';
  c += newLine + o + newLine;
  c += order;
  c += o + newLine;
  c += 'Всего товаров: ' + quantity + apieces;
  c += newLine;
  c += 'На сумму: ' + sum + cur;

  return c;
}

function whitespace(e, action) {
  let c = '', count;

  switch(action){
    case 'title': count = (16 - e.length) * 2; break;
    case 'amount': count = (8 - e.length) * 2; break;
  }

  for (let i = 0; i < count; i++) {
    c += ' ';
  }
  return c;
}

const basket = [
  {
    title: 'Asus',
    price: 1500,
    count: 2,
  },
  {
    title: 'Lenovo',
    price: 2000,
    count: 3,
  },
  {
    title: 'Epson',
    price: 3000,
    count: 5,
  },
];

alert(countBasketPrice(basket));
