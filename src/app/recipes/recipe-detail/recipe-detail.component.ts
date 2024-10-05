import { Component, computed, inject, input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent {
  id = input<string>();

  private recipesService = inject(RecipesService);

  recipe = computed(() => this.recipesService.getRecipe(this.id() || '1'));
}
