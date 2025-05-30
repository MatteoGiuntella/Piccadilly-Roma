import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <section class="p-5">
      <h4 style="color: white;">Antipasti</h4>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="card">
            <div class="cover item-a">
              <h1>Little<br />Bonsai</h1>
              <span class="price">$79</span>
              <div class="card-back">
                <p style="color: white;">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus repellendus dolor provident rerum perspiciatis quo
                  tempora culpa aliquam eos similique nesciunt dolores
                  laboriosam, possimus sapiente reiciendis explicabo quos
                  doloremque quas!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="card">
            <div class="cover item-b">
              <h1>Tropical<br />Leaf</h1>
              <span class="price">$35</span>
              <div class="card-back">
                <p style="color: white;">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus repellendus dolor provident rerum perspiciatis quo
                  tempora culpa aliquam eos similique nesciunt dolores
                  laboriosam, possimus sapiente reiciendis explicabo quos
                  doloremque quas!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="card">
            <div class="cover item-c">
              <h1>Marijuana<br />Chill</h1>
              <span class="price">$155</span>
              <div class="card-back">
                <p style="color: white;">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus repellendus dolor provident rerum perspiciatis quo
                  tempora culpa aliquam eos similique nesciunt dolores
                  laboriosam, possimus sapiente reiciendis explicabo quos
                  doloremque quas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
body{
	font-family: 'Oswald', sans-serif;
	background-color: #212121;
	section{
		width: 90%;
		max-width: 1200px;
		margin: 0 auto;
		.row{
			align-items: center;
    	height: 100vh;
		}
	}
}
.card{
	position: relative;
	height: 35vh;
	width: 75%;
	margin: 10px 0;
	transition: ease all 2.3s;
	perspective: 1200px;
	&:hover{
		.cover{
			transform: rotateX(0deg) rotateY(-180deg);
			&:before{
				transform: translateZ(30px);
			}
			&:after{
				background-color: black;
			}
			h1{
				transform: translateZ(100px);
			}
			.price{
				transform: translateZ(60px);
			}
			a{
				transform: translateZ(-60px) rotatey(-180deg);
			}
		}
	}
	
	.cover{
		position: absolute;
		height: 100%;
		width: 100%;
		transform-style: preserve-3d;
  	transition: ease all 2.3s;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		&:before{
			content: '';
			position: absolute;
			border: 5px solid  #4D221C;
			box-shadow: 0 0 12px rgba(0,0,0,.3); 
			top:20px;
			left:20px;
			right:20px;
			bottom:20px;
			z-index: 2;
			transition: ease all 2.3s;
			transform-style: preserve-3d;
			transform: translateZ(0px);
		}
		&:after{
			content: '';
			position: absolute;
			top:0px;
			left:0px;
			right:0px;
			bottom:0px;
			z-index: 2;
			transition: ease all 1.3s;
			background: rgba(0,0,0,.4);
		}
		&.item-a{
			background-image: url('https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80');
		}
		&.item-b{
			background-image: url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80');
		}
		&.item-c{
			background-image: url('https://images.unsplash.com/photo-1525945518069-b924046d1385?auto=format&fit=crop&w=600&q=80');
		}
		h1{
			font-weight: 600;
			position: absolute;
			bottom: 55px;
			left: 50px;
			color: white;
			transform-style: preserve-3d;
  		transition: ease all 2.3s;
			z-index:3;
			font-size: 3em;
			transform: translateZ(0px);
		}
		.price{
			font-weight: 200;
			position: absolute;
			top: 55px;
			right: 50px;
			color: white;
			transform-style: preserve-3d;
  		transition: ease all 2.3s;
			z-index:4;
			font-size: 2em;
			transform: translateZ(0px);
		}
	}
	.card-back{
		position: absolute;
		height: 100%;
		width: 100%;
		background: #0b0f08;
		transform-style: preserve-3d;
  	transition: ease all 2.3s;
		transform: translateZ(-1px);
		display: flex;
		align-items: center;
		justify-content: center;
		p{
			transform-style: preserve-3d;
			transition: ease transform 2.3s, ease background .5s;
			transform: translateZ(-1px) rotatey(-180deg);
			background: transparent;
			font-weight: 200;
			color: white;
			padding: 14px 32px;
			outline: none;
			text-decoration: none;
		}
	}
}
`,
})
export class MenuComponent {}
