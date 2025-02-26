import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  companyName = 'Shyam Pharm';
  logoUrl = 'assets/img/logo/logo.png';
  whiteLogoUrl = 'assets/img/logo/white-logo.png';
  mobileNumber = '+44 7771610280';
  indMobileNumber = '+91 9712878800';
  address = '27, Saraswati Socity Under Pramukh Swami Bridge, Behind Ashwani Kumar Police Station. 395008';
  email = 'noreply@envato.com';
  companyMission = 'To deliver high-quality, accessible pharmaceuticals globally, enhancing healthcare through trusted partnerships and innovation.'
  products = [
    {
      category: 'Syrup',
      products: [
        {
          title: "VitaBoost Pro",
          content: "MULTIVITAMINS with Multimineral & Antioxidant",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {
          title: "FerroBoost Plus",
          content: "Ferric Ammonium Citrate, Folic Acid, B12 with Zinc, Iron",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {
          title: "OsteoVive",
          content: "Calcium, vitamin B12, Zinc & Vitamin D3 Suspension",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {
          title: "Z-Vital",
          content: "Zinc Acetate 20mg/5ml",
          img: 'assets/img/shop/image-not-available.jpg'
        }, {
          title: "DigestiPlus",
          content: "Pepsin with Diastase ",
          img: 'assets/img/shop/image-not-available.jpg'
        },

        {
          title: "OmniLife",
          content: "Lycopene,Alpha Lipoic Acid, Omega 3-Fatty Acid, Co-Enzyme Q10, Multivitamin & Multimineral Syrup (SUGAR FREE) ",
          img: 'assets/img/shop/image-not-available.jpg'
        }
      ]
    },
    {
      category: "Tablet",
      products: [
        {
          title: "FerroMax",
          content: "Ferrous Fumerate, Folic Acid (B9) Cynocobalamine, & Zinc Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {
          title: "OmniVita",
          content: "Lycopene, Carotenoid, Multivitamin, Multiminerals & Antioxidant Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {
          title: "Nature's Multi",
          content: "Multivitamins with Multiminerals, Natural extract & Antioxidant Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "FerroZ",
          content: "Ferrous Ascorbate, Folic Acid & Zinc Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "B-D Duo",
          content: "Vitamin D3 & Vitamin B12 Sublingual Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "Cal-Mag-Z",
          content: "Calcium Citrate, Zinc, Magnesium & Vitamin D3 Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "MoringaLife",
          content: "Moringa leaf powder (Tablet)",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "FlexPro",
          content: "Glucosamine, Curcumin & Boswellia Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "SleepWell",
          content: "Melatonin Tablet ",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "FloraZ",
          content: "Riboflavin, Folic Acid, Niacinamide with Lactic Acid Bacillus & Zinc Tablets",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "MetaBoost",
          content: "Garcinia Cambogia, Green Coffee Bean Exatract, Caralluma fimbriata, Guggul Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "B-Complete",
          content: "Pyridoxal 5-Phosphate, L-Methylfolate, Vitamin B12, Biotin & Vitamin D3 Tablet",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "VitaMax",
          content: "Methylcobalamine, Vitamin A, Vitamin E (50%), Niacinamide, Ascorbic Acid, Thiamine Mononitrate, Riboflavin, Pyridoxine HCL, Calcium Pantothenate, Folic Acid, Zinc Sulphate, Selenium Tablets",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {

          title: "BoneBoost",
          content: "Cissus Quadrangularis, Vitamin K2 7, Calcium citrate malate, Magnesium, Zinc, Calcitrol & Vitamin B12 Tablets",
          img: 'assets/img/shop/image-not-available.jpg'
        },
      ]
    },
    {
      category: "API",
      products: [
        {

          title: "Lidocaine hydrochloride API",
          content: "",
          img: 'assets/img/shop/image-not-available.jpg'
        },
        {
          title: "Lidocaine base API",
          content: "",
          img: 'assets/img/shop/image-not-available.jpg'
        }
      ]
    }
  ]
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
      // message: "few",
      // name: "asd",
      // email: "wsd",
      // number: "wf",
      // website: "qw",
      ...data
    });
  }
}
