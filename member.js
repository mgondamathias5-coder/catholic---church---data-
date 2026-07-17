import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {

  const fullName = document.getElementById("fullName").value;
  const gender = document.getElementById("gender").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const region = document.getElementById("region").value;
  const district = document.getElementById("district").value;
  const parish = document.getElementById("parish").value;

  if (!fullName || !gender || !phone || !parish) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    await addDoc(collection(db, "members"), {
      fullName,
      gender,
      dob,
      phone,
      email,
      region,
      district,
      parish,
      createdAt: serverTimestamp()
    });

    alert("Member registered successfully!");

    document.getElementById("fullName").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("region").value = "";
    document.getElementById("district").value = "";
    document.getElementById("parish").value = "";

  } catch (error) {
    alert("Error: " + error.message);
  }

});
