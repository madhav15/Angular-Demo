import { Component, OnInit } from "@angular/core";
import { ImagesService } from "../images.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "../user";
import { ModalService } from "../shared/components/modals/modal.service";

@Component({
  selector: "app-image-details",
  templateUrl: "./image-details.component.html",
  styleUrls: ["./image-details.component.css"]
})
export class ImageDetailsComponent implements OnInit {
  image: any;
  public user: User;

  constructor(
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private modalSerive: ModalService
  ) {}

  ngOnInit() {
    console.log("Hello" + this.route.snapshot.params["id"]);
    this.image = this.imageService.getImage(this.route.snapshot.params["id"]);
    console.log(this.image);
  }

  processForm() {
    console.log("Will send the confirmation");
  }

  back() {
    console.log("back");
  }

  openModal() {
    this.modalSerive.showOrderModal(this.image);
  }
}
