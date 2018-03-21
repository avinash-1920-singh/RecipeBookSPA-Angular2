import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {RecipeService} from '../recipe/recipe.service'
import { Response } from '@angular/http';
import { Recipe } from '../recipe/recipe.module';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class DataStorageService{
constructor(private http:Http,private recipeService:RecipeService
,private authService:AuthService){}

storeRecipe(){
    const token=this.authService.getToken();
 return this.http.put('https://avinash-ng-http.firebaseio.com/recipes.json?auth='+token,
 this.recipeService.getRecipes())
}
getRecipe(){
    const token=this.authService.getToken();
    this.http.get('https://avinash-ng-http.firebaseio.com/recipes.json?auth='+token)
    .subscribe(
        (response:Response)=>{
            //console.log(response);
           const recipes:Recipe[]=response.json();
          this.recipeService.setRecipes(recipes);
        }

    );

}
}