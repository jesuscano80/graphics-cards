import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphicsCardListContainerComponent } from './components/graphics-card-list-container/graphics-card-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraphicsCardListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
