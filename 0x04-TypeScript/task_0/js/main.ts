interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: "Michael", lastName: "Parsitau", age: 24, location: "Rongai" };
const student2: Student = { firstName: "Vanessa", lastName: "Nateria", age: 22, location: "Thika" };

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const theader = document.createElement("thead");
const headerRow = document.createElement("tr");
const firstName = document.createElement("th");
firstName.textContent = "First Name";
const location = document.createElement("th");
location.textContent = "Location";

headerRow.appendChild(firstName);
headerRow.appendChild(location);

theader.appendChild(headerRow);
table.appendChild(theader);

const tbody = document.createElement("tbody");

for (const student of studentsList) {
  const row = document.createElement("tr");
  const fName = document.createElement("td");
  fName.textContent = `${student.firstName}`;
  const loc = document.createElement("td");
  loc.textContent = `${student.location}`;

  row.appendChild(fName);
  row.appendChild(loc);
  tbody.appendChild(row);
}
 
table.appendChild(tbody);

document.body.appendChild(table);
