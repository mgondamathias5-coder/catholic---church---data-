import { db } from "./firebase-config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const table = document.getElementById("membersTable");
const search = document.getElementById("search");

let members = [];

async function loadMembers() {
  table.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "members"));

  members = [];

  querySnapshot.forEach((doc) => {
    members.push(doc.data());
  });

  displayMembers(members);
}

function displayMembers(data) {
  table.innerHTML = "";

  data.forEach((member) => {
    table.innerHTML += `
      <tr>
        <td>${member.fullName || ""}</td>
        <td>${member.gender || ""}</td>
        <td>${member.phone || ""}</td>
        <td>${member.parish || ""}</td>
      </tr>
    `;
  });
}

search.addEventListener("keyup", () => {
  const keyword = search.value.toLowerCase();

  const filtered = members.filter(member =>
    (member.fullName || "").toLowerCase().includes(keyword)
  );

  displayMembers(filtered);
});

loadMembers();
