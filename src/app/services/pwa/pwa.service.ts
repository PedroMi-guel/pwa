import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  deferredPrompt: any;

  constructor() {
    window.addEventListener('beforeinstallprompt', (event) => {
      //localStorage.setItem('installed', JSON.stringify(false))
      event.preventDefault();
      this.deferredPrompt = event;
    });

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    if (isStandalone) {
      localStorage.setItem('installed', JSON.stringify(true));
    } else {
      localStorage.setItem('installed', JSON.stringify(false));
    }
  }

  getInstallStatus():boolean{
    let installed = JSON.parse(localStorage.getItem('installed')  || 'false') || false;

    console.log(installed)

    return installed;
  }

  promptInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt = null;
      //localStorage.setItem('installed', JSON.stringify(true));
    }
  }
}
