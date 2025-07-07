// Task 1

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Task 3

interface printTeacherFunction {
 (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

// Task 4

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return `Currently working`;
  }

  displayName() {
    return `${this.firstName}`;
  }
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
  }

const std1 = new StudentClass('Mike', 'Lucky');
console.log(std1.workOnHomework());
const std2 = new StudentClass('Mike');
console.log(std2.displayName());
const std3: StudentConstructor = new StudentClass('Mike');
console.log(std3.displayName());
