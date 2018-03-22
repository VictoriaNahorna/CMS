let input = document.getElementById('clickerInput'),
	button = document.getElementById('clickerButton'),
	game = {
		score: 0,
		start: function() {
			button.innerHTML = 'Click me';
			game.score = 0;
			button.onclick = game.click;
			setTimeout(game.finnish, 10000);
		},
		click: function() {
			game.score++;
			input.value = game.score;
		},
		finnish: function() {
			alert(game.score);
			button.innerHTML = 'Start';
			button.onclick = game.start;
		}
	}
button.onclick = game.start;

