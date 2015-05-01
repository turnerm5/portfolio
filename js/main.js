$( document ).on( "mousemove", function( event ) {
	for (i = 1; i <= 14; i++) { 
    	
		docWidth = $( document ).width();
		docHeight = $( document ).height();
		lowerRange = 8;
		upperRange = 6;
		leftOffset = convertToRange(event.pageX, [0, docWidth], [-lowerRange * (14 - i),upperRange * (14 - i)]);
		topOffset = convertToRange(event.pageY, [0, docHeight], [-lowerRange * (14 - i),upperRange * (14 - i)]);
		
    	$( "#face" + i ).css({
			left: leftOffset,
			top:  topOffset
		});
	}
});


$( "#work").click(function(){
	$( "#close").show(250);
	$( "body ").animate({backgroundColor : "#85CFD0"}, 'fast');
	$( ".button ").animate({color : "#85CFD0"}, 'fast');
	$( "#name").animate({color : "#85CFD0"}, 'fast');
	$( "#contactTextBox").hide(250);
	$( "#aboutTextBox").hide(250);
	$( "#workTextBox").show(250);
});

$( "#about").click(function(){
	$( "#close").show(250);
	$( "body ").animate({backgroundColor : "#D08585"}, 'fast');
	$( ".button ").animate({color : "#D08585"}, 'fast');
	$( "#name").animate({color : "#D08585"}, 'fast');
	$( "#contactTextBox").hide(250);
	$( "#workTextBox").hide(250);
	$( "#aboutTextBox").show(250);
});

$( "#contact").click(function(){
	$( "#close").show(250);
	$( ".button ").animate({color : "#F39A70"}, 'fast');
	$( "body ").animate({backgroundColor : "#F39A70"}, 'fast');
	$( "#name").animate({color : "#F39A70"}, 'fast');
	$( "#workTextBox").hide(250);
	$( "#aboutTextBox").hide(250);
	$( "#contactTextBox").show(250);
});

$( "#close").click(function(){
	$( "#close").hide(250);
	$( "body ").animate({backgroundColor : "#F0AF6F"}, 'fast');
	$( ".button ").animate({color : "#F0AF6F"}, 'fast');
	$( "#name").animate({color : "#F0AF6F"}, 'fast');
	$( "#workTextBox").hide(250);
	$( "#aboutTextBox").hide(250);
	$( "#contactTextBox").hide(250);
});

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