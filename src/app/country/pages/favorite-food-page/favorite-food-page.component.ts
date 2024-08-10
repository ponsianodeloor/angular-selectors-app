import { Component } from '@angular/core';
import {FoodInterface} from "../../interfaces/Food.interface";

@Component({
  selector: 'app-favorite-food-page',
  templateUrl: './favorite-food-page.component.html',
  styleUrl: './favorite-food-page.component.css'
})
export class FavoriteFoodPageComponent {

  foodSelected: string = '';

  foods: FoodInterface[] = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'tacos', viewValue: 'Tacos' },
  ];

}
