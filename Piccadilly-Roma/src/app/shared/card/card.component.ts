import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavMenù } from '../../models/nav-menù';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `

      <div class="row">
        <div *ngFor="let item of cardHome" class="col-md-6 col-lg-4 column">
          <div class="card gr-1">
            <div class="txt">
              <h1>
               {{item.title}}
              </h1>
              <p>{{item.description}}</p>
            </div>
            <a href="#">more</a>
            <div class="ico-card d-flex justify-content-end">
              <img class="h-100" src="assets/img/vetrina.png" alt="">
            </div>
          </div>
        </div>
      </div>
  `,
  styles: `
*{transition: .5s;}

.align-middle{
  position: relative;
  top:50%;
  transform:translateY(-50%);
}

.column{
  margin-top:3rem;
  padding-left:3rem;

  &:hover{
    padding-left:0;
    .card .txt{
      margin-left:1rem;
      h1, p{
        color:rgba(255,255,255,1);
        opacity:1;
      }
    }
    a{
      color:rgba(255,255,255,1);
      &:after{
      width: 10%;
      }
    }
  }
}
.card{
  min-height:170px;
  margin: 0;
  padding: 1.7rem 1.2rem;
  border: none;
  border-radius: 0;
  color:#fff;
  letter-spacing: .05rem;
  box-shadow: 0 0 21px rgba(0,0,0,.27);
  border:5px solid  #4A1213;
  border-radius:5px;
    background-color:gray;
  .txt{
    margin-left:-3rem;
    z-index: 1;
    h1{
      font-size:1.5rem;
      font-weight: 300;
      text-transform: uppercase;
      font-weight:bold;
    }
    p{
      font-size:.7rem;
      font-family: 'Open Sans', sans-serif;
      letter-spacing: 0rem;
      margin-top:33px;
      opacity:0;
      color:rgba(255,255,255,1);
    }
  }
  a{
    z-index:3;
    font-size: .7rem;
    color:#fff;
    margin-left:1rem;
    position:relative;
    bottom: -.5rem;
    text-transform: uppercase;
    &:after {
      content:"";
      display: inline-block;
      height: 0.5em;
      width: 0;
      margin-right: -100%;
      margin-left: 10px;
      border-top: 1px solid rgba(255,255,255,1);
      transition: .5s;
    }
  }
  .ico-card{
    position:absolute;
    top: 0;
    left:0;
    bottom:0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

}
 `,
})
export class CardComponent {
  
    constructor(private http: HttpClient) { }
    ngOnInit(): void {
     this.getCardHome();
    }
    cardHome: NavMenù[] = []
    async getCardHome() {
    await this.http.get<NavMenù[]>('assets/navigation.json')
        .subscribe({
          next: (data) => this.cardHome = data});
    }
}
