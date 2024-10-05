import { Component, inject, OnInit } from '@angular/core';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeListItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  private recipesService = inject(RecipesService);

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}
