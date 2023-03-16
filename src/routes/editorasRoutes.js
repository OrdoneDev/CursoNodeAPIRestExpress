import express from "express"
import EditoraController from "../controllers/editoraController.js"

const router = express.Router()

router
    .get("/editoras", EditoraController.listarEditoras)
    .get("/editoras/:id", EditoraController.listarEditoraById)
    .post("/editoras", EditoraController.cadastrarEditora)
    .put("/editoras/:id", EditoraController.atualizarEditora)
    .delete("/editoras/:id", EditoraController.deletarEditora)

export default router