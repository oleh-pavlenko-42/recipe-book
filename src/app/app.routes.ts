import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipePlaceholderComponent } from './recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipePlaceholderComponent },
      { path: ':id', component: RecipeDetailComponent },
    ],
  },
];
