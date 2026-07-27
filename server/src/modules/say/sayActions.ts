import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);
  res.send("Welcome to the best website for series !");
};

export default { sayWelcome };
