//define the interface
interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

//create two student objects
const student1: Student = {
firstName: "Castro",
lastName: "Baffour",
age: 24,
location: "Accra",
};

const student2: Student = {
firstName: "Anna",
lastName: "Pomaah",
age: 22,
location: "Kumasi",
};

//Store them in an array
const studentsList: Student[] = [student1, student2];

//Create table and table body
const table = document.createElement("table");
const tbody = document.createElement("tbody");

//loop through studentsList and create rows
studentsList.forEach((student) => {
const row = document.createElement("tr");

const firstNameCell = document.createElement("td");
firstNameCell.textContent = student.firstName;

const locationCell = document.createElelment("td");
locationCell.textContent = student.location;

row.appendChild(firstNameCell);
row.appendChild(locationCell);
tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
