export class PaymentInfo {
    name : string;
    currency : string;
    amount : number;
    quantity:any;
    cancelUrl: 'http://localhost:4200/cancel';
    successUrl: 'http://localhost:4200/success';
}
