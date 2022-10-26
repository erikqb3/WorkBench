document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  console.log(app);
})

console.log("Hellow");
document.querySelector('button#Login').addEventListener('click', googleLogin());


function googleLogin() {
  console.log("Hellow")
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
          .then(result => {
            const user = result.user;
            document.write("Hellow $user.displayName");
            console.log(user);
          })
          .catch(console.log)
}