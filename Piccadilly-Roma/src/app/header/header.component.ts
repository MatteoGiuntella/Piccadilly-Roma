import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenù} from '../models/nav-menù';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient],
  template: `
      <nav class="navbar d-flex flex-column justify-content-evenly">
        <ul class="list-unstyled">
          <li>
            <div class="box-logo">
              <img src="assets/img/logo.png" alt="">
            </div>
          </li>
        </ul>
        <ul class="navbar__menu list-unstyled">
          <li class="navbar__item" *ngFor="let nav of navMenu">
            <a [href]="nav.url" class="navbar__link"><i [class]="nav.icon" style="color: #ffffff;"></i><span style="color: white;background-color:#313131">{{nav.title}}</span></a>
          </li>
        </ul>
      </nav>
  `,
  styles: [`
.box-logo{
 width:100%;
 img{
    width: 40px;
    object-fit: contain;
    border-radius: 20px;
 }
}
  $borderRadius: 10px;
$spacer: 1rem;
$primary:#313131;
$text: #fff;
$linkHeight: $spacer * 3.5;
$timing: 250ms;
$transition: $timing ease all;
a{
    text-decoration: none;
}
@mixin gooeyEffect($i) {
  @keyframes gooeyEffect-#{$i} {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(0.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
}
body {
  background: #313131;
}
.navbar {
  $ref: &;
  position: fixed;
  top: $spacer;
  left: $spacer;
  background: #4A1213;
  border-radius: $borderRadius;
  padding: $spacer 0;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);
  height: calc(100vh - #{$spacer * 4});
  &__link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: $linkHeight;
    width: $spacer * 5.5;
    color: $text;
    transition: $transition;
    span {
      position: absolute;
      left: 100%;
      transform: translate(-($spacer * 3));
      margin-left: 1rem;
      opacity: 0;
      pointer-events: none;
      color: $primary;
      background: #fff;
      padding: $spacer * 0.75;
      transition: $transition;
      border-radius: $borderRadius * 1.75;
    }
    &:hover {
      color: #fff;
    }
    .navbar:not(:hover) &:focus,
    &:hover {
      span {
        opacity: 1;
        transform: translate(0);
      }
    }
  }
  &__menu {
    position: relative;
  }
  &__item {
    &:last-child {
      &:before {
        content: "";
        position: absolute;
        opacity: 0;
        z-index: -1;
        top: 0;
        left: $spacer;
        width: $linkHeight;
        height: $linkHeight;
        background: $primary;
        border-radius: $borderRadius * 1.75;
        transition: $timing cubic-bezier(1, 0.2, 0.1, 1.2) all;
      }
    }

    @for $i from 1 to 12 {
      &:first-child:nth-last-child(#{$i}),
      &:first-child:nth-last-child(#{$i}) ~ li {
        &:hover {
          ~ li:last-child:before {
            opacity: 1;
          }
        }
        &:last-child:hover:before {
          opacity: 1;
        }
        @for $j from 1 to $i {
          &:nth-child(#{$j}):hover {
            ~ li:last-child:before {
              @include gooeyEffect($j);
              top: (100% / $i) * ($j - 1);
              animation: gooeyEffect-#{$j} $timing 1;
            }
          }
        }
        &:last-child:hover:before {
          @include gooeyEffect($i);
          top: (100% / $i) * ($i - 1);
          animation: gooeyEffect-#{$i} $timing 1;
        }
      }
    }
  }
}

  
  `]
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   this.getNavMenu();
  }
  navMenu: NavMenù[] = []
  async getNavMenu() {
  await this.http.get<NavMenù[]>('assets/navigation.json')
      .subscribe({
        next: (data) => this.navMenu = data});
  }
}

