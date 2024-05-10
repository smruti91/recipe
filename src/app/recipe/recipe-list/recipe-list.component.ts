import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('Chicken','Chicken Tandoor','https://hips.hearstapps.com/hmg-prod/images/dutch-oven-roast-chicken-recipe-2-1664219307.jpg?crop=0.502xw:1.00xh;0.256xw,0&resize=1200:*'),
    new Recipe('Paneer','Butter Pnneer','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2FiGrxaiBd3GgFArMVc3TSH3K40MLT1l39PY0YXHtg&s'),
  ]
}
