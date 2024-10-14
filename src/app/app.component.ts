import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PwaService } from './services/pwa/pwa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private pwaService: PwaService) {}

  title = 'pwa';
}
