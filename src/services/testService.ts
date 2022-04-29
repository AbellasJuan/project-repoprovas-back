import testRepository from "../repositories/testRepository.js";

interface Filter {
  groupBy: "disciplines" | "teachers";
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
};

async function findById(filter: Filter, id:number) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDisciplineId(id);
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachersId(id);
  }
};

export default {
  find,
  findById
};
