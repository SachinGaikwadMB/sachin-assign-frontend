import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { PaymentInfo } from 'src/app/common/payment-info';
import { environment } from 'src/environments/environment';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private baseUrl = environment.baseUrl;
  private paymentIntentUrl = environment.baseUrl + '/checkout/payment-intent';
  stripePromise = loadStripe(environment.stripePublishableKey);

  paymentInfoDto: PaymentInfo = new PaymentInfo();

  constructor(
    private httpClient: HttpClient,
    private productService: ProductService
  ) {}

  getResponse(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/test');
  }

  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any> {
    return this.httpClient.post<PaymentInfo>(
      this.paymentIntentUrl,
      paymentInfo
    );
  }

   async pay(paymentDto: any): Promise<void> {
    const stripe: any = await this.stripePromise;
    this.httpClient
      .post(environment.baseUrl + '/checkout/payment-intent', paymentDto)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }
}
