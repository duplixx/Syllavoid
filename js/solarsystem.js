createAsteroid();

function createAsteroid(){
  for (i = 1; i <= 300; ++i) {
    const tag = document.createElement('div');
    tag.id = "asteroid"+i;
    tag.classList.add("asteroid");
    document.getElementById("asteroidBelt").appendChild(tag);
    var offsetAngle = Math.random() * 360;
    var offsetRadius = 150 + Math.random() * 65;
    document.getElementById("asteroid"+i).style.transform = "rotate("+Math.round(offsetAngle) +"deg)" + "translateX(" +Math.round(offsetRadius) +"px)" + "rotate(-" +Math.round(offsetAngle) +"deg)";
  }
  
  for (i = 1; i <= 900; ++i) {
    const div = document.createElement('div');
    div.id = "kuiplerAsteroid"+i;
    div.classList.add("asteroid");
    document.getElementById("kuiperBelt").appendChild(div);
    var offsetAngle = Math.random() * 360;
    var offsetRadius = 520 + Math.random() * 180;
    transform =  "rotate(" +Math.round(offsetAngle) +"deg)" + "translateX(" +Math.round(offsetRadius) +"px)" + "rotate(-" +Math.round(offsetAngle) +"deg)";
    document.getElementById("kuiplerAsteroid"+i).style.transform = transform;
  }
}
