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
      <div class="row ">
        <div class="col-12 d-flex justify-content-center align-items-center ">
          <img src="assets/img/Piccadilly.png" alt="" />
        </div>
      </div>
          <app-card></app-card>
    </div>
  `,
  styles: ` `,
})
export class HomeComponent {}
