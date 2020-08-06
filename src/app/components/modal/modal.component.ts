import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ModalComponent>
    ) { }

  ngOnInit() {
  }

  actionFunction() {
    alert("You have logged out");
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
