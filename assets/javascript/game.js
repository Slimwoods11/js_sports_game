let resetbutton = document.querySelector('#reset-button');
let teamoneshootbutton = document.querySelector('#teamone-shoot-button');
let teamtwoshootbutton = document.querySelector('#teamtwo-shoot-button');
let goalsteamone = document.querySelector('#teamone-numgoals');
let goalsteamtwo = document.querySelector('#teamtwo-numgoals');

const numresets = document.querySelector('#num-resets');
const teamonenumshots = document.querySelector('#teamone-numshots');
const teamtwonumshots = document.querySelector('#teamtwo-numshots');

let shotstakenteamone = 0;
let shotstakenteamtwo = 0;
let resetshotstaken = 0;
let teamonenumgoals = 0;
let teamtwonumgoals = 0;

teamoneshootbutton.addEventListener('click', function () {
  shotstakenteamone = shotstakenteamone + 1;
  teamonenumshots.innerHTML = shotstakenteamone;
  if (Math.random() * 100 < 45) {
    console.log('hi');

    teamonenumgoals = teamonenumgoals + 1;
    goalsteamone.innerHTML = teamonenumgoals;
  }
});

teamtwoshootbutton.addEventListener('click', function () {
  shotstakenteamtwo = shotstakenteamtwo + 1;
  teamtwonumshots.innerHTML = shotstakenteamtwo;

  if (Math.random() * 100 < 45) {
    console.log('hi');

    teamtwonumgoals = teamtwonumgoals + 1;
    goalsteamtwo.innerHTML = teamtwonumgoals;
  }
});

resetbutton.addEventListener('click', function () {
  resetshotstaken = resetshotstaken + 1;
  numresets.innerHTML = resetshotstaken;

  shotstakenteamone = 0;
  shotstakenteamtwo = 0;
  teamonenumgoals = 0;
  teamtwonumgoals = 0;

  teamonenumshots.innerHTML = shotstakenteamone;
  teamtwonumshots.innerHTML = shotstakenteamtwo;
  goalsteamone.innerHTML = teamonenumgoals;
  goalsteamtwo.innerHTML = teamtwonumgoals;
});
