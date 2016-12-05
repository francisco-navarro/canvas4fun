app.map = new Map();

function Map(){
  'use strict';

  var SQUARE_SIZE = app.conf.SQUARE_SIZE;
  var n = app.conf.map.height;
  var m = app.conf.map.width;
  var cursorAt = {};

  this.animate = animate;
  this.coordText = coordText;
  this.border = border;
  this.mesh = mesh;
  this.moveCursor = moveCursor;

  function init() {
    animate();
  }

  function animate() {
    for(var i = 0; i < n; i++) {
      for(var j = 0; j < m; j++) {
        var x = i * SQUARE_SIZE;
        var y = j * SQUARE_SIZE;
        mesh(x, y);
        if (app.conf.map.coordText) {
          coordText(x + SQUARE_SIZE / 2, y + SQUARE_SIZE / 2, i, j);
        }
      }
    }
    if (cursorAt.x && cursorAt.y) {
      if(cursorAt.x >= 0 && cursorAt.x < n
       && cursorAt.y >= 0 && cursorAt.y < m){
         border(cursorAt.x * SQUARE_SIZE, cursorAt.y * SQUARE_SIZE, '#edc140');
       }
    }
  }

  function border(x, y, color){
    var x1 = x + app.conf.offsetX;
    var y1 = y + app.conf.offsetY;
    app.ctx.iMoveTo(x1, y1);
    app.ctx.beginPath();
    app.ctx.iLineTo(x1 + SQUARE_SIZE, y1);
    app.ctx.iLineTo(x1 + SQUARE_SIZE, y1 + SQUARE_SIZE);
    app.ctx.iLineTo(x1, y1 + SQUARE_SIZE);
    app.ctx.iLineTo(x1, y1);
    app.ctx.closePath();
    app.ctx.strokeStyle = color || '#19343A';
    app.ctx.stroke();
  }

  function mesh(x, y, color){
    border(x, y);
    app.ctx.fillStyle = color || 'rgb(113, 142, 69)';
    app.ctx.fill();
  }

  function coordText(carX, carY, a, b){
    var isoX = carX + carY + app.conf.offsetX + app.conf.offsetY;
    var isoY = (carY + app.conf.offsetY - carX - app.conf.offsetX) / 2.0;
    app.ctx.fillStyle = 'rgba(261, 212, 244, 0.5)';
    app.ctx.fillText(a + ',' + b, isoX - 5, isoY);
  }

  function moveCursor(x, y){
    cursorAt.x = x;
    cursorAt.y = y;
  }

  init();
}