import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  providers: [HttpClient],
  template: `
    <div class="container bg-container">
      <app-header></app-header>
      <div class="row">
        <div class="col-12">
          <app-main></app-main>
        </div>
      </div>
    </div>

    <router-outlet />
  `,
  styles: [``],
})
export class AppComponent {}
