const categoriesList = document.querySelector('#categories');
const categoriesItem = [...categoriesList.children];
console.log(categoriesItem);
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.map((elem) => {
  const categoriesTitle = elem.querySelector('h2');
  console.log(`Category: ${categoriesTitle.textContent}`);

  const categoryElement = elem.querySelectorAll('li');
  console.log(`Elements: ${categoryElement.length}`);
});
