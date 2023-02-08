import { Modal } from "./Modal.js";

export {
    Dialog
}

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
            Modal.open(this.key, dialog);
        }
    },

    confirm: function (title = "Confirmar?", msg = '', confirmEvent = null, closeEvent = null) {

        if (msg == null || confirmEvent == null) {
            Dialog.alert("Dialog.confirm()=> msg Ã© nula ou estÃ¡ vazia!");
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

            //Dialog Close
            let btnClose = document.createElement("button");
            btnClose.innerText = 'x';
            btnClose.title = "Fechar Janela";
            btnClose.type = "button";
            btnClose.value = this.key;
            if (closeEvent == null) {
                btnClose.addEventListener("click", function () {
                    Modal.close(this.value);
                });
            } else {
                btnClose.addEventListener("click", function () {
                    closeEvent();
                });
            }
            dialogHeader.append(btnClose);

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
            btnAccept.title = "Confirmar aÃ§Ã£o";
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
            Modal.open(this.key, dialog);
        }
    },

    close: function (key) {
        let dialog = document.getElementById("neon-modal-" + key);
        dialog.remove();
    }
}