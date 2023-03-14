import mongoose from 'mongoose'

const stringConexao = `mongodb+srv://root:3jGJK1HuVpbul061@api-node.fwzoug5.mongodb.net/api-curso-node`

mongoose.connect(stringConexao, {useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection

export default db