function loop()
{
	var inputs = gamepad.get_states()[0];
	document.getElementById("face_1").innerHTML = inputs.face.face_1;
	document.getElementById("face_2").innerHTML = inputs.face.face_2;
	document.getElementById("face_3").innerHTML = inputs.face.face_3;
	document.getElementById("face_4").innerHTML = inputs.face.face_4;

	document.getElementById("dpad_up").innerHTML = inputs.dpad.up;
	document.getElementById("dpad_down").innerHTML = inputs.dpad.down;
	document.getElementById("dpad_left").innerHTML = inputs.dpad.left;
	document.getElementById("dpad_right").innerHTML = inputs.dpad.right;

	document.getElementById("lj_pressed").innerHTML = inputs.joystick.left.pressed;
	document.getElementById("lj_horizontal").innerHTML = (Math.floor(inputs.joystick.left.horizontal * 100)) / 100;
	document.getElementById("lj_vertical").innerHTML = (Math.floor(inputs.joystick.left.vertical * 100)) / 100;
	document.getElementById("rj_pressed").innerHTML = inputs.joystick.right.pressed;
	document.getElementById("rj_horizontal").innerHTML = (Math.floor(inputs.joystick.right.horizontal * 100)) / 100;
	document.getElementById("rj_vertical").innerHTML = (Math.floor(inputs.joystick.right.vertical * 100)) / 100;

	document.getElementById("ls_button").innerHTML = inputs.shoulder.left.button;
	document.getElementById("ls_trigger").innerHTML = (Math.floor(inputs.shoulder.left.trigger * 100)) / 100;
	document.getElementById("rs_button").innerHTML = inputs.shoulder.right.button;
	document.getElementById("rs_trigger").innerHTML = (Math.floor(inputs.shoulder.right.trigger * 100)) / 100;

	document.getElementById("start").innerHTML = inputs.special.start;
	document.getElementById("select").innerHTML = inputs.special.select;
}
var loop_interval = setInterval(loop, 16);