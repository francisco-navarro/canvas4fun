app.mobs = new Mobs();

function Mobs() {
  var deps = [
    'cars'
  ];
  var buffer;

  this.animate = animate;
  this.add = add;

  function animate() {
    buffer.forEach(function(item){
      app.buffer.animate();
    });
    app.mobs.cars.animate();
  }

  function add() {
  }

  function init() {
    buffer = [];
    deps.forEach(function(item){
      SystemJS.import('mobs/' + item + '.js');
    });
  }

  init();
}