import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="container">
      <div class="row ">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <img src="assets/img/Piccadilly_logo_white.png" alt="Logo" />
        </div>
      </div>
      <app-card ></app-card>
    </div>
  `,
  styles: [`
    img {
      height: 30%;
    }

    @media (max-width: 790px) {
      .row {
        display: none;
      }
    }
  `]
})
export class HomeComponent {}
