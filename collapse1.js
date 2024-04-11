var coll = document.getElementsByClassName("collapseA");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapseContent = this.nextElementSibling;
    if (collapseContent.style.maxHeight){
      collapseContent.style.maxHeight = null;
    } else {
      var x = "Hide Older Versions";
      collapseContent.style.maxHeight = collapseContent.scrollHeight + "px";
    } 
  });
}