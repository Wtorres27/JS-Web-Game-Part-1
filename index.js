function newImage(imageUrl, left, right, bottom) {
  let imageObject = document.createElement("img");
  imageObject.src = imageUrl;
  imageObject.style.position = "fixed";
  imageObject.style.left = left + "px";
  imageObject.style.right = right + "px";
  imageObject.style.bottom = bottom + "px";
  imageObject.style.width = "px";
  document.body.append(imageObject);
}
function grass(imageUrl, height, width) {
  let imageObject = document.createElement("img");
  imageObject.src = imageUrl;
  imageObject.c
  imageObject.style.position = "fixed";
  imageObject.style.height = height + "px";
  imageObject.style.width = width + "px";

  document.body.append(imageObject);
}

grass("assets/grass.png", "900", "1890");
newImage("", "", "", "");
newImage("assets/tree.png", "", "", "1");
newImage("assets/tree.png", "300", "", "");

newImage("assets/tree.png", "", "30", "");
newImage("assets/tree.png", "", "450", "30");
newImage("assets/well.png", "", "500", "500");
newImage("assets/tree.png", "", "500", "600");
newImage("assets/green-character.gif", "100", "20", "100");
newImage("assets/green-character.gif", "800", "900");

