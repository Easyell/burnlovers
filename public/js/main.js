/**
 * Created by zyg on 15/11/6.
 */

var sprite = require('./sprites/sprite');
var renderer = new PIXI.WebGLRenderer(640, 1004, {
        transparent:true
    }
);

document.body.appendChild(renderer.view);


var stage = require('./stage');
var startStage = require('./startStage')
var mainStage = new PIXI.Container()
var ready = require('./loader');

ready(function (com) {
    stage.gameOver = function() {
        stage.clear()
        startStage.init()
        mainStage.addChild(startStage)
    }
    startStage.start = function() {
        startStage.clear()
        stage.init()
        mainStage.addChild(stage)
    }
    startStage.init()
    mainStage.addChild(startStage)
    render(mainStage);
});

var render = function(stage){
    function animate() {
        if(stage.render) {
            stage.render()
        }
        stage.children.forEach((function(child){
            if(child.render){
                child.render();
            }
        }));

        // render the stage container
        renderer.render(stage);

        requestAnimationFrame(animate);
    }
    animate();
};


