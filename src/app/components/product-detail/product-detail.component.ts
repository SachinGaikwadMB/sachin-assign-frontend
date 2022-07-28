import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productsData: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((dataResponse) => {
      this.productsData = dataResponse;
      console.log(dataResponse);
      
    });
  }
}
