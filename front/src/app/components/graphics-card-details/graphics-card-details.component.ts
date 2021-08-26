import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-graphics-card-details',
  templateUrl: './graphics-card-details.component.html',
  styleUrls: ['./graphics-card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphicsCardDetailsComponent implements OnInit {

  constructor(public cardService: CardsService, private router:Router) { }

  ngOnInit(): void {
    
  }

  backToMenu(){
    this.cardService.details=false;
    this.router.navigate(["/cards"]);

  }

}
