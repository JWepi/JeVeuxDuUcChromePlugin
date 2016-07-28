
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
			
			var audio = new Audio('../audio/Je veux du UC.mp3');
			
			audio.onended = function(){
				canplay = true;
			};
			
			audio.play();
		}
	}