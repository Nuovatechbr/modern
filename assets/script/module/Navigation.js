import { Loader } from "./Loader.js";

export const Navigation = {

    submenu: (option) => {
        let navOpt = option.parentNode;
        navOpt.classList.toggle('show');
        option.classList.toggle("show");
    },

    toggle: () => {
        let menu = document.querySelector(".modern-template-sidebar");
        let btnMenuIcon = document.getElementById("modern-template-btn-menu-icon");
        if (btnMenuIcon.classList.contains("icon-menu-close")) {
            btnMenuIcon.classList.remove("icon-menu-close");
            btnMenuIcon.classList.add("icon-menu-open");
        } else {
            btnMenuIcon.classList.remove("icon-menu-open");
            btnMenuIcon.classList.add("icon-menu-close");
        }
        menu.classList.toggle("hide");
    }
}

// var a = document.querySelectorAll(".modern-navigation-child");
// a.forEach(option => {
//     option.addEventListener("click", () => {
//         Loader.show();
//     })
// });