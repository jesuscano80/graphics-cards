import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
public word: string="";
  constructor(private cardsSvc:CardsService, private router:Router) { }

  ngOnInit(): void {
    if(!this.cardsSvc.details){
    this.router.navigate(["/cards"]);
  }
  }

  search(){
  this.cardsSvc.searchCard(this.word)
  .subscribe((data:any)=>{
    this.cardsSvc.cards=data.data;
  })
  }
  onKey(event:any){
    this.word= event.target.value;
  }

  backToMenu(){
    this.cardsSvc.details=false;
    this.router.navigate(["/cards"]);
  }

}
