import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  image: any

  constructor(private imageService: ImagesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(
      this.route.snapshot.params['id']
    )
  }

}
