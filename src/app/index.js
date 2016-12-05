var app = {
  init: init
};

function init(){
  var dependencies = [
    'config.js',
    'core/draw.js',
    'core/events.js',
    'core/toolbar.js',
    'core/map.js',
    'scenery/main.js',
    'mobs/main.js'
  ];
  SystemJS.config({
    baseURL: '/app'
  });
  dependencies.reduce(function(prev, cur) {
    return prev.then(SystemJS.import(cur));
  }, SystemJS.import(dependencies[0]));
}