const itemFlexContex = document.querySelector('.itemFlexContex');

fetch('https://progradintenship-default-rtdb.firebaseio.com/projects.json')
  .then((res) => res.json())
  .then((data) => {
    if (data === null) {
      itemFlexContex.innerHTML = `
        <div class="noProject">
            <h1 style="font-size:100px">No Projects Found</h1>
            <h2 style="font-size:50px">Please Check Database</h2>
            <a href="/Server" class="adminPortalBtn" >Admin Portal</a>
        </div>
    `;
    } else {
      addProjectToUI(data);
    }
  });

function addProjectToUI(data) {
  Object.keys(data).forEach((id) => {
    const project = data[id];
    console.log(project);
    itemFlexContex.innerHTML += `
    <a class="challengeItem hoverEffect" target="_blank"
    href="${project.projectLink}">
    <div class="card">
        <div class="upperDisplay" style="background-image: url('${
          project.projectImage
        }');background-size: cover;background-position: center;background-repeat: no-repeat;">
            <div class="dayNumber">${project.sprintDay}</div>
            <div class="dateProject">${dateHandller(project.dateProject)}</div>
        </div>
        <div class="lowerDisplay">
            <h2 class="projectName">${project.projectName}</h2>
            <h4 class="projectDesc">${project.projectDesc}</h4>
            <div class="langUsed">
                <div class="lanHTML" style="display:${
                  project.htmlTag ? 'block' : 'none'
                };">HTML</div>
                <div class="lanCSS" style="display:${
                  project.cssTag ? 'block' : 'none'
                };">CSS</div>
                <div class="lanJS" style="display:${
                  project.jsTag ? 'block' : 'none'
                };">JavaScript</div>
                <div class="lanAPI" style="display:${
                  project.apiTag ? 'block' : 'none'
                };">API</div>
                <div class="react" style="display:${
                  project.reactTag ? 'block' : 'none'
                };">ReactJS</div>
                <div class="mongo" style="display:${
                  project.mongoDBTag ? 'block' : 'none'
                };">MongoDB</div>
                <div class="express" style="display:${
                  project.expressTag ? 'block' : 'none'
                };">ExpressJS</div>
                <div class="node" style="display:${
                  project.nodeTag ? 'block' : 'none'
                };">NodeJS</div>
            </div>
        </div>
    </div>
</a>
    `;
  });
  VanillaTilt.init(document.querySelector('.hoverEffect'), {
    max: 25,
    speed: 400,
  });

  //It also supports NodeList
  VanillaTilt.init(document.querySelectorAll('.hoverEffect'));
}
function dateHandller(date) {
  const dateArray = date.split('-');
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  return `${dateArray[2]}<sup>${nth(dateArray[2])}</sup> ${
    months[dateArray[1] - 1]
  } ${dateArray[0]}`;
}
