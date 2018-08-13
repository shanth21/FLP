window.onload=function(){

 	var input1 = document.getElementById("input1");
	var input2 = document.getElementById("input2");
	var and = document.getElementById("and");
	var or = document.getElementById("or");
	var not = document.getElementById("not");
	var output = document.getElementById("output");

	var match1 = input1.value.match(/[^0-1]+$/);
	var match2 = input2.value.match(/[^0-1]+$/);

	if(!match1 && !match2)
	
	{
		output.innerHTML = "Enter number in binary"
	}
	else
	{ 

	and.addEventListener("click", function(){
		var result = (input1.value & input2.value);
		output.innerHTML = "The result of AND operation is " + result;
	});


	or.addEventListener("click", function(){
		var result = (input1.value | input2.value);
		output.innerHTML = "The result of OR operation is " + result;
	});

	not.addEventListener("click", function(){
		var result = !(input1.value);
		output.innerHTML = "The result of NOT operation is " + result;
	});
	}
	


}	