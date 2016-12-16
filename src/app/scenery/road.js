/* eslint no-magic-numbers: 0 */
app.scenery.roads = Roads();

function Roads(){
  var roadX = new Image();
  var roadY = new Image();
  var curve1 = new Image();
  var curve2 = new Image();
  var curve3 = new Image();
  var curve4 = new Image();

  init();

  var roadsMatrix = [
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  function init(){
    roadX.src = 'images/roadX.png';
    roadY.src = 'images/roadY.png';
    curve1.src = 'images/curve1.png';
    curve2.src = 'images/curve2.png';
    curve3.src = 'images/curve3.png';
    curve4.src = 'images/curve4.png';
    
    //  draw(roadsMatrix);
    example();
  }

  function draw(matrix){
    var i,j;
    
    for(i=0; i<matrix.length; i++){
      for(j=0; j<matrix.length; j++){
        if (matrix[i][j]) {
          // app.scenery.drawTile(roadX, i, j);
          if (matrix[i+1][j]){
            app.scenery.drawTile(roadX, i, j);
          } else if (matrix[i][j+1]) {
            app.scenery.drawTile(roadY, i, j);
          } else if (matrix[i+1][j+1]) {
            app.scenery.drawTile(curve2, i, j);
          }
        }
      }
    }
  }

  function example(){
    app.scenery.drawTile(roadX, 0, 2);
    app.scenery.drawTile(roadX, 1, 2);
    app.scenery.drawTile(roadX, 2, 2);
    app.scenery.drawTile(roadX, 3, 2);
    app.scenery.drawTile(roadX, 4, 2);
    app.scenery.drawTile(roadX, 4, 6);

    app.scenery.drawTile(curve2, 5, 2);
    app.scenery.drawTile(curve3, 5, 6);
    app.scenery.drawTile(curve4, 3, 6);
    app.scenery.drawTile(roadY, 3, 5);
    app.scenery.drawTile(curve1, 3, 4);

    app.scenery.drawTile(roadY, 5, 3);
    app.scenery.drawTile(roadY, 5, 4);
    app.scenery.drawTile(roadY, 5, 5);

    app.scenery.drawTile(roadX, 5, 2);
    app.scenery.drawTile(roadX, 6, 2);
    app.scenery.drawTile(roadX, 7, 2);
    app.scenery.drawTile(roadX, 8, 2);
  }
}