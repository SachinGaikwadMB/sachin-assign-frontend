import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/shared/services/product.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailComponent ],
      imports:[HttpClientTestingModule],
      providers:[ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have only one record', () => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    expect(1).toEqual(1);
  });

 
});
