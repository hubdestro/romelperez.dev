import userData from 'data/user.js';

export default {
  ga: '',
  animTime: 400,
  resources: [{
    src: userData.profile,
    type: createjs.AbstractLoader.IMAGE
  }, {
    src: 'https://fonts.googleapis.com/css?family=Rambla:400,400italic,700,700italic|Lato:400,700,400italic,700italic',
    type: createjs.AbstractLoader.CSS
  }, {
    src: 'https://cdn.materialdesignicons.com/1.6.50/css/materialdesignicons.min.css',
    type: createjs.AbstractLoader.CSS
  }, {
    name: 'started',
    src: '/sound/app-loaded.mp3',
    ext: 'mp3',
    type: createjs.AbstractLoader.SOUND
  }, {
    name: 'started',
    src: '/sound/app-loaded.ogg',
    ext: 'ogg',
    type: createjs.AbstractLoader.SOUND
  }, {
    name: 'click',
    src: '/sound/click.mp3',
    ext: 'mp3',
    type: createjs.AbstractLoader.SOUND
  }, {
    name: 'click',
    src: '/sound/click.ogg',
    ext: 'ogg',
    type: createjs.AbstractLoader.SOUND
  }, {
    name: 'over',
    src: '/sound/over.mp3',
    ext: 'mp3',
    type: createjs.AbstractLoader.SOUND
  }, {
    name: 'over',
    src: '/sound/over.ogg',
    ext: 'ogg',
    type: createjs.AbstractLoader.SOUND
  }]
};