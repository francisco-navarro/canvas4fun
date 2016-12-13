app.events = new Events();

function Events(){
  app.canvas.addEventListener('click', clicked, false);

  function clicked(ev){
    var rect = app.canvas.getBoundingClientRect();
    var isoC = getMousePos(app.canvas, ev);

    console.log(app.getIsoCell(isoC.x, isoC.y));
  }

  function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();

      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }
}