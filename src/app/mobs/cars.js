app.mobs.cars = function() {
  var image = new Image();
  var size;
  var dx = 0;
  var dy = 3;
  var animation = 0;

  var greyX = [image, 13*0, 0, 14, 12, dx, dy, 14, 12];
  var greyY = [image, 13*1, 0, 14, 12, dx, dy, 14, 12];
  var greenX = [image, 13*2, 0, 14, 12, dx, dy, 14, 12];
  var greenY = [image, 13*3, 0, 14, 12, dx, dy, 14, 12];

  function init(){
    size = app.conf.SQUARE_SIZE;
    image.src = 'images/cars.png';
    //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    draw(greenX, dx, dy);
    window.requestAnimationFrame(init);
  }
  function draw(car, x, y){
    //Cartesian coords
    var carX = app.conf.offsetX + (size) + x * size + animation++;
    var carY = app.conf.offsetY - size + y * size;
    //Isometric coords
    car[5] = carX + carY;
    car[6] = (carY - carX) / 2.0;

    app.ctx.drawImage.apply(app.ctx, car);
  }

  // init();
  window.requestAnimationFrame(init);
};