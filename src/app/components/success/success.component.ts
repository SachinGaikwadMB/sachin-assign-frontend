import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   Swal.fire({
      title: 'Purchase Successful',
      html: `<div><p style="font-family:"Poppins";font-style: normal;font-weight: 300;font-size: 18px;line-height: 30px;">You will get your product soon! <br /><br/>to experience the spatial audio withadaptive EQ that tunes music to your ears.</p></div>`,
      imageUrl: 'assets/images/success.png',
      imageWidth:100,
      imageHeight:100,
      imageAlt: 'success icon',
      
    }).then(function() {
      window.location.href = "http://localhost:4200";
    })
  }
  
}
