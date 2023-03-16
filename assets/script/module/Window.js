import { Modal } from "./Modal.js";

export {
    Window
}

/**
 * @description Module of Window
 * @author Eduardo Marinho
 */
var Window = {

    // Key to window
    key: null,

    open: () => {
        Modal.open(123, 'asdad');
        // console.log("open the thecha");
    }
}