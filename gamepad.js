var gamepad;
var buttons = [];
buttons[0] = document.getElementById("bottom_button");
buttons[1] = document.getElementById("right_button");
buttons[2] = document.getElementById("left_button");
buttons[3] = document.getElementById("top_button");
buttons[4] = document.getElementById("left_trigger");
buttons[5] = document.getElementById("right_trigger");
buttons[6] = document.getElementById("left_big_trigger");
buttons[7] = document.getElementById("right_big_trigger");
buttons[8] = document.getElementById("select_button");
buttons[9] = document.getElementById("start_button");
buttons[10] = document.getElementById("left_joystick");
buttons[11] = document.getElementById("right_joystick");
buttons[12] = document.getElementById("top_arrow");
buttons[13] = document.getElementById("bottom_arrow");
buttons[14] = document.getElementById("left_arrow");
buttons[15] = document.getElementById("right_arrow");

window.addEventListener("gamepadconnected", function(e)
{
	gamepad = navigator.getGamepads()[e.gamepad.index];

	console.log("Contrôleur n°%d connecté : %s. %d boutons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
	gamepad.truc = "lol";
	console.log(gamepad.buttons);
	loop_interval = setInterval(loop, 16);
});

window.addEventListener("gamepaddisconnected", function(e)
{
	console.log("Contrôleur n°%d déconnecté : %s", e.gamepad.index, e.gamepad.id);
	console.log(gamepad);
});

function loop()
{
	for (var i = 0; i < gamepad.buttons.length - 1; i++)
	{
		if (gamepad.buttons[i].pressed)
			buttons[i].style.opacity = "0.3";
		else
			buttons[i].style.opacity = "1";
	}

}
var loop_interval;