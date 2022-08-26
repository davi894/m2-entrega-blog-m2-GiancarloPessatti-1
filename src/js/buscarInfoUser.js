import { ApiBlogKenzie } from "./api.js"


function buscarDadosUser(array) {

    const inptEx = document.querySelector("input")

    array.forEach((element, i, arr) => {

        if (element.user["id"] == inptEx.value) {
            ApiBlogKenzie.buscarInformacoresDoUsuarios(element.user["id"])
        }

    });

}