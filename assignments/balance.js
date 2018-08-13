
window.onload = function(){
    var str=document.getElementById("bal");
    var button7=document.getElementById("btn7");
     var output=document.getElementById("test");

    button7.onclick= function(){
           var result=balancedParens(str.value)
        output.innerHTML=result;



         }  
var balancedParens = function(str) {
  var stack = [];
  var open = { '{': '}', '[': ']', '(': ')' };
  var closed = { '}': true, ']': true, ')': true };
  
  for (var i = 0; i < str.length; i ++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }
  
  return stack.length === 0;
};

}