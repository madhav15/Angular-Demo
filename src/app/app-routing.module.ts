import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGallaryComponent } from './image-gallary/image-gallary.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { HomeComponent } from './home/home.component';
import { OrderConfirmPanelComponent } from './order-confirm-panel/order-confirm-panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ImageGallaryComponent },
  { path: 'product-details/:id', component: ImageDetailsComponent },
  { path: 'order-confirm' , component : OrderConfirmPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
