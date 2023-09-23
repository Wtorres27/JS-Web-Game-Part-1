function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

function newItem(url, left, bottom) {
  let object = newImage(url, left, bottom);

  object.addEventListener("dblclick", () => {
    object.remove();
  });
}
function tile(url, left, bottom, width, height) {
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      newImage(url, left + w * "100", bottom + h * "100");
    }
  }
}

let horizon = window.innerHeight / "1.75";
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

tile(
  "assets/sky.png",
  "0",
  horizon,
  window.innerWidth / "100",
  heightOfSky / 100
);
tile(
  "assets/grass.png",
  "0",
  "0",
  window.innerWidth / "100",
  heightOfGrass / 100
);

newImage("assets/green-character.gif", "100", "100");

// NON-MOVEABLE OBJECTS V
newImage("assets/boulder.png", "00", "500");
newImage("assets/boulder.png", "1750", "500");
newImage("assets/crate.png", "150", "200");
newImage("assets/pillar.png", "350", "100");
newImage("assets/pillar.png", "650", "100");
newImage("assets/pillar.png", "950", "100");
newImage("assets/well.png", "530", "470");
newImage("assets/rock.png", "", "480");
newImage("assets/rock.png", "", "460");
newImage("assets/rock.png", "", "440");
newImage("assets/rock.png", "", "420");
newImage("assets/rock.png", "", "400");
newImage("assets/rock.png", "", "380");
newImage("assets/rock.png", "", "360");
newImage("assets/rock.png", "", "340");
newImage("assets/rock.png", "", "320");
newImage("assets/rock.png", "", "300");
newImage("assets/rock.png", "", "280");
newImage("assets/rock.png", "", "260");
newImage("assets/rock.png", "", "240");
newImage("assets/rock.png", "", "220");
newImage("assets/rock.png", "", "200");
newImage("assets/rock.png", "", "180");
newImage("assets/rock.png", "", "200");
newImage("assets/rock.png", "", "160");
newImage("assets/rock.png", "", "140");
newImage("assets/rock.png", "", "120");
newImage("assets/rock.png", "", "100");
newImage("assets/rock.png", "", "80");
newImage("assets/rock.png", "", "60");
newImage("assets/rock.png", "", "40");
newImage("assets/rock.png", "", "20");
newImage("assets/rock.png", "", "0");
newImage("assets/rock.png", "1800", "480");
newImage("assets/rock.png", "1800", "460");
newImage("assets/rock.png", "1800", "440");
newImage("assets/rock.png", "1800", "420");
newImage("assets/rock.png", "1800", "400");
newImage("assets/rock.png", "1800", "380");
newImage("assets/rock.png", "1800", "360");
newImage("assets/rock.png", "1800", "340");
newImage("assets/rock.png", "1800", "320");
newImage("assets/rock.png", "1800", "300");
newImage("assets/rock.png", "1800", "280");
newImage("assets/rock.png", "1800", "260");
newImage("assets/rock.png", "1800", "240");
newImage("assets/rock.png", "1800", "220");
newImage("assets/rock.png", "1800", "200");
newImage("assets/rock.png", "1800", "180");
newImage("assets/rock.png", "1800", "200");
newImage("assets/rock.png", "1800", "160");
newImage("assets/rock.png", "1800", "140");
newImage("assets/rock.png", "1800", "120");
newImage("assets/rock.png", "1800", "100");
newImage("assets/rock.png", "1800", "80");
newImage("assets/rock.png", "1800", "60");
newImage("assets/rock.png", "1800", "40");
newImage("assets/rock.png", "1800", "20");
newImage("assets/rock.png", "1800", "0");







// TREES
newImage("assets/tree.png", "800", "300");
newImage("assets/tree.png", "800", "100");
newImage("assets/pine-tree.png", "200", "500");
newImage("assets/pine-tree.png", "400", "500");
newImage("assets/pine-tree.png", "600", "500");
newImage("assets/pine-tree.png", "800", "500");
newImage("assets/pine-tree.png", "1000", "500");
newImage("assets/pine-tree.png", "1200", "500");
newImage("assets/pine-tree.png", "1400", "500");
newImage("assets/pine-tree.png", "1600", "500");


// DOUBLE CLICKABLE
newItem("assets/sword.png", "550", "480");
newItem("assets/shield.png", "240", "250");
newItem("assets/staff.png", "650", "100");
