var gamepad =
{
	gamepads: [],
	joystick_min: 0.1,
	ongamepadconnected: null,
	ongamepaddisconnected: null,

	init: function()
	{
		this.handle_events();
	},

	is_connected: function(i)
	{
		if (this.gamepads[i])
			return (true);
		return (false);
	},

	get_gamepad_infos: function(i)
	{
		if (this.gamepads[i])
		{
			var infos = {};

			infos.mame = this.gamepads[i].id;
			infos.buttons = this.gamepads[i].buttons.length;
			infos.axes = this.gamepads[i].axes.length;
			return (infos);
		}
		return (-1);
	},

	get_states: function()
	{
		var gamepad_inputs = [];

		for (var i = 0; i < this.gamepads.length; ++i)
		{
			if (this.gamepads[i])
			{
				var inputs = {};

				inputs.face = {};
				inputs.face.face_1 = this.gamepads[i].buttons[0].pressed;
				inputs.face.face_2 = this.gamepads[i].buttons[1].pressed;
				inputs.face.face_3 = this.gamepads[i].buttons[2].pressed;
				inputs.face.face_4 = this.gamepads[i].buttons[3].pressed;

				inputs.dpad = {};
				inputs.dpad.up = this.gamepads[i].buttons[12].pressed;
				inputs.dpad.down = this.gamepads[i].buttons[13].pressed;
				inputs.dpad.left = this.gamepads[i].buttons[14].pressed;
				inputs.dpad.right = this.gamepads[i].buttons[15].pressed;

				inputs.joystick = {};
				inputs.joystick.left = {};
				inputs.joystick.left.pressed = this.gamepads[i].buttons[10].pressed;
				inputs.joystick.left.horizontal = this.gamepads[i].axes[0];
				inputs.joystick.left.vertical = this.gamepads[i].axes[1];
				inputs.joystick.right = {};
				inputs.joystick.right.pressed = this.gamepads[i].buttons[11].pressed;
				inputs.joystick.right.horizontal = this.gamepads[i].axes[2];
				inputs.joystick.right.vertical = this.gamepads[i].axes[3];

				inputs.shoulder = {};
				inputs.shoulder.left = {};
				inputs.shoulder.left.button = this.gamepads[i].buttons[4].pressed;
				inputs.shoulder.left.trigger = this.gamepads[i].buttons[6].value;
				inputs.shoulder.right = {};
				inputs.shoulder.right.button = this.gamepads[i].buttons[5].pressed;
				inputs.shoulder.right.trigger = this.gamepads[i].buttons[7].value;

				inputs.special = {};
				inputs.special.start = this.gamepads[i].buttons[9].pressed;
				inputs.special.select = this.gamepads[i].buttons[8].pressed;

				gamepad_inputs.push(inputs);
			}
			else
				gamepad_inputs.push(null);
		}
		return (gamepad_inputs);
	},

	set_joystick_min: function(n)
	{
		this.joystick_min = n;
	},

	handle_events: function()
	{
		var self = this;
		window.addEventListener("gamepadconnected", function(e)
		{
			self.gamepads = navigator.getGamepads();
			for (var i = 0; i < self.gamepads.length; ++i)
			{
				if (!self.gamepads[i].connected)
					self.gamepads[i] = null;
			}
			if (self.ongamepadconnected)
			{
				var ev = {index: e.gamepad.index};
				self.ongamepadconnected(ev);
			}
		});
		window.addEventListener("gamepaddisconnected", function(e)
		{
			self.gamepads = navigator.getGamepads();
			for (var i = 0; i < self.gamepads.length; ++i)
			{
				if (!self.gamepads[i].connected)
					self.gamepads[i] = null;
			}
			if (self.ongamepaddisconnected)
			{
				var ev = {index: e.gamepad.index};
				self.ongamepaddisconnected(ev);
			}
		});
	}
}
gamepad.init();

gamepad.ongamepadconnected = function(e)
{
	console.log("Player " + e.index + " connected.");
	console.log(gamepad.get_states());
}
