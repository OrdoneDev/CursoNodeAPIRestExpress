import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    cpf: {type: String},
    endereco: {type: String}
})

const clientes = mongoose.model('clientes', clientSchema)

export default clientes