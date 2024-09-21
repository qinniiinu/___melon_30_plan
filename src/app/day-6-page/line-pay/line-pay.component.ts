import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { LinepayService } from '../linepay.service';

@Component({
  selector: 'app-line-pay',
  standalone: true,
  imports: [],
  templateUrl: './line-pay.component.html',
  styleUrl: './line-pay.component.scss'
})
export class LinePayComponent {
  private _http = inject(HttpClient)


  linePayService = inject(LinepayService)

  ngOnInit() {
    const uri = 'https://sandbox-api-pay.line.me/v3/payments/request'; // 範例 API
    const queryString = 'productName=test&amount=100';

    // GET 請求
    this.linePayService.sendGetRequest(uri, queryString)
      .subscribe(response => {
        console.log(response);
      });

    // POST 請求
    const requestBody = {
      productName: 'test',
      amount: 100
    };

    this.linePayService.sendPostRequest(uri, requestBody)
      .subscribe(response => {
        console.log(response);
      });
  }

}
