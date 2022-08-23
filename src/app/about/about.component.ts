import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../details/product';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { FormBuilder, FormGroup  ,Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  product:Product |any;
  productForm:any;



  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
    this.getAbout((data as any).id);
  });
  this.initialize();
  }

  initialize() {
    this.initializeForm(this.product);
  }


  initializeForm(product: any){
    this.productForm = this.fb.group({
      title:[product.title,Validators.required],
      price: [product.price, Validators.required],
      description: [product.description, Validators.required],
      brand: [product.brand, Validators.required],


  });
}

  getAbout(id: number) : any {
    this.http.get(`${environment.dummyurl}${appConstant.apiRoute.products}/${id}`).subscribe((data) => {
    this.product = data;
    this.initializeForm(data);
     console.log(data);
      });
  }
  onSubmit(formValue: any, isValid: boolean) {
    console.log(formValue);
    console.log(isValid);

    }


}

