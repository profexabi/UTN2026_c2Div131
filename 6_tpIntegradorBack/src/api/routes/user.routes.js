/*=====================
    Rutas usuario
=====================*/
import { Router } from "express";
import { createAdminUser } from "../controllers/user.controllers.js";
const router = Router();

router.post("/", createAdminUser)

export default router;