import { Component } from '@angular/core';
import { SocialsComponent } from "../socials/socials.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SocialsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
