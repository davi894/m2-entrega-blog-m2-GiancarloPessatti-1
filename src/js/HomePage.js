import { ApiBlogKenzie } from "./api.js"

function renderizarComentarios(arrayComentário) {

    const ul = document.querySelector("ul")

    forEach((element, i, arr) => {
        /* id objeto  */
        element.id
        /* id user */
        element.user["id"]

        const li = document.createElement("li")
        const divConteudo = document.createElement("div")

        divConteudo.classList.add("conteudo")

        const imgPerfil = document.createElement("img")
        imgPerfil.src = element.user["avatarUrl"]

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
        imgEditar.src

        imgEditar.addEventListener("click", (e) => {

        })

        const imgDeletar = document.createElement("img")
        imgDeletar.classList.add("deletar")
        imgDeletar.src

        imgDeletar.addEventListener("click", (e) => {

        })

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

