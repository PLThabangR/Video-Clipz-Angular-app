import { Component, OnInit,OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit,OnDestroy{
  constructor(public modal :ModalService){ }
  ngOnDestroy(): void {
   this.modal.unregister('auth')
  }
  ngOnInit(): void {
    //Register a new model with the service
    this.modal.register('auth')
  

  }
 
  

}
