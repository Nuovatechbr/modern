import { Modal } from "./Modal.js";

/**
 * @description Module of Loader
 * @author Eduardo Marinho
 */
export var Loader = {

    key: Date.now(),

    hide: function () {
        Modal.close(this.key);
    },

    show: function () {

        // Gera a key dinamicamente
        const keyContruct = "neon-loader-";

        // Criar Elemento de loader
        let load = document.createElement("canvas");
        load.classList.add("c-loader");
        load.id = keyContruct + this.key;

        Modal.open(this.key, load);
    },

    stop: function () {
        const keyContruct = "neon-loader-";
        (document.getElementById(keyContruct + this.key)).remove();
    }
}