import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//DOM import
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

//Export to localstorage
const timeUpdater = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};
//Import from localstorage
const lastTime = localStorage.getItem('videoplayer-current-time');
const parsedLastTime = JSON.parse(lastTime);
//Start player whit lisiner
player.on('timeupdate', throttle(timeUpdater, 1000));
//API 
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


