
$(document).ready(function() {
  
 /* define merge function, which takes two arrays of numbers of identical length and a callback function */


var merge = function(array1, array2, callback){ 

    var mergedArr = [];
  
  	for(var i = 0; i<array1.length; i++){
  		mergedArr.push(callback(array1[i], array2[i]));
  	
  }

  return mergedArr;

};

//a2+b2 = c2
 /* now, use your merge function to complete the euclid function. Euclid should take two arrays, each of which has an equal number of numerical elements, and return the euclidean distance between them. (This distance is found using the pythagorean theorem a*a + b*b = c*c) */

var euclid = function(coords1, coords2){
	var squaredDeltas = merge(coords1, coords2, function(a,b){
		return Math.abs((a-b)*(a-b));
	});

	var answer = Math.sqrt(squaredDeltas[0] + squaredDeltas[1]);

	return answer;
};


//JQUERY

$(".show").click(function(event) {
  $(".demo").fadeIn();
});




});


