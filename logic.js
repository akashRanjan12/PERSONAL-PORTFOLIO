var date = new Date();
document.querySelector(".date").innerHTML = date.getFullYear();
// circle on the name class
const cursor = document.querySelector(".cursor");
const nameBox = document.querySelector(".name");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

nameBox.addEventListener("mouseenter", () => {
  cursor.style.opacity = 1; // Show orange cursor
});

nameBox.addEventListener("mouseleave", () => {
  cursor.style.opacity = 0; // Hide cursor outside
});

// 2nd circle on the name class
const nameBox1 = document.querySelector(".name1");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

nameBox1.addEventListener("mouseenter", () => {
  cursor.style.opacity = 1; // Show orange cursor
});

nameBox1.addEventListener("mouseleave", () => {
  cursor.style.opacity = 0; // Hide cursor outside
});
var section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach((element) => {
    var top = window.scrollY;
    var offset = element.offsetTop - 340;
    var height = element.offsetHeight;
    if (top >= offset && top < offset + height) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".sec-1");
  container.classList.add("show");
});
// Remove the event listener to prevent further animations
document.removeEventListener("DOMContentLoaded", arguments.collee);

// function vis() {
//   document.querySelector(".bug-rep-cont").style.display = "flex";
// }
function vis() {
  let bugRepCont = document.querySelector(".bug-rep-cont");
  let cut = document.querySelector(".cross");
  let bug = document.querySelector(".BugButton");
  let sub = document.querySelector(".sub");
  if (bug && bugRepCont) {
    // bugRepCont.style.display = "flex";
    bug.addEventListener("click", function () {
      bugRepCont.style.display = "flex";
    });
  }
  if (cut && bugRepCont) {
    // bugRepCont.style.display = "none";
    cut.addEventListener("click", function () {
      bugRepCont.style.display = "none";
    });
  }
}
