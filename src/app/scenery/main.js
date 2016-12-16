app.scenery = new Scenery();

function Scenery(){
  var size = app.conf.SQUARE_SIZE;

  init();

  function init() {
    SystemJS.import('scenery/road.js');
  }

  this.drawTile = function(image, x, y /*, sWidth, sHeight, dx, dy, dWidth, dHeight*/){
    //Cartesian coords
    var carX = app.conf.offsetX + (size) + size * x;
    var carY = app.conf.offsetY - size + size * y;
    //Isometric coords
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;

    app.ctx.drawImage(image, isoX, isoY);
  };
}