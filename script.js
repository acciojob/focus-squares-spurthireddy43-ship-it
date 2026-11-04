//your JS code here. If required.
const boxes=document.querySelectorAll("box")
 boxes.forEach((box)=>{
	 box.addEventListener("mouseover",(e)=>{
		 console.log(e.target.id)
		 changeColor(e.target.id)
		 })
	 box.addEvenListener("mouseout" ,(e)=>{
		 boxes.forEach(box)=>{
			 box.style.background=`#E6E6FA`
		 })
	 })
 })
function changeColor(hoveredBoxId){
	boxes.forEach((box)=>{
		if(box.id!=hoveredBoxId){
			box.style.backgroundColor=`#6F4E37`
		}
	})
}
