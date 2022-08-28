
class ApiBlogKenzie {

    static URLbase = `https://blog-m2.herokuapp.com`

    static IdUsuario = localStorage.getItem("KenzieBlog:Id")

    static token = localStorage.getItem("KenzieBlog:Token")

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async cadastro(usersCadastro) {

        return await fetch(`${this.URLbase}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(usersCadastro)
        })

            .then(resp => resp.json())
    }

    static async login(userslogin) {
        const tokenlogin = localStorage.getItem("KenzieBlog:Token")
        await fetch(`${this.URLbase}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(userslogin),
        })
            .then(resp => resp.json())
            .then(resp => {
                localStorage.setItem("KenziBlog:Id", resp.userId)
                localStorage.setItem("KenzieBlog:Token", resp.token)
                localStorage.setItem("KenziBlog: id", resp.userId)
                localStorage.setItem("KenzieBlog: token", resp.token)
                if(tokenlogin){window.location.assign("./src/html/HomePage.html")}
                console.log(resp)
                return resp
                /* 
                 deixei salvo pra não ter mais problema, agora é só colcar esse aqui ksksksk => m2-entrega-blog-m2-GiancarloPessatti-1/html
                */
            })
            .catch(err => console.log(err))
    }

    static async mudancaDePagina() {

        return await fetch(`${this.URLbase}/posts?page=1`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
    }

    static async pegarInformacoesPost(id) {
        return await fetch(`${this.URLbase}/${id}`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
    }

    static async buscarInformacoresDoUsuarios(IdUsuario) {

        return await fetch(`${this.URLbase}/users/${IdUsuario}`, {
            method: "GET",
            headers: this.headers

        })
            .then(resp => resp.json())

    }

    static async criarNovoPost(poster) {
        await fetch(`${this.URLbase}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(poster)
        })
            .then(resp => resp.json())
            .catch(err => console.log(err))
    }

    static async atualizarConteudoPost(id, conteudo) {

        console.log(id, conteudo)
       
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(conteudo)
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err))

        /*
        resposta
        {
             "id": 2,
             "content": "new content",
             "createdAt": "2022-07-01T00:00:00.000Z",
             "updatedAt": "2022-07-01T00:00:00.000Z",
             "user": {
               "id": 1,
               "username": "teste",
               "avatarUrl": "https://github.com/phmc99.png"
             }
         } */
    }

    static async deletarPost(id) {
        await fetch(`${this.URLbase}/posts/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
    }
}
export { ApiBlogKenzie }