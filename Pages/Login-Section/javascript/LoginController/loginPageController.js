import { login } from "./login";

function getDataFromLoginForm(){
let userData=document.getElementById("Login-Form");

login(userData.email,userData.password);


}


let loginButton=document.getElementById("Login-Form");
loginForm.addEventListener(submit,getDataFromLoginForm);