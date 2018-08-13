function day(){

			  var d = new Date(document.getElementById("dat").value);
    var weekDays = new Array(7);
    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    var n = weekDays[d.getDay()];
    if(n !== undefined){
    document.getElementById("result").innerHTML =n;
	}
    else
    document.getElementById("result").innerHTML = "Enter the date";
}
