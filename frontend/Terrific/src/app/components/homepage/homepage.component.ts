import { Component } from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SlideshowComponent,NavbarComponent,FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  title = "welcome"

}
