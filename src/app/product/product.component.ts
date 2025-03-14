import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/service/shared.service';
import { category } from '../data/category';
import { product } from '../data/product';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @ViewChild('owlCar') owlCar!: CarouselComponent
  @ViewChild('searchInput') searchInput!: ElementRef
  logoUrl = this.sharedService.logoUrl;
  companyName = this.sharedService.companyName;
  mobileNumber = this.sharedService.mobileNumber
  indMobileNumber = this.sharedService.indMobileNumber
  whiteLogoUrl = this.sharedService.whiteLogoUrl;
  companyMission = this.sharedService.companyMission;
  address = this.sharedService.address;
  email = this.sharedService.email;
  products!: any;
  originalProducts!: any;
  params = ''
  productCategory = category
  selectedCategory!: any
  searchedValue = ''

  constructor(private sharedService: SharedService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(
      (params) => {
        this.params = params['category']
        this.selectedCategory = params['category'] && this.productCategory.find(data => data.router === params['category'])
        if (this.selectedCategory?.categoryId) {
          this.products = product.filter(data => data.categoryId === this.selectedCategory?.categoryId)
          this.originalProducts = this.products.map((x: any) => Object.assign({}, x));
        } else {
          this.router.navigate(['product/' + this.productCategory[0].router])
        }
        this.slide()
        this.searchedValue = ''
      })
  }

  customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  slide(): void {
    this.owlCar?.to(this.params)
  }

  getProduct(item: any): void {
    this.router.navigate(['product/' + item.router])
  }

  ngAfterViewInit(): void {
    this.slide()
    this.search()
  }

  search(): void {
    fromEvent(this.searchInput.nativeElement, 'input').subscribe((event: any) => {
      this.searchedValue = event.target.value.toLowerCase().trim();
      this.products = this.searchedValue ? this.originalProducts.filter((data: any) => data.form.toLowerCase().trim().includes(this.searchedValue) || data.productName.toLowerCase().trim().includes(this.searchedValue)) : this.originalProducts.map((x: any) => Object.assign({}, x));
    })
  }
}
