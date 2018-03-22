<template>
	<div id="newDrow">
		<canvas ref="renderCanvas"></canvas>
	</div>
</template>

<script>
import * as PIXI from 'pixi.js'
	export default {
		data () {
		    return {
		     newApp: {} 
	    	}
	    },
	 	mounted() {
	 		console.log(PIXI);
	 	let Application = PIXI.Application,
		    resources = PIXI.loader.resources,
		    Sprite = PIXI.Sprite,
		    Text = PIXI.Text,
		    Container = PIXI.Container,
		    loader = PIXI.loader,
		    TextStyle = PIXI.TextStyle;
		const renderCanvas = this.$refs.renderCanvas;
	    let newApp = new Application({
	    width: 800, 
	    height: 512,                       
	    antialias: true, 
	    transparent: false, 
	    resolution: 1,
	    view: renderCanvas,
	    backgroundColor: 0x161640
	    });
	    
let  dungeon, girl, state, treasure, blobs, door,  gameScene, message, gameOverScene;

	    try {
			loader.add(["../static/img/girl.gif",
						"../static/img/treasure.png",
						"../static/img/door.png",
						"../static/img/blob.png"]).load(setup);
		}
		catch(e) {
			loader.load(setup);
		}
		function keyboard(keyCode) {
			let key = {};
			key.code = keyCode;
			key.isDown = false;
			key.isUp = true;
			key.press = undefined;
			key.release = undefined;
			key.downHandler = event => {
			  	if (event.keyCode === key.code) {
			    	if (key.isUp && key.press) key.press();
				    key.isDown = true;
				    key.isUp = false;
			  	}
			    event.preventDefault();
			};
			key.upHandler = event => {
			    if (event.keyCode === key.code) {
			      	if (key.isDown && key.release) key.release();
			     	key.isDown = false;
			     	key.isUp = true;
			    }
			    event.preventDefault();
			};
			
	window.addEventListener(
			  	"keydown", key.downHandler.bind(key), false
			);
			window.addEventListener(
			  	"keyup", key.upHandler.bind(key), false
			);
			return key;
		}

		function setup() {
			gameScene = new Container();
  			newApp.stage.addChild(gameScene);

			girl = new Sprite(resources["../static/img/girl.gif"].texture);
			// console.log(girl)
			girl.scale.set(0.5, 0.5);
  			girl.x = 10;
  			girl.y = 30;
  			girl.vx = 0;
			girl.vy = 0;
  			gameScene.addChild(girl);

  			treasure = new Sprite(resources["../static/img/treasure.png"].texture);
  			treasure.x = 730;
  			treasure.y = 237;
  			gameScene.addChild(treasure);

  			door = new Sprite(resources["../static/img/door.png"].texture);
  			door.x = 32;
  			door.y = 32;
  			gameScene.addChild(door);
  			let numberOfBlobs = 12,
			    spacing = 48,
			    xOffset = 150,
			    speed = 3,
			    direction = 1;

			blobs = [];    
  			for (let i = 0; i < numberOfBlobs; i++) {

			    let blob = new Sprite(resources["../static/img/blob.png"].texture);
			    let x = spacing * i + xOffset;
			    let y = randomInt(0, (gameScene.height - blob.height));
			    blob.x = x;
			    blob.y = y;
			    blob.vy = speed * direction;
			    direction *= -1;
			    blobs.push(blob);
			    gameScene.addChild(blob);
			}
			gameOverScene = new Container();
			newApp.stage.addChild(gameOverScene);
			gameOverScene.visible = false;

			let style = new TextStyle({
			    fontFamily: "Futura",
			    fontSize: 64,
			    fill: "green"
			});
			message = new Text("Ohhh...Game Over.", style);
			message.x = 245;
			message.y = 232;
			gameOverScene.addChild(message);

  			let left = keyboard(37),
			    up = keyboard (38),
			    right = keyboard (39),
			    down = keyboard (40);
			left.press = () => {
			    //Change the girl's velocity when the key is pressed
			    girl.vx = -5;
			    girl.vy = 0;
			};
			left.release = () => {
	 if (!right.isDown && girl.vy === 0) {
			      girl.vx = 0;
			    }
			};
			
			up.press = () => {
			    girl.vy = -5;
			    girl.vx = 0;
			};
			up.release = () => {
			    if (!down.isDown && girl.vx === 0) {
			     girl.vy = 0;
			    }
			};
			
			right.press = () => {
			    girl.vx = 5;
			   girl.vy = 0;
			};
			right.release = () => {
			    if (!left.isDown && girl.vy === 0) {
			    girl.vx = 0;
			    }
			};
			
			down.press = () => {
			    girl.vy = 5;
			    girl.vx = 0;
			}; 
			down.release = () => {
			    if (!up.isDown && girl.vx === 0) {
			      girl.vy = 0;
			    }
			};
  			state = play;
  			newApp.ticker.add(delta => gameLoop(delta));
			}

		function randomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function gameLoop(delta){
			// girl.x += 1;
			state(delta);
		}
		
		function play(delta) {
			girl.x += girl.vx;
  			girl.y += girl.vy;

  			contain(girl, {x: 55, y: 32, width: 750, height: 480}); 

  			blobs.forEach(function(blob) {
				blob.y += blob.vy;

				let blobHitsWall = contain(blob, {x: 19, y: 10, width: 700, height: 480});

				if (blobHitsWall === "top" || blobHitsWall === "bottom") {
				    blob.vy *= -1;
				}
				if(hitTestRectangle(girl, blob)) {
					gameScene.visible = false;
				    gameOverScene.visible = true;
				}
			});
			if (hitTestRectangle(girl, treasure)) {
			   
			    treasure.x = girl.x + 8;
			    treasure.y = girl.y + 8;
 			}
 			if (hitTestRectangle(treasure, door)) {
			    state = end;
			    message.text = "You're lucky)";
		  	} 	
		}

		function end() {
			gameScene.visible = false;
			gameOverScene.visible = true;
			}

		function contain(sprite, container) {
			let collision = undefined;
			
			if (sprite.x < container.x) {
			  sprite.x = container.x;
			  collision = "left";
			}
			  
			if (sprite.y < container.y) {
			  sprite.y = container.y;
			  collision = "top";
			}
			 
			if (sprite.x + sprite.width > container.width) {
			  sprite.x = container.width - sprite.width;
			  collision = "right";
			}
			  
			if (sprite.y + sprite.height > container.height) {
			  sprite.y = container.height - sprite.height;
			  collision = "bottom";
			}
			return collision;
		}
		function hitTestRectangle(r1, r2) {

			let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
			hit = false

			r1.centerX = r1.x + r1.width / 2; 
			r1.centerY = r1.y + r1.height / 2; 
			r2.centerX = r2.x + r2.width / 2; 
			r2.centerY = r2.y + r2.height / 2;
			r1.halfWidth = r1.width / 2;
			r1.halfHeight = r1.height / 2;
			r2.halfWidth = r2.width / 2;
			r2.halfHeight = r2.height / 2;
			vx = r1.centerX - r2.centerX;
			vy = r1.centerY - r2.centerY;

			combinedHalfWidths = r1.halfWidth + r2.halfWidth;
			combinedHalfHeights = r1.halfHeight + r2.halfHeight;

			if (Math.abs(vx) < combinedHalfWidths) {
			  	if (Math.abs(vy) < combinedHalfHeights) {
			   	 	hit = true;
			  	} 
			  	else {
			      	hit = false;
			    }
			} 
			else {
			    hit = false;
			}
			  return hit;
		};	
	}
}
</script>
<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#newDrow {
		@extend .interface_by_Vue;
	}

</style>