import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
Ingredient
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] =[
    new Ingredient('Chicken',1),
    new Ingredient('Paneer',500)
  ];

}
