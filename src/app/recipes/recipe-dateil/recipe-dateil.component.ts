import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-dateil',
  templateUrl: './recipe-dateil.component.html',
  styleUrls: ['./recipe-dateil.component.css']
})
export class RecipeDateilComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  
}
