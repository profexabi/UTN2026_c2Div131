/*========================
    Rutas autenticacion
========================*/
import { Router } from "express";
import { loginAdmin, logoutAdmin, vistaLogin } from "../controllers/auth.controllers.js";
const router = Router();

// Vista login
router.get("/login", vistaLogin);

// Funcionalidad login para usuarios admin
router.post("/login", loginAdmin)

// Funcionalidad logout
router.post("/logout", logoutAdmin);


export default router;