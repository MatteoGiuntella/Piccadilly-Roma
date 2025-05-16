import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from "./main/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  providers: [HttpClient],
  template: `
    <div class="container bg-container">
      </div>
      <app-header></app-header>
      <div class="row">
        <div class="col-12">
          <app-home></app-home>
        </div>
      </div>
    <router-outlet />
  `,
  styles: [`
 
    `],
})
export class AppComponent {}
