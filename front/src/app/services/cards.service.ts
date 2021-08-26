import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cards } from "../models/cards";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  public url = "http://localhost:3000/graphics-cards";
  public cards: Cards[] = [];
  public details: boolean = false;
  public selected: Cards[] = [];

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(this.url);
  }

  getCardsbyPage(pageNum: number): any {
    return this.http.get(this.url + "?limite=" + pageNum);
  }

  searchCard(text: string): any {
    return this.http.get(this.url + "?buscar=" + text);
  }

  getById(id: string): any {
    return this.http.get(this.url + "/" + id);
  }
}
