var x = 5;
function drawTree(x) {
  for (var i = 1; i <= x; i++) {
    var star = "";
    for (var j = 1; j <= i; j++) {
      var star = (star += "*");
    }
    console.log(star);
  }
}
drawTree(5);