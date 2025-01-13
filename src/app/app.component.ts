import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from "./services/services.component";
import { HeaderComponent } from "./header/header.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AboutComponent } from "./about/about.component";
import { PricesComponent } from "./prices/prices.component";
import { TOSComponent } from "./tos/tos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServicesComponent, HeaderComponent, GalleryComponent, AboutComponent, PricesComponent, TOSComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GeechiisPortfolio';
}
