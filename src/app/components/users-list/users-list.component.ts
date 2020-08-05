import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { User } from 'src/app/models/users';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: any = [];

  deleteUser(id:number){
    console.log(id);
  }

  constructor(
    private dataService: ApiserviceService,
    public matDialog: MatDialog
    ) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "edit-user-component";
    dialogConfig.height = "500px";
    dialogConfig.width = "490px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(EditUserComponent, dialogConfig);
  }


  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (data:{}) => {
        this.usersList = data;
        console.log(data);
      }
    );
  }

}