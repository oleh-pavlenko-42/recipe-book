import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class NewRecipeComponent {
  private recipesService = inject(RecipesService);

  ingredientsArray: { name: string }[] = [];
  trustedHtml: any;

  addIngredient(ingredientsInput: HTMLInputElement) {
    if (ingredientsInput.value.trim() !== '')
      this.ingredientsArray.push({ name: ingredientsInput.value });
    ingredientsInput.value = '';
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const description = form.value['description'];
    const ingredients = this.ingredientsArray.map(
      (ingredient, index) =>
        new Ingredient(index.toString(), ingredient.name, 1)
    );
    const recipe = new Recipe(
      Math.random().toString(),
      name,
      description,
      '',
      ingredients
    );
    this.recipesService.addRecipe(recipe);
    form.reset();
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
