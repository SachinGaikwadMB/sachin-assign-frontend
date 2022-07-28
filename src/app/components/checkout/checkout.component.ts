import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/shared/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  apiResponse : any;
  
  constructor(private checkoutService : CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getResponse().subscribe(
      (response) => {
        console.log(response);
        this.apiResponse = response;
      }
    );
  }

}
