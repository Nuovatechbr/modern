import { Dialog } from "./module/Dialog.js";
import { Navigation } from "./module/Navigation.js";

(document.getElementById("modern-template-btn-menu")).addEventListener("click", () => {
    Navigation.toggle();
});

(document.getElementById("modern-template-btn-user")).addEventListener("click", () => {
    fetch("auth/logout")
        .then(response => response.json())
        .then((response) => {
            switch (response.code) {
                case 200: {
                    window.location.href = "/";
                    break;
                }
                default: {
                    Dialog.alert(response.msg);
                    break;
                }
            }
        });
});

var navBtnParent = document.querySelectorAll(".modern-navigation-parent");
navBtnParent.forEach(btn => {
    btn.addEventListener("click", () => {
        Navigation.submenu(btn);
    })
});
