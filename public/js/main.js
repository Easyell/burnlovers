/**
 * Created by zyg on 15/11/6.
 */
var hello = require('./example/hello');
var PIXI = require('./bower_components/pixi.js/bin/pixi.js')
var fire = require('./example/fires')
var renderer = new PIXI.WebGLRenderer(800, 600)
document.body.appendChild(renderer.view)
var stage = new PIXI.Container()
fire.createSelf(function() {
    fire.play()
    stage.addChild(fire)
})