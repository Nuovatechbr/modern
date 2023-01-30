/**
 * @description Construtor do modal
 * @author Eduardo Marinho
 */
 export var Modal = {

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
            modal.remove();
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
     * @param {string} key Identificador do modal criado.
     * @param  {string} content Elemento html, string ou qualquer tipo de conteúdo de texto que possa ser renderizado.
     * @returns {HTMLElement} modal Elemento construído.
     */
    open: function (key, content = null) {

        if (key == null) {
            console.warn("Modal.gerar()=> key é nula ou está vazia!");
        } else {

            const keyContruct = "neon-modal-";
            // Verifica se já existe um elemento com a key informada.
            if (document.getElementById(keyContruct + key) == undefined) {

                // Desenha o modal
                let modal = document.createElement("div");
                modal.classList.add("neon-modal");
                modal.id = keyContruct + key;
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
        }
    },
}

function slide(idWindow) {
    (document.getElementById(idWindow)).classList.toggle('hide');
    Modal.close(idWindow);
}