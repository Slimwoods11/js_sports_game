let resetbutton = document.querySelector('#reset-button');
let teamoneshootbutton = document.querySelector('#teamone-shoot-button');
let teamtwoshootbutton = document.querySelector('#teamtwo-shoot-button');

const numresets = document.querySelector('#num-resets');
const teamonenumshots = document.querySelector('#teamone-numshots');
const teamtwonumshots = document.querySelector('#teamtwo-numshots');

let shotstakenteamone = 0;
let shotstakenteamtwo = 0;
let resetshotstaken = 0;

teamoneshootbutton.addEventListener('click', function () {
  shotstakenteamone = shotstakenteamone + 1;
  teamonenumshots.innerHTML = shotstakenteamone;
  let teamonenumgoals = Math.floor(Math.random() * 8 + 1);
  document.getElementById('teamone-numgoals').innerHTML = teamonenumgoals;
});

teamtwoshootbutton.addEventListener('click', function () {
  shotstakenteamtwo = shotstakenteamtwo + 1;
  teamtwonumshots.innerHTML = shotstakenteamtwo;
  let teamtwonumgoals = Math.floor(Math.random() * 8 + 1);
  document.getElementById('teamtwo-numgoals').innerHTML = teamtwonumgoals;
});

resetbutton.addEventListener('click', function () {
  resetshotstaken = resetshotstaken + 1;
  numresets.innerHTML = resetshotstaken;

  shotstakenteamone = 0;
  shotstakenteamtwo = 0;

  teamonenumshots.innerHTML = shotstakenteamone;
  teamtwonumshots.innerHTML = shotstakenteamtwo;
});
