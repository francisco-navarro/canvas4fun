app.toolbar = new Toolbar();

function Toolbar() {

  var $toolbarComponent;
  var button;
  var links = {
    'road': 'scenery.road.add',
    'car': 'mobs.cars.add'
  };

  this.selected = selected;

  function init() {
    $toolbarComponent = $('#toolbar');
    $toolbarComponent.find('i').click(click);
  }

  function click(ev) {
    var $target = $(ev.currentTarget);
    button = ev.currentTarget.getAttribute('id');
    $toolbarComponent.find('i').removeClass('selected');
    $target.addClass('selected');
  }

  function selected(x, y) {
    if (links[button]) {
      var link = links[button].split('.');
      var fn = link.reduce(function(prev, cur) {
        return prev[cur];
      }, app);
      if (typeof fn === 'function'){
        fn(x, y);
      }
    }
  }

  init();
};