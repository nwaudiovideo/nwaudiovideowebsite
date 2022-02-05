var open = false;

let closeBtn = document.querySelector("#nw-side-bar-activator");
let sidebar = document.querySelector(".nw-side-bar");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

function menuBtnChange() {
    if (open) {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      open = false;
    } else {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      open = true;
    }
}