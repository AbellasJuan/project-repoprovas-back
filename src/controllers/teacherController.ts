import { Request, Response } from "express";
import { Teacher } from "@prisma/client";
import teacherService from "../services/teacherService.js";

export async function findAll(req: Request, res: Response){
  const teachers: Teacher[] = await teacherService.findAll();

  res.status(200).send(teachers);
};