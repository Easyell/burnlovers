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
  torch:'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/fires/fires.json',
  flyingTorch:'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/fires/flying_fire.png',
  landFire: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/fires/land_fire.png',
  hands: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/hands/hands.json',
  fff: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/fff/fff.json',
  fffStart: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/fff/fff_start.json',
  lovers: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511102127/lovers.png',
  loversframe: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511102127/loversframe.json',
  background: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/background/background.jpg',
  startBackground:'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/background/start_background.png',
  drool:'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/drool/drool.json',
  startButton: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511102127/start_button.png',
  endProgress: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/endProgress/end_progress.json'
};

var resourceMap = {
  local:localResource,
  cdn1:cdn1Resource
};

module.exports = resourceMap[resourcePosition] || resourceMap['local'];