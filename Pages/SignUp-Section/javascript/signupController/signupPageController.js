import { signup, createUser } from "./Signup";
import { sendEmailLink,auth } from "../../../../Firebase-config/firebase-config";
import { User } from "../../../../Data-Models/UserDataModel";

function getDataFromSignupForm(event) {
  let userData=document.getElementById("Signup-Form");

  let user = new User(
    userData.FirstName,
    userData.LastName,
    userData.Email,
    "",
    userData.Bio
  );

  signup(auth,user.email, userData.password);
}


let signupButton=document.getElementById("Signup-Button");
signupForm.addEventListener("click",getDataFromSignupForm);