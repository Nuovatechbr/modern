/**
 * @description Objeto de validação para campos
 * @author  Eduardo Marinho
 * @see     ed.marinho@outlook.com
 */
var Validation = {

    /**
     * @description Método de validação de CPF
     * @author  DevMedia
     * @see https://www.devmedia.com.br/validar-cpf-com-javascript/23916
     * @param {string} cpf 
     * @returns bool
     */
    cpf: function (cpf) {

        // remove a máscara do cpf caso possua
        cpf = cpf.replace(/[^0-9]/g, '');

        switch (cpf) {
            case
                "00000000000",
                "11111111111",
                "22222222222",
                "33333333333",
                "44444444444",
                "55555555555",
                "66666666666",
                "77777777777",
                "88888888888",
                "99999999999": {
                    return false;
                    break;
                }
            default: {

                var Soma = 0;
                var Resto;

                for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(cpf.substring(9, 10))) return false;

                Soma = 0;
                for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(cpf.substring(10, 11))) return false;
                return true;
                break;
            }
        }
    },

    /**
     * @description Método de validação de e-mail
     * @author  DevMedia
     * @see https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427
     * @param {string} email 
     * @returns bool
     */
    email: function (email) {

        usuario = email.substring(0, email.indexOf("@"));
        dominio = email.substring(email.indexOf("@") + 1, email.length);

        if ((usuario.length >= 1) &&
            (dominio.length >= 3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true;
        }
        else {
            return false;
        }
    },

    /**
     * @description Método de validação de telefone
     * @author  GitHub
     * @see https://gist.github.com/ThadeuLuz/797b60972f74f3080b32642eb36481a5
     * @param {string} email 
     * @returns bool
     */
    phone: {

        data: {
            "AC": ['68'],
            "AL": ['82'],
            "AM": ['92', '97'],
            "AP": ['96'],
            "BA": ['71', '73', '74', '75', '77'],
            "CE": ['85', '88'],
            "DF": ['61'],
            "ES": ['27', '28'],
            "GO": ['62', '64'],
            "MA": ['98', '99'],
            "MG": ['31', '32', '33', '34', '35', '37', '38'],
            "MS": ['67'],
            "MT": ['65', '66'],
            "PA": ['91', '93', 94],
            "PB": ['83'],
            "PE": ['81', '87'],
            "PI": ['86', '89'],
            "PR": ['41', '42', '43', '44', '45', '46'],
            "RJ": ['21', '22', '24'],
            "RN": ['84'],
            "RO": ['69'],
            "RR": ['95'],
            "RS": ['51', '53', '54', '55'],
            "SC": ['47', '48', '49'],
            "SE": ['79'],
            "SP": ['11', '12', '13', '14', '15', '16', '17', '18', '19'],
            "TO": ['63']
        },

        check: (number) => {

            number = ((number.replace(' ', '')).replace('-', ''));
            return (number.length == 11) ? true : false;

        },

        checkCodArea: (code) => {

            let data = Validation.phone.data;
            for (index in data) {
                if (data[index].includes(code)) {
                    return true;
                }
            }
            return false;
        }
    }

}