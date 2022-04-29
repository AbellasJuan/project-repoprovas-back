import { Request, Response } from "express";
import testService from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy });
  res.send({ tests });
};

async function findById(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };
  const { id } = req.params;
  
  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.findById({ groupBy }, Number(id));
  res.send({ tests });
};

export default {
  find,
  findById
};