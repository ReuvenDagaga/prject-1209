const soliders = JSON.parse(localStorage.getItem("soliders")) || [];

function saveDate() {
  localStorage.setItem("soliders", JSON.stringify(soliders));
}

//create Guid
const listOfLetters = "sdsggdkgkwwewqzdfghjklpoiusmdlsadgfhbdhgfdfhdkytkut";
function createId() {
  let Guid = "";
  for (let i = 0; i < 8; i++) {
    Guid += listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
  }
  return `${Guid.substr(0, 3)}...`;
}
console.log(createId());

let myForm = document.querySelector(".myForm");
let formDiv = document.createElement("div");
formDiv.id = "form-div";

let fullName = document.createElement("input");
fullName.type = "text";
fullName.required = true;
fullName.text = fullName.value;
fullName.placeholder = "Full Name";

let rank = document.createElement("input");
rank.type = "text";
rank.required = true;
rank.text = rank.value;
rank.placeholder = "Rank";

let position = document.createElement("input");
position.type = "text";
position.required = true;
position.text = position.value;
position.placeholder = "Position";

let platoon = document.createElement("input");
platoon.type = "text";
position.required = true;
platoon.text = platoon.value;
platoon.placeholder = "Platoon";

let missionTime = document.createElement("input");
missionTime.type = "text";
missionTime.required = true;
missionTime.text = missionTime.value;
missionTime.placeholder = "Mission Time";

let active = document.createElement("input");
active.type = "text";
active.required = true;
active.text = active.value;
active.placeholder = "Active";

let buttonSend = document.createElement("button");
buttonSend.textContent = "Add Personal";
buttonSend.id = "buttonSend";

// let filterButton = document.createElement("button");
// filterButton.textContent = "סנן לפי משימות שהושלמו";
// filterButton.id = "filterButton";

formDiv.appendChild(fullName);
formDiv.appendChild(rank);
formDiv.appendChild(position);
formDiv.appendChild(platoon);
formDiv.appendChild(missionTime);
formDiv.appendChild(active);
formDiv.appendChild(buttonSend);
myForm.appendChild(formDiv);

function timer() {
  sec = missionTime.textContent;
  setInterval(() => {
    if (sec >= 0) {
      missionTime.textContent = sec;
      sec--;
    }
  }, 1000);
  return sec;
}
timer();

let myTodosDiv = document.querySelector(".myTodos");
const listOfHeader = [
  "FullName",
  "Rank",
  "Position",
  "Platoon",
  "Status",
  "Active",
  "Action",
];
//create table
let table = document.querySelector("#todoTable");
let thead = document.createElement("thead");
function addHeader() {
  for (let i = 0; i < listOfHeader.length; i++) {
    let th = document.createElement("th");
    th.textContent = listOfHeader[i];
    th.style.fontSize = "20px";
    thead.append(th);
  }
}
table.appendChild(thead);
myTodosDiv.appendChild(table);
addHeader();





function addSol() {
    let tbody = document.createElement("tbody");
    const sol = {
        FullName: fullName.value,
        Rank: rank.value,
        Position: position.value,
        Platoon: platoon.value,
        MissionTime: 10,
        Active: true,
    };
    console.log(sol);
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.id = "treeButton";
    removeBtn.style.background = "#F6695E";
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.id = "treeButton";
    editBtn.style.background = "#4DABF5";
    let fixBtn = document.createElement("button");
    fixBtn.textContent = "End Mission";
    fixBtn.id = "treeButton";
    fixBtn.style.background = "#FFAD33";
    
    

  let tr = document.createElement("tr");

  let tdfullName = document.createElement("td");
  tdfullName.textContent = sol.FullName;
  let tdRank = document.createElement("td");
  tdRank.textContent = sol.Rank;
  let tdPosition = document.createElement("td");
  tdPosition.textContent = sol.Position;
  let tdPlatoon = document.createElement("td");
  tdPlatoon.textContent = sol.Platoon;
  let tdMissionTime = document.createElement("td");
  tdMissionTime.textContent = sol.MissionTime;
  let tdActive = document.createElement("td");
  tdActive.textContent = sol.Active;
  let tdButtons = document.createElement("td");

  tdButtons.appendChild(removeBtn);
  tdButtons.appendChild(editBtn);
  tdButtons.appendChild(fixBtn);

  tr.appendChild(tdfullName);
  tr.appendChild(tdRank);
  tr.appendChild(tdPosition);
  tr.appendChild(tdPlatoon);
  tr.appendChild(tdMissionTime);
  tr.appendChild(tdActive);
  tr.appendChild(tdButtons);

  tbody.appendChild(tr);
  table.appendChild(tbody);
  soliders.push(sol);
  saveDate();
}

function showTasks() {
  for (let i = 0; i < soliders.length; i++) {
    let tbody = document.createElement("tbody");
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.id = "RButton";
    removeBtn.style.background = "#F6695E";
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.id = "treeButton";
    editBtn.style.background = "#4DABF5";
    let fixBtn = document.createElement("button");
    fixBtn.textContent = "End Mission";
    fixBtn.id = "treeButton";
    fixBtn.style.background = "#FFAD33";

    let tr = document.createElement("tr");

    let tdfullName = document.createElement("td");
    tdfullName.textContent = soliders[i].FullName;
    let tdRank = document.createElement("td");
    tdRank.textContent = soliders[i].Rank;
    let tdPosition = document.createElement("td");
    tdPosition.textContent = soliders[i].Position;
    let tdPlatoon = document.createElement("td");
    tdPlatoon.textContent = soliders[i].Platoon;
    let tdMissionTime = document.createElement("td");
    tdMissionTime.textContent = soliders[i].MissionTime;
    let tdActive = document.createElement("td");
    tdActive.textContent = soliders[i].Active;
    let tdButtons = document.createElement("td");

    tdButtons.appendChild(removeBtn);
    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(fixBtn);

    tr.appendChild(tdfullName);
    tr.appendChild(tdRank);
    tr.appendChild(tdPosition);
    tr.appendChild(tdPlatoon);
    tr.appendChild(tdMissionTime);
    tr.appendChild(tdActive);
    tr.appendChild(tdButtons);

    tbody.appendChild(tr);
    table.appendChild(tbody);
  }
}
showTasks();
buttonSend.addEventListener("click", addSol);
myTodosDiv.appendChild(table);

let removeBtn = document.querySelector("#RButton");

removeBtn.addEventListener('click', removeSol);

function removeSol() {
    
}