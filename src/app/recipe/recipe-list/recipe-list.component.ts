import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('chicken','chicken tikka','	https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_…T-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg')
  ]
}
