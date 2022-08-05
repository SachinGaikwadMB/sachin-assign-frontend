import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  it('should have getAllProducts function', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service.getAllProducts).toBeTruthy();
   });

});
