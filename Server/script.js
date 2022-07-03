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

const projectName = document.getElementById('projectName');
const projectDesc = document.getElementById('projectDesc');
const projectLink = document.getElementById('projectLink');
const projectImage = document.getElementById('projectImage');
const sprintDay = document.getElementById('sprintDay');
const dateProject = document.getElementById('dateProject');
const htmlTag = document.getElementById('htmlTag');
const cssTag = document.getElementById('cssTag');
const jsTag = document.getElementById('jsTag');
const apiTag = document.getElementById('apiTag');
const reactTag = document.getElementById('reactTag');
const mongoDBTag = document.getElementById('mongoDBTag');
const expressTag = document.getElementById('expressTag');
const nodeTag = document.getElementById('nodeTag');

const alterprojectName = document.getElementById('alterprojectName');
const alterprojectDesc = document.getElementById('alterprojectDesc');
const alterprojectLink = document.getElementById('alterprojectLink');
const alterprojectImage = document.getElementById('alterprojectImage');
const altersprintDay = document.getElementById('altersprintDay');
const alterdateProject = document.getElementById('alterdateProject');
const alterhtmlTag = document.getElementById('alterhtmlTag');
const altercssTag = document.getElementById('altercssTag');
const alterjsTag = document.getElementById('alterjsTag');
const alterapiTag = document.getElementById('alterapiTag');
const alterreactTag = document.getElementById('alterreactTag');
const altermongoDBTag = document.getElementById('altermongoDBTag');
const alterexpressTag = document.getElementById('alterexpressTag');
const alternodeTag = document.getElementById('alternodeTag');

const overlay = document.getElementById('overlay');
const logoutBtn = document.getElementById('logoutBtn');
const loginScreen = document.getElementById('loginScreen');
const dataScreen = document.getElementById('dataScreen');
const addProjectForm = document.getElementById('addProject-form');
const updateProjectForm = document.getElementById('alterProject-form');
const bodyData = document.getElementById('bodyData');

logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut();
  dataScreen.style.display = 'none';
  loginScreen.style.display = 'block';
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in');
    loginScreen.style.display = 'none';
    dataScreen.style.display = 'block';
    getDataFirebase();
    console.log('Auth Sucess');
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

//! ---------------------------- *Model View Controller* ----------------------------------*/
function openModelAddProject() {
  openModal(document.getElementById('addProjectModel'));
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.boxModal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

let updateMode = false;

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  updateMode = true;
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  updateMode = false;
}
//* ----------------------------------------------------------------------------------------*/
//! ---------------------------------- *Login Handler* ------------------------------------ */

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
      // retriveData();
    })
    .catch((err) => {
      if (err.code === 'auth/wrong-password') {
        alert('Wrong Email/Password');
      } else if (err.code === 'auth/user-not-found') {
        alert('User Not Found...');
      }
    });
}
//* -------------------------------------------------------------------------------------*/
//! ---------------------------------- *Add Project* ------------------------------------ */
addProjectForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  var uid = uuidv4();
  var realTimeDataBase = firebase.database().ref(`projects/${uid}`);

  var project = {
    id: uid,
    projectName: projectName.value,
    projectDesc: projectDesc.value,
    projectLink: projectLink.value,
    projectImage: projectImage.value,
    sprintDay: sprintDay.value,
    dateProject: dateProject.value,
    htmlTag: htmlTag.checked,
    cssTag: cssTag.checked,
    jsTag: jsTag.checked,
    apiTag: apiTag.checked,
    reactTag: reactTag.checked,
    mongoDBTag: mongoDBTag.checked,
    expressTag: expressTag.checked,
    nodeTag: nodeTag.checked,
  };

  realTimeDataBase
    .set(project)
    .then(() => {
      alert('Successfully Submited');
      projectImage.value = '';
      projectImage.src = '/assets/Image/background_1_original.png';
      addProjectForm.reset();
      window.location.reload();
    })
    .catch((error) => {
      alert(`Error: ${error}`);
    });
  console.log(project);
});

//! ---------------------------------- *Update Project* ------------------------------------ */

//! -------------------------------- *Add Imagge To Project* ------------------------------ */
const inputFile = document.getElementById('inputFile');
const selectedFile = inputFile.files[0];

inputFile.addEventListener('input', () => {
  var fReader = new FileReader();
  fReader.readAsDataURL(inputFile.files[0]);
  fReader.onloadend = function (event) {
    projectImage.src = event.target.result;
    projectImage.value = event.target.result;
  };
});

const alterinputFile = document.getElementById('alterinputFile');
alterinputFile.addEventListener('input', () => {
  var fReader = new FileReader();
  fReader.readAsDataURL(alterinputFile.files[0]);
  fReader.onloadend = function (event) {
    alterprojectImage.src = event.target.result;
    alterprojectImage.value = event.target.result;
  };
});

//! ---------------------------------- *Recive Project* ------------------------------------ */

var projects = [];
var dataId = '';

async function getDataFirebase() {
  firebase
    .database()
    .ref('projects/')
    .once('value', function (snapshot) {
      try {
        projects = Object.values(snapshot.val());
      } catch (error) {
        alert("You Don't Have any Data...");
      }
      if (projects != '') {
        projects.forEach((project, index) => {
          addProjectToDOM(index, project);
          //itemClick(index, project);
        });
      } else {
        alert('No Data');
      }
    });
}

// function itemClick(index, data) {
//   document
//     .getElementById(`update_${data.id}`)
//     .addEventListener('click', async () => {
//       dataId = data.id;
//       console.log(dataId);
//       openModal(document.getElementById('updateProject'));
//       firebase
//         .database()
//         .ref(`projects/${dataId}`)
//         .once('value', function (snapshot) {
//           try {
//             var data = snapshot.val();
//             altrationPage(data);
//           } catch (error) {
//             alert("You Don't Have any Data...");
//           }
//         });
//     });
// }

function addProjectToDOM(index, data) {
  bodyData.innerHTML += `
  <div class="blockDta resDta" id="${data.id}" style="background-image: url('${data.projectImage}');background-size: cover;background-position: center;background-repeat: no-repeat;">
    <div class="displayHoverRes singleDeti">
        <h1>${data.projectName}</h1>
    </div>
    <div class="displayHoverRes deleteBtn flexCenter" id="delete_${data.id}" onclick="clickDelete(this.id)">
        <i class="fas fa-trash-alt"></i>
    </div>
    <div class="displayHoverRes editBtn flexCenter" id="update_${data.id}" onclick="clickUpdate(this.id)">
        <i class="fas fa-edit"></i>
    </div>
</div>
  `;
}
function clickUpdate(data) {
  dataId = data.split('_')[1];
  console.log(dataId);
  openModal(document.getElementById('updateProject'));
  firebase
    .database()
    .ref(`projects/${dataId}`)
    .once('value', function (snapshot) {
      try {
        var data = snapshot.val();
        altrationPage(data);
      } catch (error) {
        alert("You Don't Have any Data...");
      }
    });
}
async function clickDelete(data) {
  const id = data.split('_')[1];
  var realTimeDataBase = firebase.database().ref(`projects/${id}`);
  if (confirm("Really Want to delete! You can't Revocer it.")) {
    await realTimeDataBase.remove();
    alert('Data Deleted');
    window.location.reload();
  }
}

function altrationPage(data) {
  alterprojectName.value = data.projectName;
  alterprojectDesc.value = data.projectDesc;
  alterprojectLink.value = data.projectLink;
  alterprojectImage.value = data.projectImage;
  alterprojectImage.src = data.projectImage;
  altersprintDay.value = data.sprintDay;
  alterdateProject.value = data.dateProject;
  alterhtmlTag.checked = data.htmlTag;
  altercssTag.checked = data.cssTag;
  alterjsTag.checked = data.jsTag;
  alterapiTag.checked = data.apiTag;
  alterreactTag.checked = data.reactTag;
  altermongoDBTag.checked = data.mongoDBTag;
  alterexpressTag.checked = data.expressTag;
  alternodeTag.checked = data.nodeTag;

  console.log(data);

  updateProjectForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    var projectAltered = {
      id: dataId,
      projectName: alterprojectName.value,
      projectDesc: alterprojectDesc.value,
      projectLink: alterprojectLink.value,
      projectImage: alterprojectImage.value,
      sprintDay: altersprintDay.value,
      dateProject: alterdateProject.value,
      htmlTag: alterhtmlTag.checked,
      cssTag: altercssTag.checked,
      jsTag: alterjsTag.checked,
      apiTag: alterapiTag.checked,
      reactTag: alterreactTag.checked,
      mongoDBTag: altermongoDBTag.checked,
      expressTag: alterexpressTag.checked,
      nodeTag: alternodeTag.checked,
    };

    var realTimeDataBase = firebase.database().ref(`projects/${dataId}`);
    if (updateMode) {
      updateMode = false;
      await realTimeDataBase
        .set(projectAltered)
        .then(() => {
          alert('Update Done');
          updateProjectForm.reset();
          window.location.reload();
        })
        .catch((error) => {
          alert(`Sorry :: ${error}`);
        });
    }
  });
}
