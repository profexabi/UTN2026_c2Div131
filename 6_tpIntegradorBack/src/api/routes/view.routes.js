/*=====================
    Rutas vistas
=====================*/
import { Router } from "express";
import { vistaConsultar, vistaCrear, vistaEliminar, vistaModificar, vistaPrincipal } from "../controllers/view.controllers.js";
const router = Router();


router.get("/principal", vistaPrincipal);


router.get("/consultar", vistaConsultar);


router.get("/crear", vistaCrear);


router.get("/modificar", vistaModificar);


router.get("/eliminar", vistaEliminar);

export default router;