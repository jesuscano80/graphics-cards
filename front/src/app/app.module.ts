import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphicsCardListContainerComponent } from './components/graphics-card-list-container/graphics-card-list-container.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { FormsModule } from '@angular/forms';
import { GraphicsCardDetailsComponent } from './components/graphics-card-details/graphics-card-details.component';
import { AlertnotificationComponent } from './modals/alertnotification/alertnotification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraphicsCardListContainerComponent,
    GraphicsCardDetailsComponent,
    AlertnotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpinnerModule,
    InfiniteScrollModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
