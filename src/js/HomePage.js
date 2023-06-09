import { ApiBlogKenzie } from "./api.js"
import { Postes } from "./postes.js"
import { ButtonsDeletarEditarPost } from "./toggledisplay.js"

const arrayComentário = await ApiBlogKenzie.mudancaDePagina()
const dataarray = arrayComentário.data

class HomePage {
    static renderizarComentarios(arrayComentário) {
        const ul = document.querySelector("ul")
        arrayComentário.forEach((element) => {
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
            imgEditar.src = "../assents/edit 1.png"
            imgEditar.id = element.user["id"]
            imgEditar.src = "../assents/edit 1.png"
            imgEditar.addEventListener("click", ButtonsDeletarEditarPost.ToggleEditButton())
            Postes.editarPost(element.user["id"])
            const imgDeletar = document.createElement("img")
            imgDeletar.classList.add("deletar")
            imgDeletar.src = "../assents/trash-bin 1.png"
            imgDeletar.id = element.user["id"]
            imgDeletar.addEventListener("click", ButtonsDeletarEditarPost.ToggleDeleteButton())
            Postes.deletarPost(element.user["id"])
            const divDataPost = document.createElement("div")

            const btnEnviarPostEditado = document.querySelector(".botaoenviareditcao")
            btnEnviarPostEditado.id = element.user["id"]

            const btnDeletarPost = document.querySelector(".enviarPost")
            btnDeletarPost.id = element.user["id"]
            const data = element.createdAt.split("")

            const dataTempoConvertido = `${data[0]}${data[1]}${data[2]}${data[3]}${data[4]}${data[5]}${data[6]}${data[7]}${data[8]}${data[9]}`

            const spanData = document.createElement("span")
            spanData.innerText = dataTempoConvertido
            // console.log([element.createdAt].split(""))
            divDataPost.appendChild(spanData)
            divPoster.append(imgEditar, imgDeletar, divDataPost)
            divTexto.append(h2NomeUsuario, pPostarTexto)
            divConteudo.append(imgPerfil, divTexto, divPoster)
            li.append(divConteudo, divPoster)
            divConteudo.append(imgPerfil, divTexto)
            li.append(divConteudo, divPoster)
            ul.appendChild(li)
        });
    }
    static async PegarinfUsuario() {
        const idusuario = localStorage.getItem("KenziBlog:Id")
        return await ApiBlogKenzie.buscarInformacoresDoUsuarios(idusuario)
    }
    static async nomeImgUser() {
        const nomeUsuario = document.querySelector(".nomeUsuario")
        const fotoperfil = document.querySelector(".FotoPerfil")
        const infusuario = await HomePage.PegarinfUsuario()
        nomeUsuario.innerHTML = infusuario.username
        fotoperfil.src = infusuario.avatarUrl
    }
}

class Logout {
    static sairDapágina() {
        const logout = document.querySelector(".buttonlogout")
        logout.addEventListener("click", (e) => {
            window.location.replace("/index.html")
        })
    }
}
/*
deixei salvo pra não ter mais problema, agora é só colcar esse aqui ksksksk =>./m2-entrega-blog-m2-GiancarloPessatti-1
 */
HomePage.renderizarComentarios(dataarray)
HomePage.nomeImgUser()
HomePage.PegarinfUsuario()

Postes.postar()
Postes.editarPost()
Postes.buscarpostUsuario()
Postes.buscarpostUsuario()
Postes.deletarPost()
Postes.pegarinfpost()

Logout.sairDapágina()
export { HomePage }