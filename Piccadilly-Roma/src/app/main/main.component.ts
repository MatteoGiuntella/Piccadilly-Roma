import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <div class="container-main">
      <div class="row mt-2">
        <div class="col-12 d-flex justify-content-center align-items-center ">
          <div class="box-img">
            <img src="assets/img/Piccadilly.png" alt="" />
          </div>
        </div>
      </div>
      <app-home></app-home>
    </div>
  `,
  styles: `
  .container-main{
    min-width:100%;
    border: 1px solid black;
  }`,
})
export class MainComponent {}
