import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('1', 'Meat', 1),
    new Ingredient('2', 'Beef', 1),
    new Ingredient('3', 'Bun', 2),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredient(id: string) {
    return this.ingredients.find((ingredient) => ingredient.id === id);
  }
}
