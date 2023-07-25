import { Injectable } from '@angular/core';

//Creating a modal to hold our values
interface IModal{
id:string;
visible:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
   private modals : IModal[]=[]

  constructor() {}
  //creating a function to register modal
  register(id:string){
    //Push the Object into the Model array
      this.modals.push({
        id,
        //set the visibilty to false hiding the model
        visible:false
      });
  }
   
  //We want to open the model and check the id is equal to the id passed
  isModalOpen(id:string) : boolean{
    //the  find function will loop and compare ID
    //use optional chaining
    return Boolean(this.modals.find(element => element.id ===id)?.visible)
  }

toggleModal(id:string){
 //Check if the modal exist in the array
  const modal = this.modals.find(element => element.id ===id)
 //if the modal is found invert the value
 if(modal){
 modal.visible=!modal.visible
 } 
}

//Unregister a modal
unregister(id:string){
  this.modals = this.modals.filter(
    element => element.id==id
  )
}

}
