$( document ).ready(function() {
	// Handler for .ready() called.

	// add divs to the screen
	for (var i=0; i<=15; i++) {
		for (var j=0; j<=15; j++) {
			$("#container").append("<div class='square'></div>");
		}
	}

	// this functionality colors in each square by changing class
	$('#container').on('mouseover', '.square', function() {
	$(this).addClass('occupied'); 
	});

	// click on clear button
	$('#button').on('click', function() {
		var numBlocks = +window.prompt("How many grids per side?","16");
		if (numBlocks == 0) { 
			alert("Number of blocks can not be 0. That is not cricket");
			numBlocks = 16;
		}
		// remove old squares
		$('.square').remove();
		// calculate size of new squares
		var pxPerSquare = 960/numBlocks + 'px'; //960 / numBlocks;
		// add new divs
		for (i=0; i<numBlocks; i++) {
			for (j=0; j<numBlocks; j++) {
				$("#container").append("<div class='square'></div>");
			}
             
		}
		// add css for width and size for new squares    
		$('.square').css({'width': pxPerSquare, 
						'height': pxPerSquare});
		// what about border around grids. it is not really needed, because it may not be perfect, hide it after complete    
    
	});
});