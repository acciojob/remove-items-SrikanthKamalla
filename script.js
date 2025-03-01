//your JS code here. If required.
let colorSelect=document.getElementById("colorSelect");
let btn=document.querySelector("input");

btn.addEventListener("click",function () {
	let  input=colorSelect.selectedIndex;
	colorSelect.remove(input);	
})
