import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ImageGallaryComponent } from "./image-gallary/image-gallary.component";
import { ImageDetailsComponent } from "./image-details/image-details.component";
import { FilterimagesPipe } from "./filterimages.pipe";
import { ImagesService } from "./images.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderModalComponent } from "./OrderModal/OrderModal.component";
import { ModalService } from "./modal.service";
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { OrderConfirmPanelComponent } from './order-confirm-panel/order-confirm-panel.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ImageGallaryComponent,
    ImageDetailsComponent,
    OrderModalComponent,
    FilterimagesPipe,
    HomeComponent,
    BusinessComponent,
    OrderConfirmPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [ImagesService, FilterimagesPipe, ModalService, ],
  bootstrap: [AppComponent],
  entryComponents: [OrderModalComponent]
})
export class AppModule {}
