window.onload = () => {

    var navBtnParent = document.querySelectorAll(".modern-navigation-parent");
    navBtnParent.forEach(btn => {
        btn.addEventListener("click", () => {
            Navigation.submenu(btn);
        })
    });

    // Start the navigation
    Navigation.start();

    Menu.start();

    Tabs.start();

    Accordeon.start();
}

/**
 * @description Module of Dialog
 */
var Dialog = {

    // Key do dialog
    key: null,

    alert: function (msg, title = null, event = null) {

        if (msg == null) {
            Dialog.alert("Dialog.alert()=> msg Ã© nula ou estÃ¡ vazia!", "Erro");
        } else {

            // Gera a key dinamicamente
            const keyContruct = "neon-dialog-";
            this.key = Date.now();

            // ConstruÃ§Ã£o da janela
            let dialog = document.createElement("div");
            dialog.classList.add("neon-dialog");
            dialog.id = keyContruct + this.key;

            //Dialog Header
            let dialogHeader = document.createElement("div");
            dialogHeader.classList.add("neon-dialog__header");
            let dialogHeaderH = document.createElement("h2");
            dialogHeaderH.classList.add("neon-dialog__header__title");
            dialogHeaderH.innerHTML = title;
            dialogHeader.append(dialogHeaderH);
            dialog.append(dialogHeader);

            //Dialog Close
            /*let btnClose = document.createElement("button");
            btnClose.title = "Fechar Janela";
            btnClose.innerText = 'x';
            btnClose.type = "button";
            btnClose.value = this.key;
            if (event == null) {
                btnClose.addEventListener("click", function () {
                    Modal.close(this.value);
                });
            } else {
                btnClose.addEventListener("click", function () {
                    event();
                });
            }
            dialogHeader.append(btnClose);
            */

            //Dialog Body
            let dialogBody = document.createElement("div");
            dialogBody.classList.add("neon-dialog__body");
            let dialogBodyP = document.createElement("p");
            dialogBodyP.innerText = msg;
            dialogBody.append(dialogBodyP);
            dialog.append(dialogBody);

            //Dialog Footer
            let dialogFooter = document.createElement("div");
            dialogFooter.classList.add("neon-dialog__footer");
            dialog.append(dialogFooter);

            //Dialog Accept
            let btnAccept = document.createElement("button");
            btnAccept.classList.add("neon-dialog__btn");
            btnAccept.classList.add("--close");
            btnAccept.innerText = 'Fechar';
            btnAccept.title = "Fechar Janela";
            btnAccept.type = "button";
            btnAccept.value = this.key;
            if (event == null) {
                btnAccept.addEventListener("click", function () {
                    Modal.close(this.value);
                });
            } else {
                btnAccept.addEventListener("click", function () {
                    event();
                });
            }
            dialogFooter.append(btnAccept);

            // IncluÃ­ a janela no modal
            Modal.open(dialog, this.key);
        }
    },

    catch: function (error) {

        // Gera a key dinamicamente
        const keyContruct = "neon-dialog-";
        this.key = Date.now();

        // ConstruÃ§Ã£o da janela
        let dialog = document.createElement("div");
        dialog.classList.add("neon-dialog");
        dialog.id = keyContruct + this.key;

        //Dialog Header
        let dialogHeader = document.createElement("div");
        dialogHeader.classList.add("neon-dialog__header");
        let dialogHeaderH = document.createElement("h2");
        dialogHeaderH.classList.add("neon-dialog__header__title");
        dialogHeaderH.innerHTML = "Javascript";
        dialogHeader.append(dialogHeaderH);
        dialog.append(dialogHeader);

        //Dialog Body
        let dialogBody = document.createElement("div");
        dialogBody.classList.add("neon-dialog__body");
        let dialogBodyP = document.createElement("p");
        dialogBodyP.innerText = "Tipo: " + error.name + "Mensagem: " + error.message + "\n Arquivo: " + error.fileName + "\n Linha: " + error.lineNumber;
        dialogBodyP.classList.add("text-align-left");
        dialogBody.append(dialogBodyP);
        dialog.append(dialogBody);

        //Dialog Footer
        let dialogFooter = document.createElement("div");
        dialogFooter.classList.add("neon-dialog__footer");
        dialog.append(dialogFooter);

        //Dialog Accept
        let btnAccept = document.createElement("button");
        btnAccept.classList.add("neon-dialog__btn");
        btnAccept.classList.add("--close");
        btnAccept.innerText = 'Fechar';
        btnAccept.title = "Fechar Janela";
        btnAccept.type = "button";
        btnAccept.value = this.key;
        btnAccept.addEventListener("click", function () {
            Modal.close(this.value);
        });
        dialogFooter.append(btnAccept);

        // IncluÃ­ a janela no modal
        Modal.open(dialog, this.key);
    },

    confirm: function (msg = '', title = "Confirmar?", confirmEvent = null, closeEvent = null) {

        if (msg == null || confirmEvent == null) {
            Dialog.alert("Dialog.confirm()=> msg é nula ou está vazia!");
        } else {

            // Gera a key dinamicamente
            const keyContruct = "neon-confirm-";
            this.key = Date.now();

            // ConstruÃ§Ã£o da janela
            let dialog = document.createElement("div");
            dialog.classList.add("neon-dialog");
            dialog.id = keyContruct + this.key;

            //Dialog Header
            let dialogHeader = document.createElement("div");
            dialogHeader.classList.add("neon-dialog__header");
            let dialogHeaderH = document.createElement("h2");
            dialogHeaderH.classList.add("neon-dialog__header__title");
            dialogHeaderH.innerHTML = title;
            dialogHeader.append(dialogHeaderH);
            dialog.append(dialogHeader);

            // //Dialog Close
            // let btnClose = document.createElement("button");
            // btnClose.innerText = 'x';
            // btnClose.title = "Fechar Janela";
            // btnClose.type = "button";
            // btnClose.value = this.key;
            // if (closeEvent == null) {
            //     btnClose.addEventListener("click", function () {
            //         Modal.close(this.value);
            //     });
            // } else {
            //     btnClose.addEventListener("click", function () {
            //         closeEvent();
            //     });
            // }
            // dialogHeader.append(btnClose);

            //Dialog Body
            let dialogBody = document.createElement("div");
            dialogBody.classList.add("neon-dialog__body");
            let dialogBodyP = document.createElement("p");
            dialogBodyP.innerText = msg;
            dialogBody.append(dialogBodyP);
            dialog.append(dialogBody);

            //Dialog Footer
            let dialogFooter = document.createElement("div");
            dialogFooter.classList.add("neon-dialog__footer");
            dialog.append(dialogFooter);

            //Dialog Reject
            let btnReject = document.createElement("button");
            btnReject.classList.add("neon-dialog__btn", "--cancel");
            btnReject.innerText = 'Cancelar';
            btnReject.title = "Cancelar e fechar janela";
            btnReject.type = "button";
            btnReject.value = this.key;
            if (closeEvent == null) {
                btnReject.addEventListener("click", function () {
                    Modal.close(this.value);
                });
            } else {
                btnReject.addEventListener("click", function () {
                    closeEvent();
                });
            }
            dialogFooter.append(btnReject);

            //Dialog Accept
            let btnAccept = document.createElement("button");
            btnAccept.innerText = 'Confirmar';
            btnAccept.classList.add("neon-dialog__btn", "--confirm");
            btnAccept.title = "Confirmar ação";
            btnAccept.type = "button";
            btnAccept.value = this.key;
            if (confirmEvent == null) {
                btnAccept.addEventListener("click", function () {
                    Modal.close(this.value);
                });
            } else {
                btnAccept.addEventListener("click", function () {
                    confirmEvent();
                });
            }
            dialogFooter.append(btnAccept);

            // IncluÃ­ a janela no modal
            Modal.open(dialog, this.key);
        }
    },

    close: function (key) {
        let dialog = document.getElementById("neon-modal-" + key);
        dialog.remove();
    }
}

/**
 * @description Module of Loader
 * @author Eduardo Marinho
 */
var Loader = {

    key: Date.now(),

    hide: function () {
        Modal.close(this.key);
    },

    internal: {

        close: () => {

        },

        show: (idElement, size = 80) => {

            // Gera a key dinamicamente
            const keyContruct = "neon-loader-";

            let load = document.createElement("canvas");
            load.classList.add("c-loader", "loader-internal");
            load.id = keyContruct + this.key;
            load.style.height = size;
            load.style.width = size;
            let el = document.getElementById(idElement);
            el.innerHTML = '';
            el.append(load);
        }
    },

    show: function () {

        // Gera a key dinamicamente
        const keyContruct = "neon-loader-";

        // Criar Elemento de loader
        let load = document.createElement("canvas");
        load.classList.add("c-loader");
        load.id = keyContruct + this.key;

        Modal.open(load, this.key);
    },

    stop: function () {
        const keyContruct = "neon-loader-";
        (document.getElementById(keyContruct + this.key)).remove();
    }
}

/**
 * @description Module of Modal
 * @author Eduardo Marinho
 */
var Modal = {

    key: Date.now(),

    /**
     * @description Realiza a remoção do elemento na página.
     * @param {string} key Identificador do modal que será removido.
     */
    close: function (key) {

        if (key == null) {
            console.warn("Modal.close()=> key é nula ou está vazia!");
        } else {
            const keyContruct = "neon-modal-";
            let modal = document.getElementById(keyContruct + key);
            if (!(modal == undefined)) {
                modal.remove();
            }
        }
    },

    /**
     * @description Realiza a remoção de todos os modais que estiverem abertos na página.
     */
    destroy: function () {
        let modals = document.getElementsByClassName("neon-modal");

        if (modals.length > 0) {

            let ids = [];
            for (let i = 0; i < modals.length; i++) {
                ids.push(modals[i].id);
            }
            for (let i = 0; i < ids.length; i++) {
                (document.getElementById(ids[i])).remove();
            }
        } else {
            console.warn("Modal.destroy()=> Não existem modais abertos!");
        }
    },

    /**
     * @description Renderiza um componente modal.
     * @param   {string} content Elemento html, string ou qualquer tipo de conteúdo de texto que possa ser renderizado.
     * @param   {string} key Identificador do modal criado.
     * @returns {HTMLElement} modal Elemento construído.
     */
    open: function (content = '', key = null) {

        const keyContruct = "neon-modal-";

        this.key = (key == null) ? this.key : key;

        // Verifica se já existe um elemento com a key informada.
        if (document.getElementById(keyContruct + key) == undefined) {

            // Desenha o modal
            let modal = document.createElement("div");
            modal.classList.add("neon-modal");
            modal.id = keyContruct + this.key;
            document.body.append(modal);

            // Verifica se o content não é nulo
            if (content != null) {
                if (typeof content === 'object') {
                    modal.append(content);
                } else {
                    modal.innerHTML = content;
                    Array.from(modal.querySelectorAll("script")).forEach(oldScript => {
                        const newScript = document.createElement("script");
                        Array.from(oldScript.attributes)
                            .forEach(attr => newScript.setAttribute(attr.name, attr.value));
                        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                        oldScript.parentNode.replaceChild(newScript, oldScript);
                    });
                }
            }
            return modal;
        } else {
            console.warn("Modal.create()=> Já existe um objeto modal com essa key!");
            return false;
        }
    },

    window: (content, key) => {

        // Key
        const keyContruct = "neon-modal-";

        this.key = (key == null) ? this.key : key;

        if ((document.getElementById(keyContruct + key)) == undefined) {

            // Draw the modal window
            let modal = document.createElement("div");
            modal.classList.add("neon-modal", "modal-window");
            modal.id = keyContruct + this.key;
            document.body.append(modal);

            if (content != null) {
                if (typeof content === 'object') {
                    modal.append(content);
                } else {
                    modal.innerHTML = content;
                    Array.from(modal.querySelectorAll("script")).forEach(oldScript => {
                        const newScript = document.createElement("script");
                        Array.from(oldScript.attributes)
                            .forEach(attr => newScript.setAttribute(attr.name, attr.value));
                        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                        oldScript.parentNode.replaceChild(newScript, oldScript);
                    });
                }
            }
            return modal;

        }
    }
}

/**
 * @description Module of Modal
 * @author Eduardo Marinho
 */
const Navigation = {

    loader: () => {
        let navBtnChild = document.querySelectorAll(".modern-navigation-child");
        navBtnChild.forEach(btn => {
            btn.addEventListener("click", () => {
                Loader.show();
            })
        });
    },

    start: () => {

        let btnMenu = document.querySelector("#modern-template-btn-menu");
        if (btnMenu != undefined) {
            btnMenu.addEventListener("click", () => {
                Navigation.toggle();
            });
            Navigation.loader();
        }
    },

    submenu: (option) => {
        let navOpt = option.parentNode;
        navOpt.classList.toggle('show');
        option.classList.toggle("show");
    },

    toggle: () => {
        let main = document.querySelector(".modern-template-main");

        let menu = document.querySelector(".modern-template-sidebar");
        let btnMenuIcon = document.getElementById("modern-template-btn-menu-icon");
        let content = document.querySelector(".modern-template-content");

        if (btnMenuIcon.classList.contains("icon-menu-close")) {
            btnMenuIcon.classList.remove("icon-menu-close");
            btnMenuIcon.classList.add("icon-menu-open");
        } else {
            main.classList.add("navigation-show");
            btnMenuIcon.classList.remove("icon-menu-open");
            btnMenuIcon.classList.add("icon-menu-close");
        }
        menu.classList.toggle("show-mobile");
        menu.classList.toggle("hide");
    }
}


/**
 *  @description Module for Tabs
 */
const Tabs = {

    start: () => {

        let navs = document.querySelectorAll(".nav");
        navs.forEach((nav, index) => {
            let navItem = nav.querySelectorAll(".nav-link");
            navItem.forEach(item => {
                if (item.getAttribute("data-tab") == undefined) {
                    item.setAttribute("data-tab", true);
                    item.addEventListener('click', () => {
                        Tabs.toogle(nav, item);
                    }, true);
                }
            });
        });
    },

    toogle: (nav, item) => {

        let btns = nav.querySelectorAll('.nav-link');
        btns.forEach(btn => {
            if (btn.value == item.value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        let parentContainer = (document.getElementById(item.value)).parentNode;
        let tabs = parentContainer.querySelectorAll(".tab-content");
        tabs.forEach(tab => {
            if (tab.id == item.value) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
}

/**
 * @description Objeto de controle de logoff
 */
const Menu = {

    /**
     * @description Inicializa o menu
     */
    start: () => {

        let btnMenu = document.querySelector("#modern-template-btn-user");
        if (btnMenu != undefined) {
            btnMenu.addEventListener("click", () => {
                Dialog.confirm("", 'Deseja Sair?',
                    () => {
                        Loader.show();
                        fetch(Application.getUri("auth/logout"))
                            .then(response => response.json())
                            .then((response) => {
                                switch (response.code) {
                                    case 200: {
                                        Application.redirect();
                                        break;
                                    }
                                    default: {
                                        Dialog.alert(response.message);
                                        break;
                                    }
                                }
                            })
                            .catch((e) => {
                                Dialog.catch(e);
                            })
                            .finally(() => {
                                Loader.hide();
                            });
                    });
            });
        }

    }
}

var Form = {
    mask: {
        numbers: (el) => {
            el.addEventListener("keydown", (ev) => {
                // Get the event
                ev = ev || window.event;
                let keyCode = ev.key || ev.which;
                // keyCode = String.fromCharCode(keyCode);
                var regex = /^[0-9.]+$/;
                // allow backspace
                if (!(ev.keyCode == 8)) {
                    if (!regex.test(keyCode)) {
                        ev.returnValue = false;
                        if (ev.preventDefault) ev.preventDefault();
                    }
                }
            });
        }
    }
}

var Accordeon = {
    start: () => {
        let acc = document.querySelectorAll(".md-accordion-container");
        acc.forEach(container => {
            let btn = container.querySelector(".md-accordion");
            if (!(btn == undefined)) {
                btn.addEventListener("click", () => {
                    btn.classList.toggle("active");
                    let accordeonBody = container.querySelector(".md-accordion-body");
                    accordeonBody.classList.toggle("active");
                    $(accordeonBody).slideToggle(200);
                });
            }
        });
    }
}

