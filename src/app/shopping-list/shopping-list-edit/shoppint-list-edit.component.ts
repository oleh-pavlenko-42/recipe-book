import { Component, computed, inject, input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.scss',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class ShoppingListEditComponent {
  private shoppingListService = inject(ShoppingListService);

  ingredientId = input<string>();

  ingredient = computed(() => {
    if (this.ingredientId()) {
      const ingredientId = this.ingredientId();
      return this.shoppingListService.getIngredient(ingredientId as string);
    }
    return null;
  });

  onSubmit(form: NgForm) {
    if (form.valid) {
      const id = Math.random().toString();
      const name = form.value['name'];
      const amount = form.value['amount'];
      const ingredient = new Ingredient(id, name, amount);
      this.shoppingListService.addIngredient(ingredient);
      form.reset();
    }
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
