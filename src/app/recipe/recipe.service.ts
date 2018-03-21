import {Recipe} from './recipe.module'
import { EventEmitter,Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject'
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
  recipesChanged=new Subject<Recipe[]>();
    recipeSelected=new EventEmitter<Recipe>();
   private  recipes:Recipe[]=[
        new Recipe('Tasty schnitzel','it is awesome','../assets/img/800px-Wiener-Schnitzel02.jpg',[
            new Ingredient('Meat',1),
            new Ingredient('French fries',20)
        ]),
        new Recipe('Big Fat Burger','What else you need to say','../assets/img/Hamburger_(black_bg).jpg',[
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])

  
      ];
constructor(private slservice:ShoppingListService){

}
setRecipes(recipes:Recipe[]){
this.recipes=recipes;
this.recipesChanged.next(this.recipes.slice());
}
getRecipes(){
   return this.recipes.slice();
}

getRecipe(index:number){
  return this.recipes[index];
}

addRecipeToShoppingList(ingredients:Ingredient[]){
  this.slservice.addIngredientsFromRecipe(ingredients);
}
addRecipe(recipe:Recipe){
 this.recipes.push(recipe);
}

updateRecipe(index:number,newRecipe:Recipe){
  this.recipes[index]=newRecipe; 

}
DeleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice());
}
}