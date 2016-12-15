app.draw = new Draw();

function Draw(){
  'use strict';
  app.canvas = document.createElement('canvas');
  app.canvas.width = window.innerWidth;
  app.canvas.height = window.innerHeight;
  document.getElementById('map').appendChild(app.canvas);

  if (app.canvas.getContext) {
    app.ctx = app.canvas.getContext('2d');
    app.ctx.font = '8px Verdana';
  } else {
    console.warn('canvas not compatible');
  }

  app.ctx.iLineTo = function(carX, carY) {
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;

    app.ctx.lineTo(isoX, isoY);
  };

  app.ctx.iMoveTo = function(carX, carY) {
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;
    app.ctx.moveTo(isoX, isoY);
  };
  app.getIsoCell = function(isoX, isoY) {
    var carX = (isoX - (isoY + app.conf.offsetX) * 2.0) / (app.conf.SQUARE_SIZE * 2);
    var carY = (isoX + (isoY - app.conf.offsetY) * 2.0) / (app.conf.SQUARE_SIZE * 2);

    return {
      x: parseInt(carX, 10),
      y: parseInt(carY, 10)
    };
  };
}