import { Component } from '@angular/core';
import { CacheService } from '../cache.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-day-8-page',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './day-8-page.component.html',
  styleUrl: './day-8-page.component.scss'
})
export class Day8PageComponent {
  data: any;
  constructor(private cacheService: CacheService) { }

  ngOnInit(): void {
    this.cacheService.getData('https://fakestoreapi.com/products/12').subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}
