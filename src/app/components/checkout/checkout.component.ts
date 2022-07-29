import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentInfo } from 'src/app/common/payment-info';
import { CheckoutService } from 'src/app/shared/checkout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  // We load  Stripe
  stripePromise = loadStripe(environment.stripePublishableKey);
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async pay(): Promise<void> {
    // here we create a payment object
      const paymentDto = {
      name: 'Iphone',
      currency: 'INR',
      // amount on cents *10 => to be on dollar
      amount: 99900,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe : any = await this.stripePromise;

    // this is a normal http calls for a backend api 
    //TODO : API call should be from Service
    this.http
      .post(environment.baseUrl + '/checkout/payment-intent', paymentDto)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }
  

 
}



