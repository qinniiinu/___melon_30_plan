import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid'; // UUID 用於生成 nonce

@Injectable({
  providedIn: 'root'
})
export class LinepayService {
  private channelId = 'YOUR_CHANNEL_ID';
  private channelSecret = 'YOUR_CHANNEL_SECRET';

  http = inject( HttpClient)

  // 用於生成 HMAC-SHA256 簽章
  private generateSignature(uri: string, body: string, nonce: string): string {
    const data = this.channelSecret + uri + body + nonce;
    const hmac = CryptoJS.HmacSHA256(data, this.channelSecret);
    return CryptoJS.enc.Base64.stringify(hmac);
  }

  // 發送 GET 請求
  public sendGetRequest(uri: string, queryString: string) {
    const nonce = uuidv4(); // 生成唯一 nonce
    const signature = this.generateSignature(uri, queryString, nonce);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': this.channelId,
      'X-LINE-Authorization': signature,
      'X-LINE-Authorization-Nonce': nonce
    });

    return this.http.get(`${uri}?${queryString}`, { headers });
  }

  // 發送 POST 請求
  public sendPostRequest(uri: string, body: any) {
    const nonce = uuidv4(); // 生成唯一 nonce
    const bodyString = JSON.stringify(body);
    const signature = this.generateSignature(uri, bodyString, nonce);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': this.channelId,
      'X-LINE-Authorization': signature,
      'X-LINE-Authorization-Nonce': nonce
    });

    return this.http.post(uri, body, { headers });
  }
}
