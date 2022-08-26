export class ApiBlogKenzie {

    static URLbase = `https://blog-m2.herokuapp.com`

    static token = localStorage.getItem("BlogKenzie:token")

    static async cadastro(usersCadastro) {
        console.log(usersCadastro)

        await fetch(`${this.URLbase}/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usersCadastro),
        })
            .then(resp => resp.json)
    }

    static async login(userslogin) {
        console.log(userslogin)

        await fetch(`${this.URLbase}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userslogin),
            Authorization: `Bearer ${this.token}`
        })
            .then(resp => resp.json())

        localStorage.setItem("LoginUser", JSON.stringify(userslogin))

    }

    static async buscarInformacoresDoUsuarios(id) {

        const token = localStorage.getItem("BlogKenzie:token",)
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "GET",
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token()}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async mudancaDePagina(id) {
        await fetch(`${this.URLbase}/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token()}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async pegarInformacoesPost(id) {
        await fetch(`${this.URLbase}/users/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token()}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async criarNovoPost(poster) {
        await fetch(`${this.URLbase}/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token()}`,
            body: JSON.stringify(poster)
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async atualizarConteudoPost(id, conteudo) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token()}`,
            body: JSON.stringify(conteudo)
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async deletarPost(id) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token()}`
        })
    }
}