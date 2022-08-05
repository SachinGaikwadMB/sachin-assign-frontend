import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CheckoutService],
    });
    service = TestBed.inject(CheckoutService);
  });

  it('should have createPaymentIntent method', () => {
    const service: CheckoutService = TestBed.get(CheckoutService);
    expect(service.createPaymentIntent).toBeTruthy();
  });

  it('should have pay method', () => {
    const service: CheckoutService = TestBed.get(CheckoutService);
    expect(service.pay).toBeTruthy();
  });

});
