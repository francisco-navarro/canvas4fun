app.mobs.cars = new Cars();

function Cars() {
  var colors = ['green'];
  var images = [];
  var size;
  var animation = 0;

  this.add = add;
  this.Car = Car;

   //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
   var carX1 = [null, 15*0, 0, 15, 15, 0, 0, 15, 15];
   var carY1 = [null, 15*1, 0, 15, 15, 0, 0, 15, 15];
   var carX2 = [null, 15*2, 0, 15, 15, 0, 0, 15, 15];
   var carY2 = [null, 15*3, 0, 15, 15, 0, 0, 15, 15];
  
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
    var carY = app.conf.offsetY - size + size * (y + 1);

    this.animate = animate;

    function animate(){
      //Sumar las coordenadas de carX y carY segun el path
      //Calcular según la carretera que imagen pintar
      carX++;
      draw(carX1);
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