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