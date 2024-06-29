import {
  auth,
  createUser,
  setData,
  database,
  getData,
  sendEmailLink,
} from "../../../../Firebase-config/firebase-config";


function signup(user, password) {
  createUser(auth, user.email, password)
    .then((userCredential) => {
      sendEmailLink(auth.createUser).then(() => {
        alert(
          "an email verification link has been sent to this account please check your inbox in order to login"
        );
        location.href="../../Login-Section/Login.html";
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


export { signup, createUser };
