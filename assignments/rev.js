function myReverse(e) {
	var output = document.getElementById("output");
	var num = document.getElementById("num").value;

	if (num.match(/^[0-9]+$/) ) {

		var revNum = num.split("").reverse().join("");
		output.innerHTML = revNum;
	}
	else
	{
		output.innerHTML = "Please Enter a number"
	}
	
}