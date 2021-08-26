import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertnotification',
  templateUrl: './alertnotification.component.html',
  styleUrls: ['./alertnotification.component.scss']
})
export class AlertnotificationComponent implements OnInit {
  public message = '';
  constructor() { }

  ngOnInit(): void {
  }

}
