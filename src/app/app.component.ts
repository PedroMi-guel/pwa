import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  deferredPrompt:any;

  constructor() {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault(); // Evita que el navegador muestre el prompt automáticamente
      this.deferredPrompt = event; // Guarda la referencia al evento para usarla más tarde
    });
  }


  title = 'pwa';

  install(){
    this.deferredPrompt.prompt();
    this.deferredPrompt = null;
  }
}
