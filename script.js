function dosquare(){
  var dd1=document.getElementById("c1");
  var slider=document.getElementById("sldr");
  
  var size=slider.value;
  var ctx=dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle="yellow";
  ctx.fillRect(10,10,size,size);
  
  
}
function docolor(){
  var cc1=document.getElementById("c1");
  var colorS=document.getElementById("clr");
  var color=colorS.value;
  cc1.style.backgroundColor=color;
}