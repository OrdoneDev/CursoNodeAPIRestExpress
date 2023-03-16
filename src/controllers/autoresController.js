import autores from "../models/Autor.js"

class AutorController {
    static listarAutores = async (_, res) => {
        try{
            const autores_return = await autores.find()
            res.status(200).json(autores_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar autores!`})
        }
    }

    static listaAutorById = async(req, res) => {
        const { id } = req.params

        try{
            const autor_return = await autores.findById(id)
            res.status(200).json(autor_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar autor por id!`})
        }
    }

    static cadastrarAutor = async (req, res) => {
        let autor = new autores(req.body)

        try{
            const autor_return = await autor.save()
            res.status(201).json(autor_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao cadastrar o autor!`})
        }
    }

    static atualizarAutor = async (req, res) => {
        const { id } = req.params

        try{
            await autores.findByIdAndUpdate(id, {$set: req.body})
            res.status(201).send(`Autor atualizado com sucesso.`)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao tentar atualizar o autor!`})
        }
    }

    static deletarAutor = async(req, res) => {
        const { id } = req.params

        try{
            await autores.findByIdAndDelete(id)
            res.status(201).send(`Autor deletado com sucesso.`)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao tentar deletar o autor!`})
        }
    }
}


export default AutorController