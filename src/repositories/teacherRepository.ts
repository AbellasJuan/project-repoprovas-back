import { prisma } from "../database.js";

async function findAllTeachers(){
 return  prisma.teacher.findMany();
};

export default {
  findAllTeachers
};