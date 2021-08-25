import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsCardDetailsComponent } from './components/graphics-card-details/graphics-card-details.component';
import { GraphicsCardListContainerComponent } from './components/graphics-card-list-container/graphics-card-list-container.component';

const routes: Routes = [
  {path:"cards", component: GraphicsCardListContainerComponent},
  {path:"details", component: GraphicsCardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
