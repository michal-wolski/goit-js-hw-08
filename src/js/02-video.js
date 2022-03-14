import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// // player.getCurrentTime().then(function(sec) {
// //     console.log(sec);
// // })

// let x = player.getCurrentTime().then(function(seconds) {
//     return seconds
// }).catch(function(error) {
//     // an error occurred
// });
// player.setCurrentTime(40.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

// console.log(x)

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const timeUpdater = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};

const lastTime = localStorage.getItem('videoplayer-current-time');
const parsedLastTime = JSON.parse(lastTime);

player.on('timeupdate', throttle(timeUpdater, 1000));

console.log(data)

player
  .setCurrentTime(parsedLastTime)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });