import { Component, OnInit, OnChanges } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image-gallary',
  templateUrl: './image-gallary.component.html',
  styleUrls: ['./image-gallary.component.css']
})
export class ImageGallaryComponent implements OnChanges  {
  

  images:any[];    
  filterBy?: string = 'all'    
  allImages:any[] = [];    
    
  constructor(private imageService: ImagesService) {    
    this.allImages = this.imageService.getImages();    
  }   
   
  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }

}
