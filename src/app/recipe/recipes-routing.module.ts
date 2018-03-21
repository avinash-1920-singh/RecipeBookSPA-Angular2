import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import {RecipeComponent} from './recipe.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeEdeditComponent} from './recipe-ededit/recipe-ededit.component';
import {RecipeStatartComponent} from './recipe-statart/recipe-statart.component';
import {AuthGuard} from '../auth/auth-guard.service'
const recipesRoute:Routes=[
    {path:'',component:RecipeComponent,children:[
        {path:'',component:RecipeStatartComponent},
        {path:'new',component:RecipeEdeditComponent,canActivate:[AuthGuard]}, 
        {path:':id',component:RecipeDetailsComponent},
        {path:':id/edit',component:RecipeEdeditComponent,canActivate:[AuthGuard]},
          
    ]},
]

@NgModule({
    imports:[
        RouterModule.forChild(recipesRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class RecipesRoutingmodule{

}