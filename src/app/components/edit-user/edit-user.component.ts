import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;

  roles : String[] = ['Administrator', 'User'];

  constructor(
    private fb:FormBuilder,
    private http:HttpClientModule,
    public dialogRef: MatDialogRef<EditUserComponent>
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      lastname: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  updateUser(){
    alert("User successfully updated");
    this.closeModal();
    console.log(this.userForm);
  }
  
}
