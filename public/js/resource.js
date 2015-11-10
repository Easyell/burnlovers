/**
 * Created by zyg on 15/11/7.
 */

var localResource = {
  torch:'/assets/fires/fires.json',
  flyingTorch:'/assets/fires/flying_fire.png',
  landFire: '/assets/fires/land_fire.png',
  hands: '/assets/hands/hands.json',
  fff: '/assets/fff/fff.json',
  fffStart: '/assets/fff/fff_start.json',
  lovers: '/assets/lovers.png',
  loversframe: '/assets/loversframe.json',
  background: '/assets/background/background.jpg',
  startBackground:'/assets/background/start_background.png',
  drool:'/assets/drool/drool.json',
  startButton: '/assets/start_button.png',
  endProgress: '/assets/endProgress/end_progress.json'
};

var cdn1Resource = {

};

var resourceMap = {
  local:localResource,
  cdn1:cdn1Resource
}

module.exports = resourceMap[resourcePosition];