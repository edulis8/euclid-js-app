$(document).ready(function(){

	$("#jbutton").click(function(){
		$("#javascript").html("<div class=jumbotron>var merge = function(array1, array2, callback){ 

    var mergedArr = [];
  
  	for(var i = 0; i<array1.length; i++){
  		mergedArr.push(callback(array1[i], array2[i]));
  	
  }

  return mergedArr;

};

//a2+b2 = c2

var euclid = function(coords1, coords2){
	var squaredDeltas = merge(coords1, coords2, function(a,b){
		return Math.abs((a-b)*(a-b));
	});

	var answer = Math.sqrt(squaredDeltas[0] + squaredDeltas[1]);

	return answer;
};</div>")


	})// end click



var merge = function(array1, array2, callback){ 

    var mergedArr = [];
  
  	for(var i = 0; i<array1.length; i++){
  		mergedArr.push(callback(array1[i], array2[i]));
  	
  }

  return mergedArr;

};

//a2+b2 = c2

var euclid = function(coords1, coords2){
	var squaredDeltas = merge(coords1, coords2, function(a,b){
		return Math.abs((a-b)*(a-b));
	});

	var answer = Math.sqrt(squaredDeltas[0] + squaredDeltas[1]);

	return answer;
};

var x = 12345;



}) // end of doc ready