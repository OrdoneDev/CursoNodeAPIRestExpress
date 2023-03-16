import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = async (_, res) => {
        try{
            const livros_return = await livros.find().populate('autor').populate('editora')
            res.status(200).json(livros_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar livros!`})
        }
    }

    static listaLivroById = async(req, res) => {
        const { id } = req.params

        try{
            const livro_return = await livros.findById(id).populate('autor').populate('editora')
            res.status(200).json(livro_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar livro por id!`})
        }
    }

    static listarLivroPorEditora = async(req, res) => {
        const { editora } = req.query

        try{
            const livros_return = await livros.find({'editora': editora}, {"_id": editora}).populate('autor').populate('editora')
            res.status(200).json(livros_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar listar por editora!`})
        }
    }

    static cadastrarLivro = async (req, res) => {
        let livro = new livros(req.body)

        try{
            const livro_return = await livro.save()
            res.status(201).json(livro_return)
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
            res.status(500).send({message: `${error.message} - Falha ao tentar atualizar o livro!`})
        }
    }

    static deletarLivro = async(req, res) => {
        const { id } = req.params

        try{
            await livros.findByIdAndDelete(id)
            res.status(201).send(`Livro deletado com sucesso.`)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao tentar deletar o livro!`})
        }
    }
}


export default LivroController