import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='assets/img/vetrina.png'>
            </div>
            <div class="content">
                <h2>Piccadilly</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='assets/img/tavola.jpg'>
            </div>
            <div class="content">
                <h2>Menù</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='assets/img/eventi.jpg'>
            </div>
            <div class="content">
                <h2>Eventi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
         <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='assets/img/eventi.jpg'>
            </div>
            <div class="content">
                <h2>Chi siamo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
         <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='assets/img/eventi.jpg'>
            </div>
            <div class="content">
                <h2>Prenotazioni</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
         <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <img src='assets/img/eventi.jpg'>
            </div>
            <div class="content">
                <h2>Dicono di noi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            </div>
        </div>
 
    </div>
  `,
  styles: `
  .container .card
{
    width: 300px;
    height: 215px;
    margin: 30px 10px;
    padding: 20px 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
}
.container .card:hover
{
    height: 450px;
}
.container .card .imgContainer
{
    position: relative;
    width:250px;
    height:250px;
    top:-50px;
    left:10px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
.container .card .imgContainer img
{
  height: 100%;
  object-fit: cover;
  width: 100%;
  object-position: center;
    border-radius: 4px;
}
.container .card .content
{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color:#111;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease-in-out;
}
.container .card:hover .content
{
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
}

@media (max-width: 330px){
    .container .card .imgContainer{
        left: -2px;
    }
}
  `,
})
export class HomeComponent {}
