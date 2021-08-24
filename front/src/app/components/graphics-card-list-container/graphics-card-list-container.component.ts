import { Component, OnInit } from '@angular/core';
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
  constructor(private cardsService:CardsService) { }

  ngOnInit(): void {
    this.cardsService.getCards()
    .subscribe((data:any)=>{
      this.cards=data.data;
    })
  }


}
