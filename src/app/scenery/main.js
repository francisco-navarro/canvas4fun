app.scenery = new Scenery();

function Scenery(){
  var size = app.conf.SQUARE_SIZE;
  var deps = [
    'road'
  ];

  init();

  function init() {
    deps.forEach(function(item){
      SystemJS.import('scenery/' + item + '.js');
    });
  }

  this.animate = function() {
    deps.forEach(function(item){
      app.scenery[item].animate();
    });
  };

  this.drawTile = function(image, x, y){
    //Cartesian coords
    var carX = app.conf.offsetX + (size) + size * x;
    var carY = app.conf.offsetY - size + size * y;
    //Isometric coords
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;

    app.ctx.drawImage(image, isoX, isoY);
  };
}