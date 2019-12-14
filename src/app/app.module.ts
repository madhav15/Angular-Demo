import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ImageGallaryComponent } from "./image-gallary/image-gallary.component";
import { ImageDetailsComponent } from "./image-details/image-details.component";
import { FilterimagesPipe } from "./filterimages.pipe";
import { ImagesService } from "./images.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderModalComponent } from "./shared/components/modals/OrderModal/OrderModal.component";
import { ModalService } from "./shared/components/modals/modal.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ImageGallaryComponent,
    ImageDetailsComponent,
    OrderModalComponent,
    FilterimagesPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ImagesService, FilterimagesPipe, ModalService],
  bootstrap: [AppComponent],
  entryComponents: [OrderModalComponent]
})
export class AppModule {}
