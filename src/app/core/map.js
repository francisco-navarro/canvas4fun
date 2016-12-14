app.map = new Map();

function Map(){
  'use strict';

  var SQUARE_SIZE = app.conf.SQUARE_SIZE;
  init(app.conf.height, app.conf.width);

  function init(n, m) {
    for(var i = 0; i < n; i++) {
      for(var j = 0; j < m; j++) {
        var x = i * SQUARE_SIZE + app.conf.offsetX;
        var y = j * SQUARE_SIZE + app.conf.offsetY;
        mesh(x, y);
        coordText(x + SQUARE_SIZE / 2, y + SQUARE_SIZE / 2, i, j);
      }
    }
  }

  function mesh(x, y){
    app.ctx.iMoveTo(x, y);
    app.ctx.beginPath();
    app.ctx.iLineTo(x + SQUARE_SIZE, y);
    app.ctx.iLineTo(x + SQUARE_SIZE, y + SQUARE_SIZE);
    app.ctx.iLineTo(x, y + SQUARE_SIZE);
    app.ctx.iLineTo(x, y);
    app.ctx.closePath();
    app.ctx.strokeStyle = '#19343A';
    app.ctx.stroke();
    app.ctx.fillStyle = 'rgba(161, 212, 144, 0.4)';
    app.ctx.fill();
  }

  function coordText(carX, carY, n, m){
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;
    app.ctx.fillText(n + ',' + m, isoX - 5, isoY);
  }
}