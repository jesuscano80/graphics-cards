import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
isLoading$ = this.SpinnerSvc.isLoading$;
  constructor(private SpinnerSvc: SpinnerService) { }

  ngOnInit(): void {
  }

}
