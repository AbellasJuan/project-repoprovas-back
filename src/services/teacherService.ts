import { Teacher, Term } from "@prisma/client";
import teacherRepository from "../repositories/teacherRepository.js";

async function findAll(){
  const teachers: Teacher[] = await teacherRepository.findAllTeachers();
  if(!teachers) throw { type: "not_found" };

  return teachers;
}

export default {
  findAll
};