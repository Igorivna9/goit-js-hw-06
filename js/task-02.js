const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

const $ingredients = ingredients.map(
  newIngredient => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = newIngredient;
    console.log(ingredientsItem);
    ingredientsItem.classList.add('item');
    return ingredientsItem;
  });

ingredientsList.append(...$ingredients);
