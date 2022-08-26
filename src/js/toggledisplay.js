function ToggleEditButton() {

    let button = document.querySelectorAll(".editar")
    let arraybutton = [...button]
    arraybutton.forEach(buttonedit => {buttonedit.addEventListener("click",() =>{

        const DivPopUpEdit = document.querySelector(".editposts")
    
        if(DivPopUpEdit.style.display === "none") {

            DivPopUpEdit.style.display = "block"
            console.log("passou")

        } else {

            DivPopUpEdit.style.display = "none"

    }

    })})
}

function ToggleDeleteButton() {

    let button = document.querySelectorAll(".deletar")
    let arraybutton = [...button]
    arraybutton.forEach(buttonedit => {buttonedit.addEventListener("click",() =>{

        const DivPopUpEdit = document.querySelector(".delposts")
    
        if(DivPopUpEdit.style.display === "none") {

            DivPopUpEdit.style.display = "block"
            console.log("passou")

        } else {

            DivPopUpEdit.style.display = "none"

    }

    })})
}



ToggleDeleteButton()
ToggleEditButton()