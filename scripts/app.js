  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCjkfvYeudQvegto1XRSUW5i5LSpa1aeJY",
    authDomain: "authentication-36e16.firebaseapp.com",
    databaseURL: "https://authentication-36e16.firebaseio.com",
    projectId: "authentication-36e16",
    storageBucket: "authentication-36e16.appspot.com",
    messagingSenderId: "1012143452343",
    appId: "1:1012143452343:web:e9a3984f22f57961"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();

//   getting the references of forms here
const logIn = document.querySelector('#loginForm');
const signUp = document.querySelector('#signUp');
const logOut = document.querySelector('#ok');
const createUser = document.querySelector('#createUser')

// getting the login input values here
const emailValue = document.querySelector('#emailAdd');
const passValue = document.querySelector('#passAdd')

// getting the signup input values here
const upEmailValue =document.querySelector('#emailUP');
const upPassValue =document.querySelector('#passUP');

// login listener
logIn.addEventListener('submit',(e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(emailValue.value,passValue.value)
    .then(res => console.log(res))
    .catch(rej => console.log(rej.message))
    
    
})

// signup listener
signUp.addEventListener('submit',(e) => {
    e.preventDefault();
    
    firebase.auth()
    .createUserWithEmailAndPassword(upEmailValue.value,upPassValue.value)
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
})


// log out user
// logOut.addEventListener('click',(e)=>{
// console.log('s')
// })
console.log(signUp)
console.log(logOut)