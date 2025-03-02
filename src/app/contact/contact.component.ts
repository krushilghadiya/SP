import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  logoUrl = this.sharedService.logoUrl;
  companyName = this.sharedService.companyName;
  mobileNumber = this.sharedService.mobileNumber
  indMobileNumber = this.sharedService.indMobileNumber
  whiteLogoUrl = this.sharedService.whiteLogoUrl;
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  contactForm = new FormGroup({
    message: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    number: new FormControl(''),
    website: new FormControl(''),
  });

  constructor(private sharedService: SharedService) {
    // this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      "assets/js/jquery.js",
      "assets/js/waypoints.js",
      "assets/js/bootstrap.bundle.min.js",
      "assets/js/swiper-bundle.js",
      "assets/js/slick.js",
      "assets/js/magnific-popup.js",
      "assets/js/counterup.js",
      "assets/js/wow.js",
      "assets/js/isotope-pkgd.js",
      "assets/js/imagesloaded-pkgd.js",
      "assets/js/ajax-form.js",
      "assets/js/aos.js",
      "assets/js/meanmenu.js",
      "assets/js/nice-select.js",
      "assets/js/jquery.appear.js",
      "assets/js/jquery.knob.js",
      "assets/js/main.js",
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
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
}
