// Move the head around based on the mouse position.

$( document ).on( "mousemove", function( event ) {
	for (i = 1; i <= 14; i++) { 
    	
		docWidth = $( document ).width();
		docHeight = $( document ).height();
		lowerRange = 6;
		upperRange = 6;
		leftOffset = convertToRange(event.pageX, [0, docWidth], [-lowerRange * (14 - i),upperRange * (14 - i)]);
		topOffset = convertToRange(event.pageY, [0, docHeight], [-lowerRange * (14 - i),upperRange * (14 - i)]);
		
    	$( "#face" + i ).css({
			left: leftOffset,
			top:  topOffset
		});
	}
});


// Color shifting the background, light animations

$( "#work").click(function(){
	$( " #close ").show(300);
	$( " body ").animate({backgroundColor : "#85CFD0"}, 'slow');
	$( ".button ").animate({color : "#85CFD0"}, 'slow');
	$( " #name ").animate({color : "#85CFD0"}, 'slow');
	$( " #contactTextBox ").hide(300);
	$( " #aboutTextBox ").hide(300);
	$( " #workTextBox ").show(300);
});

$( "#about").click(function(){
	$( " #close ").show(300);
	$( " body ").animate({backgroundColor : "#D08585"}, 'slow');
	$( " .button ").animate({color : "#D08585"}, 'slow');
	$( " #name ").animate({color : "#D08585"}, 'slow');
	$( " #contactTextBox ").hide(300);
	$( " #workTextBox ").hide(300);
	$( " #aboutTextBox ").show(300);
});

$( "#contact").click(function(){
	$( " #close ").show(300);
	$( " .button ").animate({color : "#F39A70"}, 'slow');
	$( " body ").animate({backgroundColor : "#F39A70"}, 'slow');
	$( " #name ").animate({color : "#F39A70"}, 'slow');
	$( " #workTextBox ").hide(300);
	$( " #aboutTextBox ").hide(300);
	$( " #contactTextBox ").show(300);
});

$( "#close").click(function(){
	$( " #close ").hide(300);
	$( " body ").animate({backgroundColor : "#F0AF6F"}, 'slow');
	$( " .button ").animate({color : "#F0AF6F"}, 'slow');
	$( " #name ").animate({color : "#F0AF6F"}, 'slow');
	$( " #workTextBox ").hide(300);
	$( " #aboutTextBox ").hide(300);
	$( " #contactTextBox ").hide(300);
});


// Drag the head around!
$(function() {
    $( "#faceContainer" ).draggable();
  });


// Utility function to map one range of numbers to another.

function convertToRange(value, srcRange, dstRange){
  // value is outside source range return
  if (value < srcRange[0] || value > srcRange[1]){
    return NaN; 
  }

  var srcMax = srcRange[1] - srcRange[0],
      dstMax = dstRange[1] - dstRange[0],
      adjValue = value - srcRange[0];

  return (adjValue * dstMax / srcMax) + dstRange[0];

}