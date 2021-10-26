window.addEventListener("deviceorientation", on_device_orientation);
function on_device_orientation(evt)
{
var alpha = evt.alpha;
var beta = evt.beta;
var gamma = evt.gamma;
document.getElementById("a").innerHTML = "alpha = "+alpha;
document.getElementById("b").innerHTML = "beta = "+beta;
document.getElementById("c").innerHTML = "gamma = "+gamma;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle = "#000000";
context.beginPath();
context.fillRect(180, 150, evt.gamma, 50);
}
