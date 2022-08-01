import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sucess-modal',
  templateUrl: './sucess-modal.component.html',
  styleUrls: ['./sucess-modal.component.css']
})
export class SucessModal implements OnInit {

  constructor(public dialogRef: MatDialogRef<SucessModal>) { }

  ngOnInit(): void {
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
