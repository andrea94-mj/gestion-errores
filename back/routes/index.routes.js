import { Router } from "express";

import { getLandingData } from "../controllers/data.controller.js";
import { getAllCorreos } from "../controllers/correos.controller.js";
import { createCorreo } from "../controllers/correos.controller.js";
import { getAllCorreosWithUsers } from "../controllers/correos.controller.js";

const router = Router();

// Rutas al mock
router.get("/home", getLandingData);

//Rutas a mysql
router.get("/correos", getAllCorreosWithUsers)

router.post("/nuevo", createCorreo);


export default router;