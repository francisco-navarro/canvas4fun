var app = {
  init: init
};
var PATH = 'app/';

function init(){
  load('config');
  load('core/draw');
  load('core/map');
}

function load(file) {
  var uri = PATH + file;
  if (!uri.match(/\.js/)) {
    uri += '.js';
  }
  $.getScript(uri);
}