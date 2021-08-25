import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/models/form';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public form: Form= new Form("");
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
}
