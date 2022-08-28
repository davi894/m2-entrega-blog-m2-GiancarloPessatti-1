class ButtonsDeletarEditarPost {

    static ToggleDeleteButton() {
        let button = document.querySelectorAll(".deletar")
        let arraybutton = [...button]
        arraybutton.forEach(buttonedit => {
            buttonedit.addEventListener("click", () => {

                const DivPopUpEdit = document.querySelector(".delposts")

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
        let button = document.querySelectorAll(".editar")
        let arraybutton = [...button]
        arraybutton.forEach(buttonedit => {
            //  console.log(buttonedit)
            buttonedit.addEventListener("click", (e) => {
                console.log(e)

                const DivPopUpEdit = document.querySelector(".editposts")

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