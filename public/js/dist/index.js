/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:7301/public/js/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/6.
	 */
	var common = __webpack_require__(1);
	var sprite = __webpack_require__(2);
	var renderer;
	var r = common.isSupportWebGL();
	if(r){
	    renderer= new PIXI.WebGLRenderer(640, 1004, {
	          transparent:true
	      }
	    );
	}else{
	    renderer= new PIXI.CanvasRenderer(640, 1004, {
	          transparent:true
	      }
	    );
	}
	
	document.body.appendChild(renderer.view);
	var audio = document.getElementById('audio')
	audio.loop = true
	
	var stage = __webpack_require__(3);
	var startStage = __webpack_require__(18)
	var mainStage = new PIXI.Container()
	var ready = __webpack_require__(21);
	
	ready(function (com) {
	    stage.gameOver = function() {
	        stage.clear()
	        startStage.init()
	        mainStage.addChild(startStage)
	        audio.pause()
	    }
	    startStage.start = function() {
	        startStage.clear()
	        stage.init()
	        mainStage.addChild(stage)
	        audio.play()
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
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/10.
	 */
	module.exports = {
	  isSupportWebGL: function () {
	    if (!!window.WebGLRenderingContext) {
	      var canvas = document.createElement("canvas"),
	        names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
	        context = false;
	
	      for (var i = 0; i < 4; i++) {
	        try {
	          context = canvas.getContext(names[i]);
	          if (context && typeof context.getParameter == "function") {
	            // else, return just true
	            return true;
	          }
	        } catch (e) {
	        }
	      }
	
	      // WebGL is supported, but disabled
	      return false;
	    }
	
	    // WebGL not supported
	    return false;
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var setValue = function(obj,key,value){
	    if(key.length === 1){
	        var k0 = key[0];
	        if(typeof obj[k0] === 'function'){
	            obj[k0].apply(obj,[].concat(value));
	        }else{
	            obj[k0] = value;
	        }
	    }else{
	        setValue(obj[key.shift()],key,value);
	    }
	    return obj;
	};
	
	var setConfig = function(object,config){
	    for(var k in config){
	        setValue(object, k.split('.'),config[k]);
	    }
	    return object;
	};
	
	module.exports = {
	    getMc:function(config){
	        var maxFrame = config.maxFrame;
	        var preFix = config.preFix;
	        var         frames = [];
	
	        delete config.maxFrame;
	        delete config.preFix;
	
	        for(var i=1;i<=maxFrame;i++){
	            frames.push(PIXI.Texture.fromFrame(preFix + i + '.png'))
	        }
	
	        var mc = new PIXI.extras.MovieClip(frames);
	        mc.maxFrame = config.maxFrame
	        return setConfig(mc,config);
	    },
	    getIm:function(config){
	        var img = config.img;
	
	        delete config.img;
	
	        var texture = PIXI.Texture.fromImage(img);
	        var sp = new PIXI.Sprite(texture);
	
	        return setConfig(sp,config);
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(4)
	var stage = new PIXI.Container();
	var htmlTitle =document.querySelector('title');
	
	var generateLovers = function(stage, x) {
	    var lovers = __webpack_require__(5)(x)
	    lovers.play()
	    stage.loversArr.push(lovers)
	    stage.addChild(lovers);
	    //console.log('增加后：' + loversArr.length)
	}
	
	var randomLovers = {
	    0: function(stage) {
	        generateLovers(stage, 0)
	    },
	    1: function(stage) {
	        generateLovers(stage, 1)
	    },
	    2: function(stage) {
	        generateLovers(stage, 2)
	    },
	    3: function(stage) {
	        generateLovers(stage, 0)
	        generateLovers(stage, 2)
	    },
	    4: function(stage) {
	        generateLovers(stage, 0)
	        generateLovers(stage, 1)
	    },
	    5: function(stage) {
	        generateLovers(stage, 1)
	        generateLovers(stage, 2)
	    },
	    6: function(stage) {
	        generateLovers(stage, 0)
	        generateLovers(stage, 1)
	        generateLovers(stage, 2)
	    }
	}
	
	stage.clear = function() {
	    stage.removeChildren()
	    stage.parent.removeChild(stage)
	    this.visible = false
	}
	
	function rate (count) {
	    if (count > 200 * 0.99) {
	        return 99 + '%'
	    } else {
	        return count / 200 * 100 + '%'
	    }
	}
	
	stage.showEndMask = function() {
	    stage.isEnd = true
	    stage.interactive = false
	    var mask = sprite.getIm({
	        img: R.endMask,
	        'position.set':[0,0],
	        'width':640,
	        'height':1004
	    });
	    var textStr = rate(stage.burnCount);
	    var text = new PIXI.Text(textStr,{font : '50px Arial', fill : 0x000000, align : 'center'});
	    text.x = 360
	    text.y = 340
	
	    var backButton = sprite.getIm({
	        img: R.backButton,
	        'anchor.set': [0.5, 0.5],
	        'position.set':[320,550]
	    });
	    backButton.interactive = true
	    backButton.on('touchstart', function(e) {
	        stage.gameOver()
	    })
	    stage.addChild(mask)
	    stage.addChild(backButton)
	    stage.addChild(text)
	}
	
	stage.init = function() {
	    stage.isEnd = false
	    stage.interactive = true
	    stage.loversArr = []
	    stage.timer = 0
	    stage.lg = 0 //lover group count
	    this.visible = true
	    this.burnCount = 0
	    this.progress = 0
	
	    var count = __webpack_require__(11)()
	    var hand = __webpack_require__(12);
	
	    hand.play();
	
	    var fff = __webpack_require__(13);
	
	    fff.play();
	
	    var torch = __webpack_require__(14);
	
	    torch.play();
	
	    var endProgress = __webpack_require__(10)
	    endProgress.gotoAndStop(stage.progress)
	    var bg = sprite.getIm({
	        img: R.background,
	        'position.set':[0,0],
	        'width':640,
	        'height':1004
	    });
	    var throwTorch = __webpack_require__(15)
	    throwTorch({
	        before:function(){
	            console.log('beforeTorch');
	            hand.gotoAndPlay(0);
	            torch.rf = 2
	        }
	    })
	    this.addChild(bg);
	    this.addChild(endProgress)
	    this.addChild(torch);
	    this.addChild(hand)
	    this.addChild(fff)
	    this.addChild(count)
	}
	
	stage.render = function() {
	    if(this.isEnd) {
	        return
	    }
	    if(stage.timer % 120 == 0) {
	        var r = parseInt(Math.random() * 7)
	        randomLovers[r](stage)
	        stage.lg ++
	    }
	    stage.timer ++
	    stage.children.forEach((function(child){
	        if(child.render){
	            child.render();
	        }
	    }));
	}
	
	module.exports = stage;
	


/***/ },
/* 4 */
/***/ function(module, exports) {

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
	  endProgress: '/assets/endProgress/end_progress.json',
	  backButton: '/assets/back_button.png',
	  endMask: '/assets/background/end_mask.png'
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
	  endProgress: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511101612/endProgress/end_progress.json',
	  backButton: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511102327/back_button.png',
	  endMask: 'http://7tszl1.com1.z0.glb.clouddn.com/Users/zyg/Documents/burnlovers/uploadDir/1511102331/end_mask.png',
	};
	
	var resourceMap = {
	  local:localResource,
	  cdn1:cdn1Resource
	};
	
	module.exports = resourceMap['local'];//resourceMap[resourcePosition] || resourceMap['local'];


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var sprite = __webpack_require__(2);
	var spriteTool = __webpack_require__(6)
	var R = __webpack_require__(4)
	var config = __webpack_require__(7)
	var stage = __webpack_require__(3)
	
	
	var droolBuild = __webpack_require__(9);
	
	var loverBuilder = function(type ,cb) {
	    var cf = config.lovers[type]
	    var lovers = sprite.getMc({
	        maxFrame: 6,
	        preFix: 'lovers',
	        'position.set': [cf.x, 480],
	        'animationSpeed': 0.2,
	        'anchor.set': [0.5, 0.5],
	        'scale.x': 0.5,
	        'scale.y': 0.5
	    })
	
	    lovers.shootDistance = 210 + 150 * Math.random()
	
	    lovers.direction = spriteTool.makeIdentity(cf.direction)
	    lovers.speed = 10 + stage.lg * 0.1
	    console.log(lovers.speed)
	
	    lovers.dscale = 0.5 * lovers.speed / 5000
	
	    lovers.move = function(dt) {
	        this.scale.x += lovers.dscale
	        this.scale.y += lovers.dscale
	        this.x = this.x + this.direction[0] * this.speed * dt
	        this.y = this.y + this.direction[1] * this.speed * dt
	    };
	
	    lovers.checkout = function() {
	        if(!this.drooled && lovers.y > (1004 - lovers.shootDistance)){
	            console.log('吐口水啦');
	
	            this.drooled = true;
	
	            var drool = droolBuild({
	                x:lovers.x,
	                y:lovers.y
	            });
	
	            this.parent.addChild(drool,2);
	
	        }
	
	        if(lovers.y > (1004 - 70)) {
	            var stage = this.parent;
	            stage.removeChild(lovers)
	            stage.loversArr.splice(stage.loversArr.indexOf(lovers), 1)
	            lovers.destroy()
	        }
	    }
	
	    lovers.render = function(){
	        this.move(0.1);
	        this.checkout()
	    }
	    return lovers
	}
	
	module.exports = loverBuilder

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var makeIdentity = function(a) {
	    if(a[0] == 0 && a[1] == 0) {
	        return [0, 0]
	    }
	    var b = Math.pow((Math.pow(a[0], 2) + Math.pow(a[1], 2)), 0.5);
	    return [a[0] / b , a[1] / b]
	};
	
	var distance = function(x1, y1, x2, y2) {
	    return Math.pow((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)), 0.5);
	}
	
	var extend = function(){
	    arguments = [].slice.call(arguments);
	    var l = arguments.length;
	    if(arguments.length>1){
	        var from = arguments[l-1],
	          target = arguments[l-2];
	
	        for(var k in from){
	            target[k] = from[k];
	        }
	        arguments.pop();
	
	        return extend.apply(null,arguments);
	    }else{
	        return arguments[0];
	    }
	};
	
	module.exports = {
	    makeIdentity:makeIdentity,
	    distance: distance,
	    extend:extend
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 11/8/15.
	 */
	
	module.exports = {
	    lovers: __webpack_require__(8)()
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by guoshencheng on 11/8/15.
	 */
	
	var config = {
	    0:{
	        x: 280,
	        direction:[-2, 5]
	    },
	    1: {
	        x: 325,
	        direction:[0, 5]
	    },
	    2: {
	        x:370,
	        direction:[2, 5]
	    }
	}
	
	module.exports = function() {
	    return config
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/8.
	 */
	var sprite = __webpack_require__(2);
	var stage = __webpack_require__(3)
	var spriteTools = __webpack_require__(6);
	var endProgress = __webpack_require__(10)
	
	var droolBuild = function(config){
	    if(!config){
	        config = {
	            x:320,
	            y:320
	        }
	    }
	
	    var drool = sprite.getMc(spriteTools.extend(config,{
	        maxFrame:2,
	        preFix:'drool',
	        'anchor.set':[0.5,0.5],
	        'scale.x':0.25,
	        'scale.y':0.25,
	        'loop':false
	    }));
	
	    drool.speed = 4;
	    drool.direction  =spriteTools.makeIdentity([85-config.x,940-config.y]);
	
	    //停留帧数
	    drool.keeyTimes = 60;
	
	    drool.fly = function(dt){
	        this.x = this.x + this.direction[0] * this.speed * dt
	        this.y = this.y + this.direction[1] * this.speed * dt
	
	    };
	
	    drool.hit = function(){
	        if(this.y >= 940){
	            return true;
	        }
	    }
	    drool.hited = function(){
	        if(this.keeyTimes > 0){
	            if(this.keeyTimes == 60) {
	                stage.progress ++
	                endProgress.gotoAndStop(stage.progress)
	                if(stage.progress == 10) {
	                    stage.showEndMask()
	                }
	            }
	            this.keeyTimes--;
	            this.scale.x = 0.5;
	            this.scale.y = 0.5;
	
	            this.gotoAndStop(1);
	
	        }else{
	            this.parent.removeChild(this);
	        }
	    }
	
	    drool.render = function(){
	        if(this.hit()){
	            this.hited();
	        }else{
	            this.fly(2);
	        }
	    };
	
	    return drool
	};
	
	module.exports = droolBuild;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 11/10/15.
	 */
	
	var sprite = __webpack_require__(2);
	
	var endProgress = sprite.getMc({
	    maxFrame: 11,
	    preFix:'end_progress',
	    'position.set': [200, 990],
	    'anchor.set': [0, 1],
	    'loop':false,
	    'scale.x': 1,
	    'scale.y': 1
	});
	
	module.exports = endProgress;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var stage = __webpack_require__(3);
	var htmlTitle = document.querySelector('title');
	var text = new PIXI.Text('已经烧死 ' + stage.burnCount + ' 对',{font : '24px Arial', fill : 0xffffff, align : 'center'});
	
	function changeTitle (count) {
	    var p
	    if (count > 200 * 0.99) {
	        p =  99 + '%'
	    } else {
	        p = count / 200 * 100 + '%'
	    }
	    var title = '我成功烧掉' + count + '对情侣,击败了' + p + '的单身狗';
	    htmlTitle.innerText = title;
	}
	
	text.x = 400
	text.y = 60
	text.render = function() {
	    this.text = '已经烧死 ' + stage.burnCount + ' 对'
	
	    changeTitle(stage.burnCount);
	}
	
	module.exports = function() {
	    return text
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var sprite = __webpack_require__(2);
	
	var hand = sprite.getMc({
	    maxFrame: 3,
	    preFix:'hand',
	    'position.set': [130, 1004],
	    'anchor.set': [0, 1],
	    'animationSpeed': 0.3,
	    'loop':false,
	    'scale.x': 0.3,
	    'scale.y': 0.3
	});
	
	module.exports = hand;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var sprite = __webpack_require__(2);
	
	var fff = sprite.getMc({
	    maxFrame: 2,
	    preFix: 'fff',
	    'position.set': [0, 1010],
	    'anchor.set': [0,1],
	    'animationSpeed': 0.05,
	    'scale.x': 0.5,
	    'scale.y': 0.5
	});
	
	module.exports = fff;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var sprite = __webpack_require__(2);
	
	var torch = sprite.getMc({
	    maxFrame: 4,
	    preFix: 'fire',
	    'position.set': [135,960],
	    'anchor.set': [0,1],
	    'animationSpeed': 0.5,
	    'scale.x': 0.3,
	    'scale.y': 0.3
	});
	
	torch.rf = 0
	
	torch.tf = function() {
	
	    if(this.rf <= 0) {
	        this.x = 135, this.y = 960
	        this.rotation = 0
	    } else {
	        if (this.rf <= 1) {
	            this.x = 110, this.y = 980
	            this.rotation = -0.5
	        } else if (this.rf <= 2) {
	            this.x = 135, this.y = 960
	        }
	        this.rf -= 0.3
	    }
	};
	
	torch.render = function() {
	    torch.tf()
	};
	
	module.exports = torch;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var stage = __webpack_require__(3)
	var flyingTorchBuild = __webpack_require__(16);
	var landFireBuilder = __webpack_require__(17)
	
	var defaultConfig = {
	  before: [],
	  after: [],
	  progress: []
	};
	
	var checkShoot = function (x, y) {
	  var i = 0,
	    loversArr = stage.loversArr;
	
	  while (i < loversArr.length) {
	    var lovers = loversArr[i];
	    if (Math.abs(lovers.x - x) < 40 && Math.abs(lovers.y - y) < 40) {
	      loversArr.splice(i, 1);
	      stage.removeChild(lovers)
	      stage.burnCount ++
	    } else {
	      i++;
	    }
	  }
	
	  stage.loversArr = loversArr;
	};
	//等于true，使之能够监听事件
	stage.interactive = true;
	stage.on('touchstart', function (e) {
	  //before
	  defaultConfig.before.forEach(function (fn) {
	    fn()
	  });
	  var x = e.data.global.x;
	  var y = e.data.global.y;
	
	  var flyingTorch = flyingTorchBuild({
	    tarx: x,
	    tary: y,
	    arrived: function (torch) {
	      console.log('目标x:' + torch.tarx + ' 实际到达x：' + torch.x + '目标y:' + torch.y + ' 实际到达y：' + torch.tary);
	      checkShoot(torch.x, torch.y)
	      var landFire = landFireBuilder()
	      landFire.x = torch.x
	      landFire.y = torch.y + torch.height / 3
	      landFire.scale.x = torch.scale.x + 0.1
	      landFire.scale.y = torch.scale.y + 0.1
	      stage.addChild(landFire)
	    }
	  });
	
	  //console.log(+x,+y);
	  //console.log(flyingTorch.direction);
	
	  stage.addChild(flyingTorch);
	
	  //after
	  defaultConfig.after.forEach(function (fn) {
	    fn()
	  });
	});
	
	module.exports = function (throwLifeCb) {
	  //记录插入的坐标
	  var indexes = {};
	
	  for (var period in defaultConfig) {
	    var cb = throwLifeCb[period];
	    if (cb) {
	      indexes[period] = defaultConfig[period].push(cb) - 1;
	    }
	  }
	  //remove
	  return function () {
	    for (var recordPeriod in indexes) {
	      defaultConfig[recordPeriod].splice(indexes[recordPeriod], 1);
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	var sprite = __webpack_require__(2);
	var R = __webpack_require__(4);
	var spriteTools = __webpack_require__(6);
	
	
	var setGravity = function (flyingTorch) {
	    var distance = spriteTools.distance(flyingTorch.x, flyingTorch.y, flyingTorch.tarx, flyingTorch.tary)
	    var times = parseInt(distance / flyingTorch.speed);
	
	    flyingTorch.g = 0.04
	    flyingTorch.vup =  - flyingTorch.g * times / 2
	};
	
	var setConfig = function(flyingTorch){
	    //flyingTorch.vup = 5
	    flyingTorch.x = 160;
	    flyingTorch.y = 870;
	    flyingTorch.direction = spriteTools.makeIdentity([parseInt(flyingTorch.tarx-160),parseInt(flyingTorch.tary-870)]);
	    flyingTorch.speed = 2;
	
	    setGravity(flyingTorch);
	
	    flyingTorch.fly = function(dt){
	        this.scale.x -= (0.001 * dt * Math.abs(this.direction[1]))
	        this.scale.y -= (0.001 * dt * Math.abs(this.direction[1]))
	
	        this.x = this.x + this.direction[0] * this.speed * dt
	        this.y = this.y + this.direction[1] * this.speed * dt
	        this.y = this.y + this.vup * dt
	        this.vup = this.vup + this.g * dt
	    };
	
	
	    flyingTorch.render = function(){
	        if(this.x < 0 || this.x > 640 ||
	                (this.direction[0] < 0 && (this.x < this.tarx)) ||
	                (this.direction[0] >= 0 && (this.x >= this.tarx))) {
	            this.arrived && this.arrived(this);
	            this.parent.removeChild(this)
	        }else{
	            this.fly(2);
	        }
	    };
	
	    return flyingTorch;
	};
	
	module.exports = function(config){
	    var flyingTorch = sprite.getIm(spriteTools.extend({
	        img: R.flyingTorch,
	        'scale.x':0.3,
	        'scale.y':0.3,
	        'anchor.set':[0.5,0.5]
	    },config));
	
	    return setConfig(flyingTorch);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 11/8/15.
	 */
	
	var sprite = __webpack_require__(2)
	var R = __webpack_require__(4)
	var spriteTools = __webpack_require__(6)
	
	var landFireBuilder = function() {
	    var landFire = sprite.getIm(spriteTools.extend({
	        img: R.landFire,
	        'scale.x': 0.3,
	        'scale.y': 0.3,
	        'anchor.set': [0.5, 0.5]
	    }));
	
	    landFire.restTime = 50
	
	    landFire.render = function() {
	        if(this.restTime <= 0) {
	            this.parent.removeChild(this)
	            this.destroy()
	        } else {
	            landFire.restTime --
	        }
	    }
	    return landFire
	}
	
	module.exports = landFireBuilder;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 11/9/15.
	 */
	
	var sprite = __webpack_require__(2)
	var R = __webpack_require__(4)
	
	var stage = new PIXI.Container();
	
	stage.clear = function () {
	    stage.removeChildren()
	    stage.parent.removeChild(stage)
	    this.visible = false
	}
	
	stage.init = function() {
	    this.visible = true
	    var bg = sprite.getIm({
	        img: R.startBackground,
	        'position.set':[0,0],
	        'width':640,
	        'height':1004
	    });
	    var fffStart = __webpack_require__(19)
	    fffStart.play()
	    var torch = __webpack_require__(20);
	    torch.play();
	    var startButton = sprite.getIm({
	        img: R.startButton,
	        'position.set':[20,700]
	    });
	    startButton.interactive = true;
	    startButton.on('touchstart', function () {
	        stage.start()
	    });
	    this.addChild(bg)
	    this.addChild(torch)
	    this.addChild(fffStart)
	    this.addChild(startButton)
	}
	
	stage.render = function() {
	    stage.children.forEach((function(child){
	        if(child.render){
	            child.render();
	        }
	    }));
	}
	
	module.exports = stage

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 11/9/15.
	 */
	
	var sprite = __webpack_require__(2);
	
	var fffStart = sprite.getMc({
	    maxFrame: 2,
	    preFix: 'fff_start',
	    'position.set': [320, 800],
	    'anchor.set': [0.5,1],
	    'animationSpeed': 0.05,
	    'scale.x': 1,
	    'scale.y': 1
	});
	
	module.exports = fffStart;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by guoshencheng on 11/9/15.
	 */
	/**
	 * Created by zyg on 15/11/7.
	 */
	var sprite = __webpack_require__(2);
	
	var torch = sprite.getMc({
	    maxFrame: 4,
	    preFix: 'fire',
	    'position.set': [440,520],
	    'anchor.set': [0,1],
	    'animationSpeed': 0.5,
	    'scale.x': 0.4,
	    'scale.y': 0.4
	});
	
	module.exports = torch;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by zyg on 15/11/7.
	 */
	
	var r = __webpack_require__(4);
	
	module.exports = function (cb) {
	
	    var loader = PIXI.loader; // pixi exposes a premade instance for you to use.
	
	    for (var k in r) {
	        loader.add(k, r[k]);
	    }
	
	    loader.on('progress', function (a, b) {
	        //console.log.apply(console, arguments);
	    });
	
	    loader.once('complete', cb);
	
	    loader.load();
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map