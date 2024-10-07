import { Component, effect, inject, input } from '@angular/core';
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
  name: string = '';
  amount: number | null = null;

  constructor() {
    effect(() => {
      if (this.ingredientId()) {
        const ingredientId = this.ingredientId();
        const ingredient = this.shoppingListService.getIngredient(
          ingredientId as string
        );
        if (ingredient) {
          this.name = ingredient.name;
          this.amount = ingredient.amount;
        }
      }
    });
  }

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
