import { ApiBlogKenzie } from "./api.js"

class buscandoInfoUser {

    static buscarDadosUser(array) {

        const inptEx = document.querySelector("input")

        array.forEach(async (element, i, arr) => {

            if (element.user["id"] == inptEx.value) {
                await ApiBlogKenzie.buscarInformacoresDoUsuarios(element.user["id"])
            }
        });
    }
}
buscandoInfoUser.buscarDadosUser()