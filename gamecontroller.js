var gamepad =
{
	gamepads: [],
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
