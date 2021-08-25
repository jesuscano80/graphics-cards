import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-graphics-card-details',
  templateUrl: './graphics-card-details.component.html',
  styleUrls: ['./graphics-card-details.component.scss']
})
export class GraphicsCardDetailsComponent implements OnInit {

  constructor(public cardService: CardsService) { }

  ngOnInit(): void {
    
  }

}
