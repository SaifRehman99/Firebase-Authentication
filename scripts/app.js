    // <!-- TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#config-web-app -->

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
const logOut = document.querySelector('#logOut');

// getting the input values here
const emailValue = document.querySelector('#emailAdd');
const passValue = document.querySelector('#passAdd')

// login listener
logIn.addEventListener('submit',(e) => {
    e.preventDefault();
    
    
    
})