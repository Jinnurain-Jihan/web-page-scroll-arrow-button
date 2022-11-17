let arrow=document.getElementById("arrow");
window.onscroll=function(){
   let scroll=window.scrollY;
   if(scroll>=500){
    arrow.classList.add("arrow-active");
   }else{
    arrow.classList.remove("arrow-active");
   }
}