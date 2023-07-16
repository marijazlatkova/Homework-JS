var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

let table = document.createElement("table");
table.setAttribute("border", "2");
table.setAttribute("cellPadding", "15");
table.setAttribute("cellSpacing", "5");

document.body.appendChild(table);

let objectKeys = Object.keys(MOUNTAINS[0]);

let headerRow = document.createElement("tr");
headerRow.style.backgroundColor = "lightblue";

objectKeys.forEach(key => {
  let tableHeader = document.createElement("th");
  tableHeader.textContent = key.toUpperCase();
  headerRow.appendChild(tableHeader);
});

table.appendChild(headerRow);

MOUNTAINS.forEach(mountain => {
  let contentRow = document.createElement("tr");
  contentRow.style.backgroundColor = "palegreen";

  objectKeys.forEach(key => {
    let tableCell = document.createElement("td");
    tableCell.textContent = mountain[key];
    contentRow.appendChild(tableCell);
  });

  table.appendChild(contentRow);
});