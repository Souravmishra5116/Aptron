import express from "express";
import registrationController from "../controllers/authController.js";
import {
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

/// routing methods
/// registeration|| methods POST
router.post("/register", registrationController);

///====== Login // POST
router.post("/login", loginController);

//==== test route===
router.get("/test", requireSignIn, testController);

//protected  user route

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected Admin route

router.get("/admin-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
