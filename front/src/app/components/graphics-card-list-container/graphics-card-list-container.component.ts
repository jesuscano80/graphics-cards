import { DOCUMENT } from '@angular/common';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardListContainerComponent implements OnInit {
public showButton= false;
private scrollHeight= 400;
private counter:number=10;
  constructor(@Inject(DOCUMENT) private document: Document,public cardsService:CardsService, private router:Router) { }

  ngOnInit(): void {
    this.cardsService.getCardsbyPage(this.counter).subscribe((data:any)=>{
      this.cardsService.cards=data.data;
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

onScrollDown():void{
  this.counter=this.counter+10;
  this.cardsService.getCardsbyPage(this.counter).subscribe((data:any)=>{
    this.cardsService.cards=data.data;

  })
}

moreData(id:string){
  this.cardsService.getById(id).subscribe((data:any)=>{
    this.cardsService.details=true;
    this.cardsService.selected=[data.data];
    this.router.navigate(["/details"]);

  })
}

}