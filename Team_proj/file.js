window.onload = function() {
	
	var button = document.getElementById("button");
	var list = document.getElementById("list");
	var myObj = [
	{
		name:"Raj",
		role:"Developer"
	},
	{
		name:"Kashyap",
		role:"Tester"
	},
	{
		name:"John",
		role:"Tech Support"
	},
	{
		name:"Varuni",
		role:"DevOps Engineer"
	},
	{
		name:"Pavan",
		role:"Team Lead"
	},
	]

for(var i=0;i<myObj.length;i++) { 
	var text = "<tr id=" + "id_" + (i + 1) +" class='table'> \
	<td>" + myObj[i].name + "</td>\
	<td>" + myObj[i].role + "</td>\
	</tr>";
	list.innerHTML += text;
	}

    button.onclick = function(event) {
 	var num_select = document.getElementById("num_select").value;
 	var rowId =  'id_' + num_select ;
 	var rowtable = document.getElementById(rowId);
 	for(var i=0;i<=myObj.length;i++) {
 	document.getElementsByClassName('table')[i].style.backgroundColor = "rgba(17, 17, 17, 0.6)";
   }
	var color_select = document.getElementById("color_select").value;
	rowtable.style.backgroundColor = color_select;
 }
}