import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  standalone: true,
  imports: [MatCardModule, RouterLink, RouterLinkActive, RouterOutlet],
})
export class ShoppingListComponent implements OnInit {
  private shoppingListService = inject(ShoppingListService);

  ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }
}
