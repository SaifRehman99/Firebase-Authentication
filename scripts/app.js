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

//   getting the firebase auth services
const auth = firebase.auth();



//   getting the references of forms here
const logIn = document.querySelector('#loginForm');
const signUp = document.querySelector('#signUp');
const logOut = document.querySelector('#logOt');
const createUser = document.querySelector('#createUser')

// removing it first
logOut.style.display = 'none';


// getting the login input values here
const emailValue = document.querySelector('#emailAdd');
const passValue = document.querySelector('#passAdd')


// getting the signup input values here
const upEmailValue = document.querySelector('#emailUP');
const upPassValue = document.querySelector('#passUP');

// getting the reference of message div
const msg = document.querySelector('#message');
const msg2 = document.querySelector('#message2');


// watching the state changing of the events
auth.onAuthStateChanged(users => {
    if (users) {
        // window.location.replace('/login.html');
        // preventDefault();
        // location.replace('/login.html')
        console.log(users.uid)
    }
    else {
        window.location.assign('/index.html')
    }
});

// login listener
logIn.addEventListener('submit', (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailValue.value, passValue.value)
        .then(res =>
            logOut.style.display = 'block',
            signUp.style.display = 'none',

            // adding class here
            msg.className = 'alert alert-success text-center',

            // adding text here
            msg.textContent = 'Login Successful',

            // clearing the error after seconds
            // setTimeout(clearDiv, 2700),

        )
        .catch(rej => {

            // adding class here
            msg.className = 'alert alert-danger danger2 text-center';

            // adding text here
            msg.textContent = rej.message;

            // // clearing the error after seconds
            // setTimeout(clearDiv, 2700);
        })

        
            // clearing the error after seconds
            setTimeout(clearDiv, 2700);


})

// signup listener
signUp.addEventListener('submit', (e) => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(upEmailValue.value, upPassValue.value)
        .then(res =>
            // adding class here
            msg2.className = 'alert alert-success text-center',

            // adding text here
            msg2.textContent = 'Account Created Successfully',

            // clearing the error after seconds
            // setTimeout(clearDiv, 2700),
        )
        .catch(rej => {
            // adding class here
            msg2.className = 'alert alert-danger danger2 text-center';

            // adding text here
            msg2.textContent = rej.message;

            // clearing the error after seconds
            // setTimeout(clearDiv, 2700);
        })
        
            // clearing the error after seconds
            setTimeout(clearDiv, 2700);
})


// log out user
// logOut.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('auth.signOut()')
// })


// remove the div here
let clearDiv = () => {
    document.querySelector('.alert').remove();
    // document.querySelector('.danger2').remove();
}