var body = document.getElementsByTagName("body")[0];
openProcess();

function openProcess() {
  body.classList.add("show");
}

var section = document.querySelectorAll("section");
for (i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function() {
    body.classList.remove("openMenu");
  });
}
