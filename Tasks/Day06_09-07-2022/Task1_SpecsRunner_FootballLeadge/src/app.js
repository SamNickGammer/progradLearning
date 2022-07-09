//Progression 1 - create a Manager array and return it
let managerName = 'Alex Ferguson';
let managerAge = 78;
let currentTeam = 'Manchester FC';
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var array = [managerName, managerAge, currentTeam, trophiesWon];
  return array;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  }
  var resultFormation = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return resultFormation;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  // console.log(year);
  var a = [],
    j = 0;
  players.forEach((player, index) => {
    if (player.debut == year) {
      a[j] = player;
      j++;
    }
  });

  return a;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var a = [],
    j = 0;

  players.forEach((player, index) => {
    if (position == player.position) {
      a[j] = player;
      j++;
    }
  });
  return a;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let a = [];
  players.forEach((player, index) => {
    players[index].awards.forEach((award) => {
      if (award.name == awardName) {
        a.push(player);
      }
    });
  });
  return a;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let a = [];

  players.forEach((player) => {
    var count = 0;
    player.awards.forEach((award, index) => {
      if (award.name == awardName) {
        count++;
      }
    });
    if (count == noOfTimes) {
      a.push(player);
    }
  });
  return a;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let a = [];
  players.forEach((player, index) => {
    player.awards.forEach((award) => {
      if (award.name == awardName && player.country == country) {
        if (!a.includes(player)) {
          a.push(player);
        }
      }
    });
  });
  return a;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, agr) {
  let a = [];

  players.forEach((player, index) => {
    var count = 0;
    if (
      player.awards.length >= noOfAwards &&
      player.team == team &&
      player.age == age
    )
      a.push(players[i]);
  });
  return a;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var a = [];
  players.forEach((player) => {
    a.push(player);
  });
  a.sort((a, b) => {
    return b.age - a.age;
  });
  console.log(a);
  return a;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function filterByNoOfAwardsxTeamxAge(total, team, age) {
  var a = [];
  players.forEach((player) => {
    if (
      total <= player.awards.length &&
      team == player.team &&
      age > player.age
    ) {
      a.push(player);
    }
  });
  return a;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
