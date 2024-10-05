import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      '1',
      'Hamburger',
      'A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. The patties are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis with condiments such as ketchup, mustard, mayonnaise, relish or a "special sauce", often a variation of Thousand Island dressing, and are frequently placed on sesame seed buns. A hamburger patty topped with cheese is called a cheeseburger. Under some definitions, and in some cultures, a burger is considered a sandwich.',
      'images/hamburger.jpg'
    ),
    new Recipe(
      '2',
      'French Fries',
      'French fries or chips are deep-fried potatoes of disputed origin from Belgium or France. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer. Pre-cut, blanched, and frozen russet potatoes are widely used, and sometimes baked in a regular or convection oven; air fryers are small convection ovens marketed for frying potatoes.',
      'images/french_fries.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: string) {
    return this.recipes.find((recipe) => recipe.id === id);
  }
}
