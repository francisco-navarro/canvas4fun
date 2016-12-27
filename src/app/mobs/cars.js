app.mobs.cars = new Cars();
'use strict';

function Cars() {
  var colors = ['green'];
  var images = [];
  var size;

  this.add = add;
  this.Car = Car;

   //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
   var carX1 = [null, 64*0, 0, 64, 64, 0, 0, 64, 64];
   var carX2 = [null, 64*3, 0, 64, 64, 0, 0, 64, 64];
   var carY1 = [null, 64*1, 0, 64, 64, 0, 0, 64, 64];
   var carY2 = [null, 64*2, 0, 64, 64, 0, 0, 64, 64];
  
  function init(){
    size = app.conf.SQUARE_SIZE;
    colors.forEach(function(color){
      var image = new Image();
      image.src = 'img/vehicles/' + color + '_car.png';
      images.push(image);
    });
  }

  function Car(x, y){
    var carX = app.conf.offsetX + size + size * x;
    var carY = app.conf.offsetY - size + size * (y);

    this.animate = animate;

    function animate(){
      //Sumar las coordenadas de carX y carY segun el path
      //Calcular según la carretera que imagen pintar
      //CarX1 ++, CarX2 --
      carX--;
      draw(carX2);
    }

    function draw(car){
      //Cartesian coords
      //Isometric coords
      car[0] = images[0];
      car[5] = carX + carY;
      car[6] = (carY - carX) / 2.0;

      app.ctx.drawImage.apply(app.ctx, car);
    }
  }

  function add(x, y){
    if (app.scenery.road.roadsMatrix[x][y]){
      app.mobs.buffer.push(new Car(x, y));
    }
  }

  init();
}