// Задача 1: Написати функцію, яка повертає найпопулярніші товарні категорії на основі продажів.
// Спочатку фільтруємо товари, які продані більше 5 разів, потім сортуємо їх за кількістю продажів,
// а потім залишаємо тільки унікальні категорії товарів.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort. Для того щоб залишити лише унікальні категорії товарів можна використати конструкцію new Set, або використати метод filter()/indexOf()/forEach()"

function getPopularCategories(products) {
  // 1. Лишаємо товари, проданих більше 5 разів
  const popular = products.filter(function (product) {
    return product.sales > 5;
  });

  // 2. Сортуємо: найбільше продажів іде першим
  popular.sort(function (a, b) {
    return b.sales - a.sales;
  });

  // 3. Беремо з кожного товару тільки категорію
  const categories = popular.map(function (product) {
    return product.category;
  });

  // 4. Лишаємо категорію, тільки якщо це її перша поява
  const unique = categories.filter(function (category, index) {
    return categories.indexOf(category) === index;
  });

  return unique;
}

// Приклад використання:
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']
module.exports = getPopularCategories;