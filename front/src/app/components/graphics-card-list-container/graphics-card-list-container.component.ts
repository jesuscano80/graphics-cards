import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.scss']
})
export class GraphicsCardListContainerComponent implements OnInit {
public card:Cards= new Cards("","",0,"","","");
public cards: Cards[]= [];
public showButton= false;
private scrollHeight= 500;
  constructor(@Inject(DOCUMENT) private document: Document,private cardsService:CardsService) { }

  ngOnInit(): void {
    this.cardsService.getCards()
    .subscribe((data:any)=>{
      this.cards=data.data;
    })
  }
@HostListener('window:scroll')
onWindowScroll():void{
  const yOffSet= window.pageYOffset;
  const scrollTop= this.document.documentElement.scrollTop;
  this.showButton= (yOffSet || scrollTop) > this.scrollHeight;
}

onScrollTop():void{
  this.document.documentElement.scrollTop=0;
}
}