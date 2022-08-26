import { ApiBlogKenzie } from "./js/api.js"

const botaologar = document.querySelector("#botaologar")

botaologar.addEventListener("click", (e) => {

    const idemaillogin = document.querySelector("#idemaillogin").value
    const senhalogar = document.querySelector("#senhalogar").value

    console.log(e.target)
    console.log(idemaillogin, senhalogar)

    ApiBlogKenzie.login()
})

const botaocadastrar = document.querySelector("#botaocadastrar")

botaocadastrar.addEventListener("click", (e) => {
    const senhacadastro = document.querySelector("#senhacadastro").value

    const Nomecadastro = document.querySelector("#Nomecadastro").value

    const idemailcadastro = document.querySelector("#idemailcadastro").value

    const imagemcadastro = document.querySelector("#imagemcadastro").value


    console.log(senhacadastro, Nomecadastro, idemailcadastro, imagemcadastro)
    console.log(e.target)

    await ApiBlogKenzie.cadastro()

})