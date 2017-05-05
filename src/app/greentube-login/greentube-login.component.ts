import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'greentube-login',
  templateUrl: './greentube-login.component.html',
  styleUrls: ['./greentube-login.component.css'],
})
export class GreentubeLoginComponent {
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(vcr);
  }
  onSubmit(){
    this.toastr.success('Login succesful!!!');
  }
}