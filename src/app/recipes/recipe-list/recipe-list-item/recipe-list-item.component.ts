import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Recipe } from '../../recipe.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-list-item',
  standalone: true,
  imports: [MatCardModule, RouterLink, RouterLinkActive],
  templateUrl: './recipe-list-item.component.html',
  styleUrl: './recipe-list-item.component.scss',
})
export class RecipeListItemComponent {
  recipe = input.required<Recipe>();
}
