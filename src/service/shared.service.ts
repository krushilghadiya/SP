import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  companyName = 'Shyam Pharma';
  logoUrl = 'assets/img/logo/i.png';
  preloader = 'assets/img/logo/i.png';
  mobileNumber = '+44 7771 610280';
  indMobileNumber = '+91 9712878800';
  address = '27, Saraswati Society Under Pramukh Swami Bridge, Behind Ashwani Kumar Police Station. 395008';
  email = 'info@shyaampharma.com';
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
  constructor() { }

  sendEmail(data: any): void {
    emailjs.send("service_1j8p9d4", "template_0vo9c3k", {
      ...data
    });
  }
}
