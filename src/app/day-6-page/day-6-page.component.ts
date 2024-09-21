import { Component } from '@angular/core';
import { LinePayComponent } from './line-pay/line-pay.component';
import { environment } from '../../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-day-6-page',
  standalone: true,
  imports: [LinePayComponent],
  templateUrl: './day-6-page.component.html',
  styleUrl: './day-6-page.component.scss'
})
export class Day6PageComponent {
  private apiUrl = environment.linePayApiUrl;

  constructor(private http: HttpClient) {}

  // 發送付款請求
  requestPayment(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': environment.linePayChannelId,
      'X-LINE-Authorization': environment.linePayChannelSecret,
    });

    return this.http.post(`${this.apiUrl}/v3/payments/request`, data, { headers });
  }

  ngOnInit(): void {
    this.requestPayment(paymentRequest).subscribe(response => {
        // 重定向至 LINE Pay 網頁支付頁面
        console.log(response)
        window.location.href = response.info.paymentUrl.web;
    });

  }
}


const paymentRequest = {
  amount: 100, // 金額
  currency: 'TWD', // 幣別
  orderId: 'ORDER_ID',
  packages: [
    {
      id: 'PACKAGE_ID',
      amount: 100,
      name: 'Product Name',
      products: [
        {
          name: 'Product 1',
          quantity: 1,
          price: 100,
        },
      ],
    },
  ],
  // redirectUrls: {
  //   confirmUrl: 'https://your-frontend.com/confirm',
  //   cancelUrl: 'https://your-frontend.com/cancel',
  // },
};

