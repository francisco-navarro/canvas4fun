app.events = new Events();

function Events(){
  setTimeout(animate, 1000);
  app.canvas.addEventListener('click', click, false);
  app.canvas.addEventListener('mousemove', mousemove, false);

  function click(ev){
    var cartCord = getMousePos(app.canvas, ev);
    var isoCord = app.getIsoCell(cartCord.x, cartCord.y);
    console.log('clicked ', isoCord);
    app.toolbar.selected(isoCord.x, isoCord.y);
  }

  function mousemove(ev){
    var cartCord = getMousePos(app.canvas, ev);
    var isoCord = app.getIsoCell(cartCord.x, cartCord.y);
    app.map.moveCursor(isoCord.x, isoCord.y);
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function animate(){
    //Esto se está renderizando siempre con requestAnimationFrame
    app.map.animate();
    if (app.scenery) {
      app.scenery.animate();
    }
    if (app.mobs) {
      app.mobs.animate();
    }
    window.requestAnimationFrame(animate);
  }
}