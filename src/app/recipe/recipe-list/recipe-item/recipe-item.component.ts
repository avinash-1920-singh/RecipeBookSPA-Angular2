import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from '../../recipe.module';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() index:Number
  //constructor(private recipeservice:RecipeService) { }

  ngOnInit() {
  }

 /* onSelected(){
   this.recipeservice.recipeSelected.emit(this.recipe);
  }*/
}
