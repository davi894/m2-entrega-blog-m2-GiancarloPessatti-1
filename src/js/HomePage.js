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
        }
    },
    {
        "id": 2,
        "content": "content",
        "createdAt": "2022-07-01T00:00:00.000Z",
        "user": {
            "id": 1,
            "username": "teste",
            "avatarUrl": "https://github.com/phmc99.png"
        }
    },
    {
        "id": 2,
        "content": "content",
        "createdAt": "2022-07-01T00:00:00.000Z",
        "user": {
            "id": 1,
            "username": "teste",
            "avatarUrl": "https://github.com/phmc99.png"
        }
    }]

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
            imgPerfil.classList.add("FotoPerfil")

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
            imgEditar.src = "../assents/edit 1.png"

            imgEditar.addEventListener("click", ToggleEditButton)

            const imgDeletar = document.createElement("img")
            imgDeletar.classList.add("deletar")
            imgDeletar.src = "../assents/trash-bin 1.png"
            imgDeletar.id = element.user["id"]

            imgDeletar.addEventListener("click", ToggleDeleteButton)

            const divDataPost = document.createElement("div")

            let btnEnviarPostEditado = document.querySelector(".botaoenviareditcao")
            btnEnviarPostEditado.id = element.user["id"]

            let btnDeletarPost = document.querySelector(".enviarPost")
            btnDeletarPost.id = element.user["id"]

            const data = element.createdAt.split("")

            let dataFormatada = `${data[0]}${data[1]}${data[2]}${data[3]}${data[4]}${data[5]}${data[6]}${data[7]}${data[8]}${data[9]}`

            const spanData = document.createElement("span")
            spanData.innerText = dataFormatada

            divDataPost.appendChild(spanData)

            divPoster.append(imgEditar, imgDeletar, divDataPost)

            divTexto.append(h2NomeUsuario, pPostarTexto)

            divConteudo.append(imgPerfil, divTexto, divPoster)

            li.append(divConteudo, divPoster)

            ul.appendChild(li)
        });
    }

    static nomeUsuario = document.querySelector(".nomeUsuario")
    static fotoperfil = document.querySelector(".FotoPerfil")

    static nomeImgUser(nome, fotoPerfil) {
        console.log(nome)
        console.log(fotoPerfil)
        this.nomeUsuario.innerHTML = nome
        this.fotoperfil.src = fotoPerfil
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

                conteudo: textAreaPost,
                Id: IdPost

            }
            ApiBlogKenzie.criarNovoPost({ content: conteudo })

        })
    }
}

class Logout {

    static logout = document.querySelector(".buttonlogout")

    static sairDapágina() {
        this.logout.addEventListener("click", (e) => {
            window.location.replace("/index.html")
        })
    }
}
/*
deixei salvo pra não ter mais problema, agora é só colcar esse aqui ksksksk =>./m2-entrega-blog-m2-GiancarloPessatti-1 
 */
HomePage.renderizarComentarios(arrayComentário)
HomePage.nomeImgUser()
EnviarPost.postar()
Logout.sairDapágina()

export { HomePage }




