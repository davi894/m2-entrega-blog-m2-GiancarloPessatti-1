
export class ApiBlogKenzie {

    static URLbase = `https://blog-m2.herokuapp.com`

    static IdUsuario = localStorage.getItem("KenzieBlog:Id")

    static token = localStorage.getItem("KenzieBlog:Token")

    static headers = {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${this.token}`
    }

    static async cadastro(usersCadastro) {

        const cadastando = await fetch(`${this.URLbase}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(usersCadastro)
        })

            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))


        return cadastando
    }

    static async login(userslogin) {

        console.log(userslogin)

        const loginUser = await fetch(`${this.URLbase}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(userslogin),
        })
            .then(resp => resp.json())
            .then(resp => {
                localStorage.setItem("KenziBlog:Id", resp.userId)
                localStorage.setItem("KenzieBlog:Token", resp.token)
                window.location.replace("./src/html/HomePage.html")
            })
            .catch(err => console.log(err))

    }

    static async pegarInformacoesPost(IdUsuario) {

        
        await fetch(`${this.URLbase}/posts/${IdUsuario}`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async mudancaDePagina(id) {
        await fetch(`${this.URLbase}/${id}`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async buscarInformacoresDoUsuarios(IdUsuario) {

      let infusuario = await fetch(`${this.URLbase}/users/${IdUsuario}`, {
            method: "GET",
            headers: this.headers

        })
            .then(resp => resp.json())
            // .then(resp => console.log(resp))

         
           return infusuario
           
    }
    
    static async criarNovoPost(poster) {
        await fetch(`${this.URLbase}/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            Authorization: this.headers,
            body: JSON.stringify(poster)
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async atualizarConteudoPost(id, conteudo) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(conteudo)
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async deletarPost(id) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
    }
}