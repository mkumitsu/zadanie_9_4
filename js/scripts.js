function drawTree(height) {
    for (var i = 1; i <= height; i++) {
        var star = "";
        for (var j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}
drawTree(5);