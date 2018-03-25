import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service'
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    //@Output() featureSelected=new EventEmitter<String>();

   // onSelect(feature:string){
        //this.featureSelected.emit(feature);

   // }
   constructor(private datastorageService:DataStorageService,
public authService:AuthService){}
   onSaveData(){
   this.datastorageService.storeRecipe()
   .subscribe(
       (response:Response)=>{
           console.log(response);
       }
   );
   }

   onFetchData(){
       this.datastorageService.getRecipe();
   }
   onLogout(){
       this.authService.logOut();
   }
}