import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageGallaryComponent } from './image-gallary/image-gallary.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

const routes: Routes = [
  { path: '', component: ImageGallaryComponent },
  { path: 'details/:id', component: ImageDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
