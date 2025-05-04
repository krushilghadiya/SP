import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  renderer!: Renderer2;

  companyName = 'Shyam Pharma';
  logoUrl = 'assets/img/logo/i.png';
  preloader = 'assets/img/logo/i.png';
  mobileNumber = '+44 7771 610280';
  indMobileNumber = '+91 9712878800';
  address = '27, Saraswati Society Under Pramukh Swami Bridge, Behind Ashwani Kumar Police Station. 395008';
  email = 'info@shyaampharma.com';
  instagramLink = 'https://www.instagram.com/shyam.pharma/'
  companyMission = 'To deliver high-quality, accessible pharmaceuticals globally, enhancing healthcare through trusted partnerships and innovation.'
  certificate = [
    {
      name: 'GST',
      image: 'GST.jpg'
    },
    {
      name: 'MSME',
      image: 'MSME.jpg'
    },
  ]
  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  sendEmail(data: any): void {
    emailjs.send("service_1j8p9d4", "template_0vo9c3k", {
      ...data
    });
  }


  callPreloader(): void {
    setTimeout(() => {
      const preloader = this.document.getElementById('preloadertp');
      if (preloader) {
        this.renderer.setStyle(preloader, 'transition', 'opacity 0.5s');
        this.renderer.setStyle(preloader, 'opacity', '0');
        setTimeout(() => {
          this.renderer.setStyle(preloader, 'display', 'none');
        }, 350); // Match the transition time
      }
      this.renderer.setStyle(this.document.body, 'overflow', 'visible');
    }, 350);
  }

}
