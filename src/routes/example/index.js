import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ result: "GET example " });
});

export default router;
