import http from "http"

const port = 3000
const rotas = {
    '/' : 'Curso de Node',
    '/livros' : 'Entrou na pagina de livros',
    '/autores' : 'Listagem dos autores',
    '/editora' : 'Página da editora',
    '/contato' : 'Telefone para contato'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Servidor online http://localhost:${port}/`)
})
