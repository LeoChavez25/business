import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  roles : String[] = ['Administrator', 'User'];

  constructor(
    private fb:FormBuilder,
    private http:HttpClientModule,
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      lastname: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    });
  }

  addUser(){
    alert("User successfully added");
    console.log(this.userForm);
  }

}
