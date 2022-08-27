import { ApiBlogKenzie } from "./js/api.js"

const botaologar = document.querySelector("#botaologar")

botaologar.addEventListener("click", async (e) => {

    const idemaillogin = document.querySelector("#idemaillogin").value
    const senhalogar = document.querySelector("#senhalogar").value

    console.log(e.target)
    console.log(idemaillogin, senhalogar)

    let userLogin = ApiBlogKenzie.login({
        "email": idemaillogin,
        "password": senhalogar
    })

    return userLogin
})

const botaocadastrar = document.querySelector("#botaocadastrar")

botaocadastrar.addEventListener("click", cadastramento)

async function cadastramento() {
    event.preventDefault()

    const senhacadastro = document.querySelector("#senhacadastro").value

    const Nomecadastro = document.querySelector("#Nomecadastro").value

    const idemailcadastro = document.querySelector("#idemailcadastro").value

    const imagemcadastro = document.querySelector("#imagemcadastro").value

    console.log(senhacadastro, Nomecadastro, idemailcadastro, imagemcadastro)

    await ApiBlogKenzie.cadastro(
        {
            "username": Nomecadastro,
            "email": idemailcadastro,
            "avatarUrl": imagemcadastro,
            "password": senhacadastro
        })
}







