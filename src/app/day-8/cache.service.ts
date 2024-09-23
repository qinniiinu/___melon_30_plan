import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache$: ReplaySubject<any> = new ReplaySubject(1);

  constructor(private http: HttpClient) { }

  getData(dataUrl: string): Observable<any> {
    return this.http.get(dataUrl)
    if (!this.cache$.observers.length) {
      this.http.get(dataUrl)
        .pipe(
          tap(data => this.cache$.next(data)),
          tap(()=>{
            console.log(this.cache$)
          })
        )
        .subscribe();
    }
    return this.cache$.asObservable();
  }
}
