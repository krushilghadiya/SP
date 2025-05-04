import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/service/shared.service';
import Swiper, { Navigation, Thumbs } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('testAvaActive', { static: false }) testAvaActive!: ElementRef
  @ViewChild('testActive', { static: false }) testActive!: ElementRef
  @ViewChild('previousButton', { static: false }) previousButton!: ElementRef
  @ViewChild('nextButton', { static: false }) nextButton!: ElementRef
  logoUrl = this.sharedService.logoUrl;
  companyName = this.sharedService.companyName;
  mobileNumber = this.sharedService.mobileNumber
  indMobileNumber = this.sharedService.indMobileNumber
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  instagramLink = this.sharedService.instagramLink
  emailSub = '';
  contactForm = new FormGroup({
    message: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    number: new FormControl(''),
    website: new FormControl(''),
  });

  constructor(private sharedService: SharedService) {
    Swiper.use([Navigation, Thumbs]);
  }

  ngAfterViewInit(): void {
    this.testAvaActiveSwiper()
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

  testAvaActiveSwiper(): void {
    const swiperthumb = new Swiper(this.testAvaActive.nativeElement, {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1400: { slidesPerView: 4 },
        1200: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 }
      }
    });

    new Swiper(this.testActive.nativeElement, {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: this.nextButton.nativeElement,
        prevEl: this.previousButton.nativeElement
      },
      thumbs: {
        swiper: swiperthumb
      }
    });
  }
}
