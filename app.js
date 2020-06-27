var directionVal = 0;

function next() {
  if (directionVal == 0) {
    document.getElementById("john").style.display = "block";
    document.getElementById("tanya").style.display = "none";
    directionVal += 1;
  } else {
    document.getElementById("john").style.display = "none";
    document.getElementById("tanya").style.display = "block";
    directionVal = 0;
  }
}


function prev() {
  if (directionVal == 0) {
    document.getElementById("tanya").style.display = "none";
    document.getElementById("john").style.display = "block";
    directionVal += 1;
  } else {
    document.getElementById("john").style.display = "none ";
    document.getElementById("tanya").style.display = "block";
    directionVal = 0;
  }
}
