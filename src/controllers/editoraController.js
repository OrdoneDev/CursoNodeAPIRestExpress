import editoras from "../models/Editora.js"

class EditoraController {
    static listarEditoras = async (_, res) => {
        try{
            const editoras_return = await editoras.find()
            res.status(200).json(editoras_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar editoras!`})
        }
    }

    static listarEditoraById = async (req, res) => {
        const { id } = req.params

        try{
            const editora_return = await editoras.findById(id)
            res.status(200).json(editora_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar editora por id!`})
        }
    }

    static cadastrarEditora = async (req, res) => {
        let editora = new editoras(req.body)

        try{
            const editora_return = await editora.save()
            res.status(201).json(editora_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao cadastrar a editora!`})
        }
    }

    static atualizarEditora = async (req, res) => {
        const { id } = req.params

        try{
            await editoras.findByIdAndUpdate(id, {$set: req.body})
            res.status(201).send(`Editora atualizada com sucesso.`)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao tentar atualizar a editora`})
        }
    }

    static deletarEditora = async (req, res) => {
        const { id } = req.params

        try{
            await editoras.findByIdAndDelete(id)
            res.status(201).send(`Autor deletado com sucesso.`)
        }catch(error){
            res.status(500).send({message: `${error.message} - Falha ao tentar deletar a editora`})
        }
    } 
}

export default EditoraController