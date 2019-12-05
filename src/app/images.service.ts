import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  allImages = [];

  getImages() {
    return this.allImages = this.Imagesdelatils.slice(0);
  }

  getImage(id: number) {
    return this.Imagesdelatils.slice(0).find(Images => Images.id == id)
  }

  Imagesdelatils = [
    { "id": 1, "price": "799", "url": "assets/images/1-ganesh.jpg", "name": "Ganesha Art" },
    { "id": 2, "price": "699", "url": "assets/images/2-swami.jpg", "name": "Swami Samarth Art" },
    { "id": 3, "price": "799", "url": "assets/images/3-chrismas.jpg", "name": "Chrismas Art" },
    { "id": 4, "price": "699", "url": "assets/images/4-diwali.jpg", "name": "Diwali Art" },

    { "id": 5, "price": "749", "url": "assets/images/1-ganesh.jpg", "name": "Ganesha Art" },
    { "id": 6, "price": "749", "url": "assets/images/2-swami.jpg", "name": "Swami Samarth Art" },
    { "id": 7, "price": "749", "url": "assets/images/3-chrismas.jpg", "name": "Chrismas Art" },
    { "id": 8, "price": "800", "url": "assets/images/4-diwali.jpg", "name": "Diwali Art" },

    { "id": 9, "price": "700", "url": "assets/images/1-ganesh.jpg", "name": "Ganesha Art" },
    { "id": 10, "price": "600", "url": "assets/images/2-swami.jpg", "name": "Swami Samarth Art" },
    { "id": 11, "price": "700", "url": "assets/images/3-chrismas.jpg", "name": "Chrismas Art" },
    { "id": 12, "price": "750", "url": "assets/images/4-diwali.jpg", "name": "Diwali Art" },

  ]
}
