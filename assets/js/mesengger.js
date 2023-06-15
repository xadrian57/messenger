var overlay = document.getElementById("overlay");

window.addEventListener("load", function () {
  overlay.style.display = "none";
});

function copyUsername() {
  var copyText = document.getElementById("copyUsername");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  if (sessionStorage.getItem("mode") == "dark") {
    Swal.fire({
      position: "center",
      icon: "success",
      background: "#212529",
      title: "<h4 class='darkmode-text'>Link successfully copied</h4>",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "success",
      background: "#ffffff",
      title: "<h4>Link successfully copied</h4>",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

var checkbox = document.getElementById("darkmode");

if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  nodark();
}

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    darkmode();
  } else {
    nodark();
  }
});

function darkmode() {
  document.body.classList.add("darkmode");
  checkbox.checked = true;
  sessionStorage.setItem("mode", "dark");
}

function nodark() {
  document.body.classList.remove("darkmode");
  checkbox.checked = false;
  sessionStorage.setItem("mode", "light");
}

function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("profile-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}
