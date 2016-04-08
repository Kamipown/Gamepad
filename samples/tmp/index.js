var gamepad_div = document.getElementById("gamepad");

function init()
{
	center_gamepad_div();
}

function center_gamepad_div()
{
	gamepad_div.style.left = (window.innerWidth - gamepad_div.clientWidth) / 2 + "px";
	gamepad_div.style.top = (window.innerHeight - gamepad_div.clientHeight) / 2 + "px";
}

window.onresize = function()
{
	center_gamepad_div();
}