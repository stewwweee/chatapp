 window.onload = function() {
  document.getElementById("myText").focus();
  };
  function typo() {
  if (document.getElementById("myText").value.trim().length == 0) {
     document.getElementById("myText").focus();
    
  } else {
    var currentText = document.getElementById("demo").innerHTML;
    var x = '<div><p class=bubble>' + document.getElementById("myText").value + '</p></div>';
    document.getElementById("myText").value = "";
    var y = document.getElementById("demo").innerHTML = currentText + x;

    var z = document.getElementById('wrapper');
    z.scrollTop = z.scrollHeight;
    document.getElementById("myText").focus();  
  }
}
function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}

function touchScroll(id){
    if(isTouchDevice()){ //if touch events exist...
        var el=document.getElementById(id);
        var scrollStartPos=0;

        document.getElementById(id).addEventListener("touchstart", function(event) {
            scrollStartPos=this.scrollTop+event.touches[0].pageY;
            event.preventDefault();
        },false);

        document.getElementById(id).addEventListener("touchmove", function(event) {
            this.scrollTop=scrollStartPos-event.touches[0].pageY;
            event.preventDefault();
        },false);
}
} 
  
  var input = document.getElementById("myText");
  input.addEventListener("keyup", function(event) {
    event.preventDefault();
  if (event.keyCode === 13 && input.value.trim().length >0) {
      document.getElementById("btn-chat").click();

    }
  });
 
  