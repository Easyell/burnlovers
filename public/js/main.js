/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');

var fire = require('./example/fires');

var renderer = new PIXI.WebGLRenderer(screen.width, screen.height);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
fire.createSelf(function() {
    fire.play();
    stage.addChild(fire)
});