

export class ApiBlogKenzie {

    static URLbase = `https://blog-m2.herokuapp.com`

    static token = localStorage.getItem("KenzieBlog:Token")

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async cadastro(usersCadastro) {

        /*  HomePage.nomeImgUser(nome, fotope) */

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
                window.location.replace("./src/html/HomePage.html")
                localStorage.setItem("KenziBlog: id", resp.userId)
                localStorage.setItem("KenzieBlog: token", resp.token)
                console.log(resp)
                return resp
                /* 
                 deixei salvo pra não ter mais problema, agora é só colcar esse aqui ksksksk => m2-entrega-blog-m2-GiancarloPessatti-1/html
                */
            })
            .catch(err => console.log(err))
        return loginUser
    }

    static async buscarInformacoresDoUsuarios(id) {

        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    static async mudancaDePagina(id) {
        await fetch(`${this.URLbase}/${id}`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    static async pegarInformacoesPost(id) {
        await fetch(`${this.URLbase}/users/${id}`, {
            method: "GET",
            headers: this.headers

        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    static async criarNovoPost(poster) {
        await fetch(`${this.URLbase}/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            Authorization: this.headers,
            body: JSON.stringify(poster)
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    static async atualizarConteudoPost(id, conteudo) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(conteudo)
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    static async deletarPost(id) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
    }
}