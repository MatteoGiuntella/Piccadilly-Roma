import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavMenù } from '../../models/nav-menù';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  template: ` 
       <div class="container">
          <app-card></app-card>
       </div> `,
  styles: ` `,
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getHomeCard();
  }
  cardMenù: NavMenù[] = [];
  async getHomeCard() {
    await this.http.get<NavMenù[]>('assets/navigation.json').subscribe({
      next: (data) => (this.cardMenù = data),
    });
  }
}