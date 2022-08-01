import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModal implements OnInit {

  constructor(public dialogRef: MatDialogRef<ErrorModal>) { }

  ngOnInit(): void {
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
