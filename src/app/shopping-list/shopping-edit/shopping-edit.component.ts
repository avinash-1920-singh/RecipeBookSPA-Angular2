import { Component, OnInit ,ElementRef,ViewChild,OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
 // @ViewChild('nameInput')nameInputRef:ElementRef;
  //@ViewChild('amountInput')amountInputRef:ElementRef;
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.slService.startedEditing.subscribe(
     (index:number)=>{
       this.editMode=true;
       this.editedItemIndex=index;
       this.editedItem=this.slService.getIngredient(index);
       this.slForm.setValue({
         itemName:this.editedItem.name,
         amount:this.editedItem.amount
       })
     }
    );
  }

  onAddItem(form:NgForm){
    const value=form.value;
    //const ingName=this.nameInputRef.nativeElement.value;
    //const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(value.itemName,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else{
      this.slService.addIngredients(newIngredient);
    }
    this.editMode=false;
    form.reset();
    
    

  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
