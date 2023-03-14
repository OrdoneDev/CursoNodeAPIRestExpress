import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = async (_, res) => {
        try{
            const livros_return = await livros.find()
            res.status(200).json(livros_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar livros!`})
        }
    }

    static listaLivroById = async(req, res) => {
        const { id } = req.params

        try{
            const livro_return = await livros.findById(id)
            res.status(200).json(livro_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar livro por id!`})
        }
    }

    static cadastrarLivro = async (req, res) => {
        let livro = new livros(req.body)

        try{
            const livro_return = await livro.save()
            res.status(201).send(livro_return.toJSON())
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao cadastrar o livro!`})
        }
    }

    static atualizarLivro = async (req, res) => {
        const { id } = req.params

        try{
            await livros.findByIdAndUpdate(id, {$set: req.body})
            res.status(201).send(`Livro atualizado com sucesso.`)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao atualizar o livro!`})
        }
    }

    static deletarLivro = async(req, res) => {
        const { id } = req.params

        try{
            await livros.findByIdAndDelete(id)
            res.status(201).send(`Livro deletado com sucesso.`)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao deletar o livro!`})
        }
    }
}


export default LivroController