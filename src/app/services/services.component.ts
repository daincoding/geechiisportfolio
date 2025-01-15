import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services = ["Commissions are currently: CLOSED", "VGEN COMM: CLOSED", "Waitlist: CLOSED", "TrelloBoard"];
  servicePosition: string[][] = [];
  currentlyDragging : number | undefined;
  mouseX : number | undefined;
  mouseY : number | undefined;

  ngOnInit() {
      for (let i = 0 ; i < this.services.length; i++) {
        let pos: string[] = [i * (90 / this.services.length) + '%', ((i + 1) % 3) * 33 + '%', this.getRandomRotation() ]
        this.servicePosition.push(pos);
      }
  }

  getRandomRotation() {
    let randomVal = (Math.random() * 30) - 15;
    return `rotate(${randomVal}deg)`;
  }

  startDragging(i: number) {
    this.currentlyDragging = i;
  }

  mouseMove(e: MouseEvent) {
    if (this.currentlyDragging == undefined) { return; }

    this.servicePosition [this.currentlyDragging] [0] = e.pageX - 70 + 'px'
    this.servicePosition[this.currentlyDragging] [1] = e.pageY - 30 + 'px'
  }

  stopDragging(){
    this.currentlyDragging = undefined;
  }
}

  
