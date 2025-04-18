import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  logoUrl = this.sharedService.logoUrl;
  companyName = this.sharedService.companyName;
  mobileNumber = this.sharedService.mobileNumber
  indMobileNumber = this.sharedService.indMobileNumber
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  emailSub = '';
  contactForm = new FormGroup({
    message: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    number: new FormControl(''),
    website: new FormControl(''),
  });

  constructor(private sharedService: SharedService) {
    const file = ["assets/js/main.js", "assets/js/swiper-bundle.js"]
    for (let i = 0; i < file.length; i++) {
      const node = document.createElement('script');
      node.src = file[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.sharedService.sendEmail(this.contactForm.value)
    this.contactForm.reset();
  }

  sub(): void {
    if (this.emailSub) {
      this.sharedService.sendEmail({ email: this.emailSub })
      this.emailSub = ''
    }
  }
}
