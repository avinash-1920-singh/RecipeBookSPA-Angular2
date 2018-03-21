import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import {FormGroup} from '@angular/forms';
import { FormControl,FormArray ,Validators} from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.module';



@Component({
  selector: 'app-recipe-ededit',
  templateUrl: './recipe-ededit.component.html',
  styleUrls: ['./recipe-ededit.component.css']
})
export class RecipeEdeditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private recipeSerevice:RecipeService
  ,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
      console.log(this.editMode);
      this.initForm();
      }
    )
  }
  //onDeleteRecipe(){
   // this.recipeService.onDeleteRecipe(this.id);
  //}
  onSubmit(){
    const newRecipe=new Recipe(this.recipeForm.value['name'],
    this.recipeForm.value['description'],
  this.recipeForm.value['imagePath'],
   this.recipeForm.value['ingredient'])
    if(this.editMode){
      this.recipeSerevice.updateRecipe(this.id,newRecipe)
    }
    else{
      this.recipeSerevice.addRecipe(newRecipe)
    }
    this.onCancel();
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredient')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }
  onCancel(){
  this.router.navigate(['../'],{relativeTo:this.route});
  }
  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredient=new FormArray([]);
    FormGroup
    if (this.editMode){
      const recipe=this.recipeSerevice.getRecipe(this.id);
      recipeName=recipe.name;   
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if (recipe['ingredients']){
        for (let ingredient of recipe.ingredients){
          recipeIngredient.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,
              [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredient':recipeIngredient
    })
  }

}
