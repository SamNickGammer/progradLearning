const firebaseConfig = {
  apiKey: 'AIzaSyCk6bI9S8memrPK8AWmgLolqzx2-yeC8PY',
  authDomain: 'progradintenship.firebaseapp.com',
  databaseURL: 'https://progradintenship-default-rtdb.firebaseio.com',
  projectId: 'progradintenship',
  storageBucket: 'progradintenship.appspot.com',
  messagingSenderId: '330163917284',
  appId: '1:330163917284:web:3298cb52e9801b08ed77f1',
};

firebase.initializeApp(firebaseConfig);

const logoutBtn = document.getElementById('logoutBtn');
const loginScreen = document.getElementById('loginScreen');
const dataScreen = document.getElementById('dataScreen');

logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut();
  dataScreen.style.display = 'none';
  loginScreen.style.display = 'block';
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in');
    loginScreen.style.display = 'none';
    retriveData();
  } else {
    console.log('No user is signed in');
    loginYourSelf();
  }
});

function loginYourSelf() {
  loginScreen.style.display = 'block';
  document
    .getElementById('login-admin')
    .addEventListener('submit', submitLogin);
}

function submitLogin(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      loginScreen.style.display = 'none';
      retriveData();
    })
    .catch((err) => {
      if (err.code === 'auth/wrong-password') {
        alert('Wrong Email/Password');
      } else if (err.code === 'auth/user-not-found') {
        alert('User Not Found...');
      }
    });
}

function retriveData() {
  dataScreen.style.display = 'block';
  console.log('Auth Sucess');
}
