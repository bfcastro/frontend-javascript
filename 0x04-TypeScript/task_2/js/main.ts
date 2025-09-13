// isDirector function
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Execute Work
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
  }

//Example
console.log(executeWork(createEmployee(200))); //Getting to work
console.log(executeWork(createEmployee(1000))); //Getting to director tasks
