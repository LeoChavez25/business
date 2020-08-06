import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';
import { Router, NavigationStart } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'business';

  constructor(
    public matDialog: MatDialog,
  ){}
    // router:Router
    // ) {
    // router.events.forEach((event) => {
    //     if(event instanceof NavigationStart) {
    //         this.isLogin = event.url === "/login";
    //     }
    //   });
    // }

    // isLogin = false;

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "200px";
    dialogConfig.width = "400px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

}

