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
   var carY1 = [null, 64*2, 0, 64, 64, 0, 0, 64, 64];
   var carY2 = [null, 64*1, 0, 64, 64, 0, 0, 64, 64];
  
  function init(){
    size = app.conf.SQUARE_SIZE;
    colors.forEach(function(color){
      var image = new Image();
      image.src = 'img/vehicles/' + color + '_car.png';
      images.push(image);
    });
  }

  function Car(i, j) {
    var animate = animate;
    var x = i;
    var y = j;
    var vx = 0;
    var vy = 0;
    var animationX = 0;
    var animationY = 0;
    var sprite = getRoad(x, y) === 'roadX' ? carX1 : carY1;

    this.animate = animate;

    function animate(){
      var road = getRoad(x, y);

      if (road) {
        move();
        if (road === 'roadX') {
          vx = 1;
          vy = 0;
          sprite = carX1;
        } else if (road === 'roadY') {
          vy = 1;
          vx = 0;
          sprite = carY1;
        } else if (road === 'curve2') {
          vy = 1;
          vx = 0;
          if (animationX >= size/4) {
            animationY = 0;
            y++;
          }
        }
      }
      draw(sprite);
    }

    function move(){
      animationX += vx;
      animationY += vy;
      if (animationX >= size) {
        animationX = 0;
        x++;
      }
      if (animationY >= size) {
        animationY = 0;
        y++;
      }
    }

    function draw(car){
      //Isometric coords
      var carX = app.conf.offsetX + size + size * x + animationX;
      var carY = app.conf.offsetY - size + size * y + animationY;
      //Cartesian coords
      car[0] = images[0];
      car[5] = carX + carY;
      car[6] = (carY - carX) / 2.0;

      app.ctx.drawImage.apply(app.ctx, car);
    }
  }

  function add(x, y){
    var road = getRoad(x, y);
    if (road && !road.match(/curve/)){
      app.mobs.buffer.push(new Car(x, y));
    }
  }

  function getRoad(x, y){
    return app.scenery.road.getRoad(x, y);
  }

  init();
}