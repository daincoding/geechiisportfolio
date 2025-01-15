import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = ["Commissions are currently: CLOSED", "VGEN COMM: CLOSED", "Waitlist: CLOSED", "TrelloBoard"];

  getRandomRotation() {
    let randomVal = (Math.random() * 30) - 15;
    return `rotate(${randomVal}deg)`;
  }
}
