import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute,Params,Router} from '@angular/router'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 // @Input()recipe:Recipe
 recipe:Recipe;
 id:number;

  constructor(private recipeService:RecipeService,private route:ActivatedRoute
  ,private router:Router){ }

  ngOnInit() {
    //const id=this.route.snapshot.params['id']
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    )


  }
  onAddToshoppingList(){
    this.recipeService.addRecipeToShoppingList(this.recipe.ingredients);

  }
  onDeleteRecipe(){
    this.recipeService.DeleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route});
  //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }
  
}
