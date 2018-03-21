
import {NgModule} from '@angular/core'
import {Routes,RouterModule,PreloadAllModules} from '@angular/router'
import {RecipeComponent} from './recipe/recipe.component'
import {ShoppingListComponent} from './shopping-list/shopping-list.component'
import { RecipeStatartComponent } from './recipe/recipe-statart/recipe-statart.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import {RecipeEdeditComponent} from './recipe/recipe-ededit/recipe-ededit.component'
import { SignupComponent } from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service'
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'recipes',loadChildren:'./recipe/recipes.module#RecipeModule'},
{path:'shopping-list',component:ShoppingListComponent},
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent}


];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{

}