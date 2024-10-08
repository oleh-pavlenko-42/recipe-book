import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipePlaceholderComponent } from './recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shoppint-list-edit.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipePlaceholderComponent },
      { path: 'new', component: NewRecipeComponent },
      { path: ':id', component: RecipeDetailComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
      { path: '', component: ShoppingListEditComponent },
      { path: ':ingredientId/edit', component: ShoppingListEditComponent },
    ],
  },
];
