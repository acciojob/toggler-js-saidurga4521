//your JS code here. If required.
const toggles=document.querySelectorAll('.toggle');
let selected=[];
toggles.forEach(toggle=>{
	toggle.addEventListener('change',()=>{
		if(toggle.checked){
			selected.push(toggle);
			if(selected.length>2){
				const oldest=selected[1];
				oldest.checked=false;
			}
		}else{
			selected=selected.filter(t => t!==toggle);
			}
	});
});
