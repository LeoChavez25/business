import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-received-messages',
  templateUrl: './received-messages.component.html',
  styleUrls: ['./received-messages.component.css']
})
export class ReceivedMessagesComponent implements OnInit {

  messageForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private http: HttpClientModule,
  ) { }

  ngOnInit() {
    this.messageForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      subject: ['',[Validators.required]],
      message: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(200)]],
    })
  }

}
