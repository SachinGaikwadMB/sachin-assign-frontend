import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CheckoutService } from './shared/checkout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'final-assignment-ui';
  apiResponse : any;

  constructor(private checkoutService : CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getResponse().subscribe(
      (response) => {
        console.log(response);
        this.apiResponse = response;
      }
    );
  }



}
