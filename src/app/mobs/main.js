app.mobs = new Mobs();

function Mobs() {
  var deps = [
    'cars'
  ];
  var buffer = [];

  this.animate = animate;
  this.buffer = buffer;

  function animate() {
    buffer.forEach(function(item){
      item.animate();
    });
  }

  function init() {
    deps.forEach(function(item){
      SystemJS.import('mobs/' + item + '.js');
    });
  }

  init();
}