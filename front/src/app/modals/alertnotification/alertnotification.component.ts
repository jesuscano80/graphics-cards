import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-alertnotification',
  templateUrl: './alertnotification.component.html',
  styleUrls: ['./alertnotification.component.scss']
})
export class AlertnotificationComponent implements OnInit {
  public message = '';
  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.matDialog.closeAll();
  }
}
