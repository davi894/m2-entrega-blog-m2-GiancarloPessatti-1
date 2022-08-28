import { ApiBlogKenzie } from "./api.js"
//atualizarConteudoPost.deletarPost()
//ApiBlogKenzie.atualizarConteudoPost()

import { Postes } from "./postes.js"
//Postes.deletarPost()
//Postes.editarPost()

class ButtonsDeletarEditarPost {

    static ToggleDeleteButton() {
        const button = document.querySelectorAll(".deletar")
        const arraybutton = [...button]
        arraybutton.forEach(buttonedit => {
            buttonedit.addEventListener("click", (e) => {

                localStorage.setItem('kenzieBlog:DelIdPost', e.target.id)

                Postes.deletarPost(e.target.id)

                const DivPopUpEdit = document.querySelector(".delposts")
                console.log(DivPopUpEdit.id)

                if (DivPopUpEdit.style.display === "none") {

                    DivPopUpEdit.style.display = "block"
                    console.log("passou")

                } else {

                    DivPopUpEdit.style.display = "none"

                }
            })
        })
    }

    static ToggleEditButton() {
        const button = document.querySelectorAll(".editar")
        const arraybutton = [...button]
        arraybutton.forEach(buttonedit => {
            buttonedit.addEventListener("click", (e) => {
                console.log(e)

                localStorage.setItem('kenzieBlog:EdiitIdPost', e.target.id)

                const DivPopUpEdit = document.querySelector(".editposts")
                console.log(DivPopUpEdit.id)

                Postes.editarPost(e.target.id)

                if (DivPopUpEdit.style.display === "none") {

                    DivPopUpEdit.style.display = "block"
                    console.log("passou")

                } else {

                    DivPopUpEdit.style.display = "none"
                }
            })
        })
    }
}

export { ButtonsDeletarEditarPost }