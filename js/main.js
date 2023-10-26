function openmenu() {
  var x = document.getElementById("secondarymenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function block_capture() {
  html2canvas(document.querySelector(".Finish-card"), {
    allowTaint: true,
    useCORS: true,
  }).then(function (canvas) {
    a = document.createElement("a");
    a.href = canvas
      .toDataURL("image/jpeg", 0.92)
      .replace("image/jpeg", "image/octet-stream");
    a.download = "card-image.jpg";
    a.click();
  });
}
