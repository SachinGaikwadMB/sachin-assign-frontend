import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentInfo } from '../common/payment-info';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private baseUrl = environment.baseUrl;
  private paymentIntentUrl = environment.baseUrl + '/checkout/payment-intent' 

  constructor(
    private httpClient : HttpClient
  ) { }

  getResponse() : Observable<any> {
    return this.httpClient.get(this.baseUrl+'/test');
  }

  createPaymentIntent(paymentInfo:PaymentInfo) : Observable<any> {
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, paymentInfo);
  }
}
