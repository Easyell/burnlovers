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

var ready = require('./loader');

ready(function (com) {
    stage.init()
    startStage.init(function() {
        startStage.clear()
        stage.init()
        render(stage)
    })
    render(startStage);
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


