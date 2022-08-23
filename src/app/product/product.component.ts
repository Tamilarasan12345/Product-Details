import { Component, OnInit } from '@angular/core';


import { DataService } from '../service/dataproduct.service';
import { Product } from '../details/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private product: DataService, private router:Router) {}

  ngOnInit(): void {
    this.product.getproducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
      console.log(this.product);
      console.log(data);
    });
  }
  getAbout(event: any, product: any): void {
    console.log(event);
    this.router.navigate(['/about', product.id]);
  }
}
