import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from "./main/home/home.component";
import { CardComponent } from "./shared/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  providers: [HttpClient],
  template: `
    <div class="container bg-container p-5">
      <app-header></app-header>
      
    </div>
    <router-outlet></router-outlet>
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
export class AppComponent {}
