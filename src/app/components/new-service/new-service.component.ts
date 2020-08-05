import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {

  serviceForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private http:HttpClientModule,
  ) { }

  ngOnInit() {
    this.serviceForm = this.fb.group({
      service: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]],
      price: ['',[Validators.required]],
    });
  }

  addService(){
    alert("Service successfully added");
    console.log(this.serviceForm);
  }

}
