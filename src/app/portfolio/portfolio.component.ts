import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  modalVisible: boolean = false;
  modalImageSrc: string = '';

  openModal(imagePath: string) {
    console.log('Image clicked:', imagePath);
   
    this.modalImageSrc = imagePath;
    this.modalVisible = true;
  }

  
}
