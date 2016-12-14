var app = {
  init: init
};

function init(){
  SystemJS.config({
    baseURL: '/app'
  });
  SystemJS.import('config.js');
  SystemJS.import('core/draw.js');
  SystemJS.import('core/events.js');
  SystemJS.import('core/map.js');
}