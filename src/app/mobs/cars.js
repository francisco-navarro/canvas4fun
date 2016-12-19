app.mobs.cars = new Cars();

function Cars() {
  var colors = ['green'];
  var images = [];
  var size;
  var animation = 0;

  this.animate = animate;

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

  function draw(car, x, y){
    //Cartesian coords
    var carX = app.conf.offsetX + size + size * x //+ animation++;
    var carY = app.conf.offsetY - size + size * (y + 1);
    //Isometric coords
    car[0] = images[0];
    car[5] = carX + carY;
    car[6] = (carY - carX) / 2.0;

    app.ctx.drawImage.apply(app.ctx, car);
    // app.ctx.drawImage(images[0], car[5], car[6]);
  }

  function animate(){
    draw(carX1, 1, 1);
    // draw(carY1, 1, 1);
    // draw(carX2, 2, 2);
    // draw(carY2, 1, 1);
  }

  init();
}