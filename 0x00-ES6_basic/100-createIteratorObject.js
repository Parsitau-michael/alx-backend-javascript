export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  return {
    [Symbol.iterator]() {
      let counter = -1;
      return {
        next() {
          if (counter >= employees.length - 1) {
            return { done: true };
          }
          counter += 1;
          return { value: employees[counter], done: false };
        },
      };
    },
  };
}
