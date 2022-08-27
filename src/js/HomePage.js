import { ApiBlogKenzie } from "./api.js"
import { ToggleDeleteButton, ToggleEditButton } from "./toggledisplay.js"
const arrayComentário = [
    {
    "id": 2,
    "content": "content",
    "createdAt": "2022-07-01T00:00:00.000Z",
    "user": {
      "id": 1,
      "username": "teste",
      "avatarUrl": "https://github.com/phmc99.png"
    }},
    {
        "id": 2,
        "content": "content",
        "createdAt": "2022-07-01T00:00:00.000Z",
        "user": {
          "id": 1,
          "username": "teste",
          "avatarUrl": "https://github.com/phmc99.png"
        }},
        {
            "id": 2,
            "content": "content",
            "createdAt": "2022-07-01T00:00:00.000Z",
            "user": {
              "id": 1,
              "username": "teste",
              "avatarUrl": "https://github.com/phmc99.png"
            }}]

class HomePage {


    static renderizarComentarios(arrayComentário) {

        const ul = document.querySelector("ul")

        arrayComentário.forEach((element, i, arr) => {
            /* id objeto  */
            element.id
            /* id user */
            element.user["id"]

            const li = document.createElement("li")
            const divConteudo = document.createElement("div")

            divConteudo.classList.add("conteudo")

            const imgPerfil = document.createElement("img")
            imgPerfil.src = element.user["avatarUrl"]
            imgPerfil.className = "FotoPerfil"

            const divTexto = document.createElement("div")
            divTexto.classList.add("texto")

            const h2NomeUsuario = document.createElement("h2")
            h2NomeUsuario.innerText = element.user["username"]

            const pPostarTexto = document.createElement("p")
            pPostarTexto.innerText = element.content

            const divPoster = document.createElement("div")
            divPoster.classList.add("poster")

            const imgEditar = document.createElement("img")
            imgEditar.classList.add("editar")
            imgEditar.src = "./src/assents/edit 1.png"

            imgEditar.addEventListener("click", ToggleEditButton)

            const imgDeletar = document.createElement("img")
            imgDeletar.classList.add("deletar")
            imgDeletar.src = "./src/assents/trash-bin 1.png"

            imgDeletar.addEventListener("click", ToggleDeleteButton)

            const divDataPost = document.createElement("div")

            const spanData = document.createElement("span")
            spanData.innerText = element.createdAt

            divDataPost.appendChild(spanData)

            divPoster.append(imgEditar, imgDeletar, divDataPost)

            divTexto.append(h2NomeUsuario, pPostarTexto)

            divConteudo.append(imgPerfil, divTexto, divPoster)

            li.appendChild(divConteudo)

            ul.appendChild(li)
        });
    }

   

    static nomeImgUser(usersCadastro) {


        usersCadastro

        const nomeUsuario = document.querySelector(".nomeUsuario")
        const fotoperfil = document.querySelector(".FotoPerfil")

        console.log(usersCadastro)

        nomeUsuario.innerHTML = usersCadastro.username
        fotoperfil.src = usersCadastro.avatarUrl
    }
 
}

class EnviarPost {

    static butonEnviarPost = document.querySelector(".enviarPost")

    static postar() {
        this.butonEnviarPost.addEventListener("click", (e) => {

            console.log(e.target)

            const IdPost = document.querySelector("li").id
            const textAreaPost = document.querySelector("textarea").value
            console.log(textAreaPost)
            let conteudo = {

                conteudo : textAreaPost,
                Id : IdPost

            }
            ApiBlogKenzie.criarNovoPost({content : conteudo})

        })
    }
}

class Logout {

    static logout = document.querySelector(".buttonlogout")

    static sairDapágina() {
        this.logout.addEventListener("click", (e) => {
            window.location.replace("../index.html")
        })

        
    }


}

// HomePage.renderizarComentarios(arrayComentário)
// HomePage.nomeImgUser() 
// EnviarPost.postar()
Logout.sairDapágina()

export { HomePage }




