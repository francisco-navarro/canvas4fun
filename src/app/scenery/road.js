/* eslint no-magic-numbers: 0 */
app.scenery.road = new Road();

function Road() {
  var roadX = new Image();
  var roadY = new Image();
  var crossRoads = new Image();
  var curve1 = new Image();
  var curve2 = new Image();
  var curve3 = new Image();
  var curve4 = new Image();

  var roadsMatrix = [];
  var roadsTiles = [];

  this.animate = animate;
  this.draw = draw;
  this.add = add;
  this.getRoad = getRoad;

  this.roadsMatrix = roadsMatrix;

  function init(){
    loadImages();
    for(var i = 0; i < app.conf.map.height; i++){
      roadsMatrix[i] = new Array(app.conf.map.width);
      roadsTiles[i] = new Array(app.conf.map.width);
    }
  }

  function animate(){
    this.draw(roadsMatrix);
  }

  function add(x, y) {
    if (x >= app.conf.map.height || y >= app.conf.map.width){
      return;
    }
    for(var i = 0; i < app.conf.map.height; i++){
      roadsTiles[i] = new Array(app.conf.map.width);
    }
    roadsMatrix[x][y] = 1;
  }

  function loadImages(){
    roadX.src = 'img/roadX.png';
    roadY.src = 'img/roadY.png';
    crossRoads.src = 'img/crossRoads.png';
    curve1.src = 'img/curve1.png';
    curve2.src = 'img/curve2.png';
    curve3.src = 'img/curve3.png';
    curve4.src = 'img/curve4.png';
  }

  function draw(way){
    var i, j, curve;

    for(i = 0; i < way.length; i++){
      for(j = 0; j < way[i].length; j++){
        try{
          if (roadsTiles[i][j]) {
            app.scenery.drawTile(roadsTiles[i][j], i, j);
          } else if (way[i][j] === 1) {
            curve = isCurve(way, i, j);
            if (curve) {
              roadsTiles[i][j] = curve;
              app.scenery.drawTile(curve, i, j);
            } else if (way[i + 1] && way[i + 1][j] || way[i - 1] && way[i - 1][j]) {
              if (way[i][j + 1] || way[i][j - 1]){
                //Tiene en el eje X e Y
                roadsTiles[i][j] = crossRoads;
                app.scenery.drawTile(crossRoads, i, j);
              } else {
                //Tiene en el eje X
                roadsTiles[i][j] = roadX;
                app.scenery.drawTile(roadX, i, j);
              }
            } else if (way[i][j + 1] || way[i][j - 1]) {
              roadsTiles[i][j] = roadY;
              app.scenery.drawTile(roadY, i, j);
            }
          }
        } catch(err){
          debugger;
        }
      }
    }
  }

  function isCurve(way, i, j){
    if (i === 0 || j === 0) {
      return false;
    }
    var top = way[i - 1] ? way[i - 1][j] : 0;
    var bottom = way[i + 1] ? way[i + 1][j] : 0;
    var right = way[i][j - 1];
    var left = way[i][j + 1];
    var intersec = 0;

    if (bottom) {
      intersec++;
    }
    if (top) {
      intersec++;
    }
    if (right) {
      intersec++;
    }
    if (left) {
      intersec++;
    }
    if (intersec === 0){
      return roadX;
    }
    if (intersec === 2){
      if (top && right){
        return curve3;
      } else if (right && bottom) {
        return curve4;
      } else if (bottom && left) {
        return curve1;
      } else if (left && top) {
        return curve2;
      }
    }

    return false;
  }

  function getRoad(i, j){
    if (roadsTiles[i][j]){
      return roadsTiles[i][j].src.replace(/(.*\/)(.*)(\.\w+)/gm, '$2');
    }
  }


  init();
}