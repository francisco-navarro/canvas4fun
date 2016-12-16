app.events = new Events();

function Events(){
  setTimeout(animate, 1000);
  app.canvas.addEventListener('click', clicked, false);

  function clicked(ev){
    var rect = app.canvas.getBoundingClientRect();
    var cartCord = getMousePos(app.canvas, ev);
    var isoCord = app.getIsoCell(cartCord.x, cartCord.y);
    // console.log(isoCord);
    app.ctx.clearRect(cartCord.x - 40, cartCord.y - 40, 64, 64);
    app.scenery.road.add(isoCord.x, isoCord.y);
  }

  function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();

      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
  }

  function animate(){
    if (app.scenery) {
      app.scenery.animate();
    }
    if (app.mobs) {
      app.mobs.animate();
    }
    window.requestAnimationFrame(animate);
  }
}