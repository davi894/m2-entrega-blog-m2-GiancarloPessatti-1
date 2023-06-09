import { ApiBlogKenzie } from "./api.js"
class Postes {
    static postar() {
        const usuarioTokken = ApiBlogKenzie.token
        const butonEnviarPost = document.querySelector(".enviarPost")
        butonEnviarPost.addEventListener("click", (e) => {
            console.log(e.target)
            const IdPost = document.querySelector("li").id
            const textAreaPost = document.querySelector("textarea").value
            console.log(textAreaPost)

            ApiBlogKenzie.criarNovoPost({ content: textAreaPost })
        })
    }
    static editarPost(id) {
        const atualizarPost = document.querySelector(".botaoenviareditcao")
        atualizarPost.addEventListener("click", async (e) => {
            const inputEditarTesto = document.querySelector("#inputeditcomentario").value
            if (id) {
                let editaPost = {
                    content: textAreaPost
                }
                await ApiBlogKenzie.atualizarConteudoPost(id, { content: editaPost })
            }
            console.log(e.target)
            console.log(inputEditarTesto)
        })
    }

    static async pegarinfpost() {

        const infopost = await ApiBlogKenzie.pegarInformacoesPost(3)
        return infopost
    }

    static deletarPost(id) {
        const deletarPost = document.querySelector(".botaodeletar")
        deletarPost.addEventListener("click", async (e) => {
            if (id) {
                await ApiBlogKenzie.deletarPost(id)
            }
            console.log(e.target)
        })
    }
    static async buscarpostUsuario() {

        const infoUsuario = await ApiBlogKenzie.pegarInformacoesPost(1)
        console.log(infoUsuario)
    }
}

export { Postes }