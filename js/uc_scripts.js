
	var canplay = true;
	
	(function() {
		document.onmousemove = handleMouseMove;
		function handleMouseMove(event) {
			MoiVeuxDuUC();
		}
	})();
	
	(function() {
		document.onclick = handleMouseClic;
		function handleMouseClic(event) {
			MoiVeuxDuUC();
		}
	})();

	function MoiVeuxDuUC()
	{
		if (canplay)
		{
			canplay = false;
			
			var audio = new Audio('https://dl.dropboxusercontent.com/s/j233q4gp20q0o8u/Je%20veux%20du%20UC.mp3');
			
			audio.onended = function(){
				canplay = true;
			};
			
			audio.play();
		}
	}