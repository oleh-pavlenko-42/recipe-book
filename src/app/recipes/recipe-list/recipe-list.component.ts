import { Component, inject, OnInit } from '@angular/core';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeListItemComponent, MatButtonModule, RouterLink],
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
