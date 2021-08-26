import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertnotificationComponent } from 'src/app/modals/alertnotification/alertnotification.component';
import { CardsService } from 'src/app/services/cards.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
public word: string="";
  constructor(private cardsSvc:CardsService, private router:Router, private matDialog:MatDialog) { }

  ngOnInit(): void {
    if(!this.cardsSvc.details){
    this.router.navigate(["/cards"]);
  }
  }

  search(){
  this.cardsSvc.searchCard(this.word)
  .subscribe((data:any)=>{

    if(data.data.length==0){
      this.alertModal("not found!, try again!");
    }
    else{
    this.cardsSvc.cards=data.data;
    }
  })
  }
  onKey(event:any){
    this.word= event.target.value;
  }
  public alertModal(message: string): void {
    const dialogRef = this.matDialog.open(AlertnotificationComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.componentInstance.message = message;
    dialogRef.afterClosed().subscribe();
}

  backToMenu(){
    this.cardsSvc.details=false;
    this.router.navigate(["/cards"]);
  }

}
