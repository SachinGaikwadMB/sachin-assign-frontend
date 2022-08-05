import { Component, OnInit } from '@angular/core';
import { PaymentInfo } from 'src/app/common/payment-info';
import { CheckoutService } from 'src/app/shared/services/checkout.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productsData: any;
  paymentInfoDto : PaymentInfo = new PaymentInfo();

  constructor(
    private productService: ProductService,
    private checkoutService : CheckoutService) {}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe((dataResponse) => {
      this.productsData = dataResponse;
      console.log(dataResponse);
      console.log(this.productsData[0].image[0]);
    });
  }

  buyNow(noOfItems) {  

     const paymentDto = {
      name: this.productsData[0].name,
      currency: 'INR',
      // amount on cents *10 => to be on dollar
      amount: this.productsData[0].unitPrice * 100,
      quantity: noOfItems,
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    this.checkoutService.pay(paymentDto);
  }
}
