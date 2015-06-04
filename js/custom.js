function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.marginTop == '11px'){
  	  e.style.marginTop = '-51px';
   }
   else{
  	  e.style.marginTop = '11px';
   }
}