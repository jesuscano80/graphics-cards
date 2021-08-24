import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
public url="http://localhost:3000/graphics-cards";
  constructor(private http: HttpClient){ 
  }

  getCards():Observable<any>{
    return this.http.get(this.url)
  }

}
