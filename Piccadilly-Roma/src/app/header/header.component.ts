import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenù } from '../models/nav-menù';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient],
  template: `
    <nav
      class="navbar navbar-dark fixed-top mb-3"
      style="background-color: #4D221C;"
    >
      <div class="container-fluid">
        <div class="d-flex justify-content-between w-100 ">
          <span class="box-logo ">
            <img src="assets/img/PY_logo.jpg" alt="" />
          </span>
          <span class="box-logo-central bg-white">
            <img src="assets/img/Piccadilly_logo.png" alt="" />
          </span>
          <span class="d-flex justify-content-center align-items-center">
            <button
              class="navbar-toggler bg-white mx-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span>
                <i
                  style="color: #4D221C;"
                  class="fa-sharp fa-solid fa-bars fa-beat"
                ></i>
              </span>
            </button>
            <button style="background-color: #4D221C;">
              <span>
               <a href="/login"> <i class="fa-solid fa-user fa-xl" style="color:#fff;"></i></a>
              </span>
            </button>
          </span>
        </div>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          style="width: 17vw;"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <span class="box-title-offcanvas">
              <img src="assets/img/Piccadilly_logo_white.png" alt="" />
            </span>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item p-2" *ngFor="let item of navMenu">
                <span
                  class="d-flex justify-content-between align-items-center item-off"
                  ><i class="{{ item.icon }}" [title]="item.title"></i>
                  <a class="nav-link" [href]="item.url">{{
                    item.title
                  }}</a></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .box-logo {
        width: 45px;
        img {
          width: 100%;
          object-fit: contain;
          border-radius: 20px;
        }
      }

      a {
        text-decoration: none;
      }

      .box-title-offcanvas {
        img {
          width: 100%;
          object-fit: contain;
          border-radius: 10px;
        }
      }
      li {
        color: white;
        font-size: 1rem;
        border-radius: 5px;
        &:hover {
          background-color: white;
          color: #4d221c;
          a {
            color: #4d221c;
            font-weight: bold;
          }
        }
      }

      @media (min-width: 790px) {
        .box-logo-central {
          display: none;
        }
      }
      @media (max-width: 791px) {
        .box-logo-central {
          padding: 10px;
          height: 50px;
          border-radius: 20px;
          img {
            width: 100%;
            object-fit: contain;
            height: 100%;
          }
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getNavMenu();
  }
  navMenu: NavMenù[] = [];
  async getNavMenu() {
    await this.http.get<NavMenù[]>('assets/navigation.json').subscribe({
      next: (data) => (this.navMenu = data),
    });
  }
}
