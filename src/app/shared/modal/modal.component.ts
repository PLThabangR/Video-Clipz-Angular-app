import { Component, Input,ElementRef, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  @Input() modalId=''
  constructor(public modal :ModalService,public el:ElementRef){}
  ngOnInit(): void {
 document.body.appendChild(this.el.nativeElement)
  }
  //the function close the modal
  closeModal(){
    
    this.modal.toggleModal(this.modalId)
  }


}
