import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'greentube-login',
  templateUrl: './greentube-login.component.html',
  styleUrls: ['./greentube-login.component.css']
})
export class GreentubeLoginComponent {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(vcr);
  }

  onSubmit(){
    this.toastr.success('Login succesful!!!');
  }

}