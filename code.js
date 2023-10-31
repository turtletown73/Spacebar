document.body.onkeyup = function(e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    document.getElementById("counter").innerHTML++;
  }
}
