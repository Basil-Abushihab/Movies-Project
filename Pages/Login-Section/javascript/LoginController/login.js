import {
  auth,
  loginFirebase,
} from "../../../../Firebase-config/firebase-config";

function login(email, password) {
  loginFirebase(email, password).then((userCredential) => {
    let user = userCredential.user;

    if (isVerified(user)) {
      location.replace("../../HomePage/Home.html");
    } else {
      alert(
        "Please check your email and make sure that you have verified this email"
      );
    }
  });
}

function isVerified(user) {
  if (user.emailVerified) return true;
  else return false;
}

export {login};