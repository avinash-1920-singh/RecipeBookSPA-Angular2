import { NgModule } from "@angular/core";
import {RecipeComponent} from './recipe.component';
import {RecipeStatartComponent} from './recipe-statart/recipe-statart.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component'
import {RecipeEdeditComponent} from './recipe-ededit/recipe-ededit.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common/";
import {RecipesRoutingmodule} from './recipes-routing.module'
import {SharedModule} from '../shared/shared.module'
@NgModule({
    declarations:[
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeStatartComponent,
        RecipeEdeditComponent,
        
    ],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingmodule,
        SharedModule
    ]
})
export class RecipeModule{

}