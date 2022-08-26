export class ApiBlogKenzie {

    static URLbase = `https://blog-m2.herokuapp.com`
    static token = localStorage.getItem("BlogKenzie:token")

    static async cadastro(users, register) {
        await fetch(`${this.URLbase}/${users}/${register}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token}`
        })
    }

    static async login(users, login) {
        await fetch(`${this.URLbase}/${users}/${login}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token}`
        })
    }

    static async buscarInformacoresDoUsuarios(id) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "GET",
            "Content-Type": "application/json"
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async mudancaDePagina(id) {
        await fetch(`${this.URLbase}/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async pegarInformacoesPost(id) {
        await fetch(`${this.URLbase}/users/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(err => console.log(err))
    }

    static async criarNovoPost(poster) {
        await fetch(`${this.URLbase}/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${this.token}`,
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
        })
    }
}