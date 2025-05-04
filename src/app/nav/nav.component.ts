import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';
import { category } from '../data/category';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  logoUrl = this.sharedService.logoUrl;
  preloader = this.sharedService.preloader;
  mobileNumber = this.sharedService.mobileNumber
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  emailSub = '';
  isActive = false;
  productCategory = category
  isScrollTargetOpen = false;
  isSidebarOpen = false;
  isMobileMenu = false;
  navbar = [
    {
      name: 'Home',
      routerLink: '/home'
    },
    {
      name: 'Product',
      routerLink: '/product',
      subMenu: this.productCategory,
      isOpen: false
    },
    {
      name: 'About',
      routerLink: '/about'
    },
    {
      name: 'Certificate',
      routerLink: '/certificate'
    },
    {
      name: 'Contact',
      routerLink: '/contact'
    },
  ]

  constructor(private sharedService: SharedService, private route: Router, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isActive = event.url.includes('product')
      }
      this.closeSidebar()
      this.navbar.map(data => {
        data.isOpen = false
      })
    });
  }

  ngOnInit(): void {
    this.handleStickyHeader(window.pageYOffset);
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileMenu = window.innerWidth <= 1199;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.handleStickyHeader(scroll);
    this.onWindowScrollTop()
  }

  onWindowScrollTop() {
    const scroll = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.isScrollTargetOpen = scroll >= 245;
  }

  scrollToTarget(): void {
    window.scrollTo(0, 0);
  }

  handleStickyHeader(scroll: number): void {
    const header = this.document.getElementById('header-sticky');
    const mobileHeader = this.document.getElementById('header-mob-sticky');

    if (scroll < 100) {
      if (header) this.renderer.removeClass(header, 'header-sticky');
      if (mobileHeader) this.renderer.removeClass(mobileHeader, 'header-sticky');
    } else {
      if (header) this.renderer.addClass(header, 'header-sticky');
      if (mobileHeader) this.renderer.addClass(mobileHeader, 'header-sticky');
    }
  }

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  mouseover(nav: any, isOpen: boolean): void {
    nav.isOpen = isOpen
  }

  toggleSubmenu(nav: any) {
    nav.isOpen = !nav.isOpen
  }

  ngAfterViewInit(): void {
    this.sharedService.callPreloader()
  }


  sub(): void {
    if (this.emailSub) {
      this.sharedService.sendEmail({ email: this.emailSub })
      this.emailSub = ''
    }
  }

  navigation(category: string): void {
    this.route.navigate(['products', {
      query: {
        category: category
      }
    }])
  }
}
