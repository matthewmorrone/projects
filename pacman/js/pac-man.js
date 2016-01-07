var camera = new headOn.Camera(224*2, 288*2);
headOn.canvas.create("main",224*2,288*2, camera);
headOn.canvas.create("map", 224*2, 288*2, camera);
var pac_man, grid, red_ghost, blue_ghost, pink_ghost, yellow_ghost, ghost, canvas = headOn.canvas("main");
canvas.append("body");


//types of tiles
//0 un accesable
//1 accesable
map = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//0
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],//3
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//4
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//5
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//6
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],//7
	[0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],//8
	[0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],//9
	[0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],//10
	[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],//11
	[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],//12
	[0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],//13
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//14
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//15
	[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],//16
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//17
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//18
	[0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],//19
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//20
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//21
	[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],//22
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//23
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//24
	[0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0],//25
	[0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],//26
	[0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
	[0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],//28
	[0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],//29
	[0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],//29
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],//29
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//29
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//29
	

];
dots = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//0
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],//3
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//4
	[0,2,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,2,0],//5
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//6
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],//7
	[0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],//8
	[0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],//9
	[0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],//10
	[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],//11
	[0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],//12
	[0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],//13
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//14
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//15
	[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],//16
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//17
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//18
	[0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],//19
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//20
	[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],//21
	[0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],//22
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//23
	[0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0],//24
	[0,2,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,2,0],//25
	[0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],//26
	[0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0],
	[0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0],//28
	[0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],//29
	[0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],//29
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],//29
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//29
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//29
	

];
ghost = {
		frightend:0,
		next_tile: {},
		image: function(){
			if(this.frightend){
				
				return headOn.images("frightend");
			}
			else{
				return headOn.images(this.ghost_name);
			}
		},
		move:moveGhost,
		targetTile:targetTile
	}
	red_ghost = headOn.entity({
		x:88,
		y:72,
		direction: 1,
		next_direction:1,
		ghost_name:"red_ghost",
		current_tile:{x:1, y:0},
		next_tile: {
			direction:1,
			x:4,
			y:4
		}
	},ghost);
	pink_ghost = headOn.entity({
		x:72,
		y:72,
		direction: 1,
		ghost_name:"pink_ghost",
		current_tile:{x:1, y:0},
		next_tile: {
			direction:1,
			x:3,
			y:4
		}
	},ghost);
	orange_ghost = headOn.entity({
		x:56,
		y:72,
		direction: 1,
		ghost_name:"orange_ghost",
		current_tile:{x:1, y:0},
		next_tile: {
			direction:1,
			x:2,
			y:4
		}
	},ghost);
	
headOn.loadImages(
	[
		{name:"red_ghost", src:"img/red_ghost.png"},
		{name:"pink_ghost", src:"img/pink_ghost.png"},
		{name:"orange_ghost", src:"img/orange_ghost.png"}, 
		{name:"frightend", src:"img/frightend.png"}, 
		{name:"bg", src:"img/bg.png"}
	]
, false, function(){
	init();
	headOn.run();
});

pac_man = {
	x: 184,
	y: 376,
	tilex: 0,
	tiley: 0,
	speed:50,
	//up: 0 left:1 down: 2 right:3
	direction: 2,

};
gamestate = {
	// 0 chase 1 scatter
	mode: 0
}
var ghosts = [red_ghost, pink_ghost];
keysDown = {};
addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	setTimeout(function(){
		delete keysDown[e.keyCode];
	}, 100)
}, false);
headOn.update(function(delta){
	delta = delta/1000;
	movePacMan(delta);
	red_ghost.move();
	pink_ghost.move();
	orange_ghost.move();
	
	checkCollisions();

});
headOn.render(function(){
	canvas.canvas.ctx.drawImage(headOn.canvas("map").canvas.canvas, 0,0);
	for(i=0; i<dots[0].length;i++){
		for(j=0;j<dots.length;j++){
			if(dots[j][i]){
				if(dots[j][i] === 1){
					canvas.drawCircle(i*16 + 8, j*16 + 8, 1, "yellow");
				}
				else{
					canvas.drawCircle(i*16 + 8, j*16 + 8, 2.5,"yellow");
				}
			}
		}
	}
	canvas.drawImage( red_ghost.image(), red_ghost.x - (17/2), red_ghost.y - (17/2));
	canvas.drawImage( pink_ghost.image(), pink_ghost.x - (17/2), pink_ghost.y - (17/2));
	canvas.drawImage( orange_ghost.image(), orange_ghost.x - (17/2), orange_ghost.y - (17/2));
	canvas.drawRect(16,16, pac_man.x - (16/2), pac_man.y - (16/2), "yellow");
	
});

function movePacMan(delta){
	var tile = getTile(pac_man.x, pac_man.y);
	var next_tile;
	var type;
	//38:up
	//40:down
	//37:left
	//39:right
	if (38 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,0)
		type = typeOfTile(next_tile)
		if(inCenterOfTile(pac_man, tile) || pac_man.direction === 2){
			if(type){
				pac_man.direction = 0;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 0;
				}
			}
		}

	}
	if (40 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,2)
		type = typeOfTile(next_tile)
		if(inCenterOfTile(pac_man, tile) || pac_man.direction === 0){
			if(type){
				pac_man.direction = 2;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 2;
				}
			}
		}
	}
	if (37 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,1)
		type = typeOfTile(next_tile)
		if(inCenterOfTile(pac_man, tile) || pac_man.direction === 3){
			if(type){
				pac_man.direction = 1;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 1;
				}
			}
		}
		
	}
	if (39 in keysDown) { 
		next_tile = nextTile(tile.x, tile.y ,3)
		type = typeOfTile(next_tile)
		if(inCenterOfTile(pac_man, tile)|| pac_man.direction === 1){
			if(type){
				pac_man.direction = 3;
			}
		}
		else{
			if(closeEnough(pac_man, tile)){
				if(type){
					pac_man.next_direction = 3;
				}
			}
		}
	}
	if(inCenterOfTile(pac_man, tile)){
		if(pac_man.next_direction){
			pac_man.direction = pac_man.next_direction;
			pac_man.next_direction = false;
		}
	}
	if(typeOfTile(nextTile(tile.x, tile.y, pac_man.direction))){

			pac_man.x += velocity(pac_man.speed, pac_man.direction, "x") * delta;
			pac_man.y += velocity(pac_man.speed, pac_man.direction, "y") * delta;
		
		
	}
	else{
		if(!inCenterOfTile(pac_man, tile)){
			pac_man.x += velocity(20, pac_man.direction, "x") * (headOn.fps/1000);
			pac_man.y += velocity(20, pac_man.direction, "y") * (headOn.fps/1000);
		}
	}
	if(tile.x === 0 && tile.y === 17 && inCenterOfTile(pac_man, tile) && pac_man.direction === 1){
		pac_man.x = 27 * 16 +8;
		pac_man.y = 17 * 16 +8;
	}
	if(tile.x === 27 && tile.y === 17 && inCenterOfTile(pac_man, tile) && pac_man.direction === 3){
		pac_man.x = 0 * 16 + 8;
		pac_man.y = 17 * 16 +8;
	}
	// tile = getTile(pac_man.x, pac_man.y);
	// if(pac_man.direction === 0 || pac_man.direction === 2){
		
	// 	pac_man.x = tile.x * 16 +8
	// }
	// else{
	// 	pac_man.y = tile.y * 16 + 8
	// }
}
function moveGhost(ghost){
	var current_tile = getTile(this.x, this.y),
	that = this,
	tile,
	adjTiles,
	passableTiles,
	target_tile,
	directions,
	previous_distance,
	d ={
		0:3,
		3:0,
		1:2,
		2:1
	},
	opposites = {
		up:2,
		right:1,
		down:0,
		left:3,
		0: 2,
		1: 3,
		2: 0,
		3: 1,
	};

	if(current_tile.x === this.next_tile.x && current_tile.y === this.next_tile.y && inCenterOfTile(this, this.next_tile)){
		tile = nextTile(current_tile.x, current_tile.y, this.next_tile.direction);
		var adjTiles = adjacentTiles(tile);
		var passableTiles = [];
		this.direction = this.next_tile.direction;
		target_tile = this.targetTile();
		this.next_tile.x = tile.x;
		this.next_tile.y = tile.y;
		
		adjTiles.forEach(function(t, i){
			if(t && opposites[d[i]] !== that.next_tile.direction){
				passableTiles.push(d[i]);
			}
		})
		if(passableTiles.length > 1){
			directions = {
				0:{
					x:0,
					y: -1
				},
				2:{
					x:0,
					y:1
				},
				1:{
					x:-1,
					y:0
				},
				3:{
					x:1,
					y:0
				}
			}
			
			if(!this.frightend){
				passableTiles.forEach(function(t, i){
					var distance = distanceTo({x:tile.x + directions[t].x, y:tile.y + directions[t].y}, target_tile);
					if(i === 0 || distance <= previous_distance){
						previous_distance = distance;
						that.next_tile.direction = t;
					}
				
				})
			}
			else{
				var max = passableTiles.length && passableTiles.length-1;
				randD = headOn.randInt(0, max);
				this.next_tile.direction = passableTiles[randD];
			}
		}
		// else if( passableTiles[0] !== this.next_tile.direction){
			
		// }
		else{
			this.next_tile.direction = passableTiles[0]
			//this.next_tile.direction = this.direction;
		}
	}
	
	
	this.x += velocity(21, this.direction, "x") * (headOn.fps/1000);
	this.y += velocity(21, this.direction, "y") * (headOn.fps/1000);

	tile = getTile(this.x, this.y)
	if(tile.x === 0 && tile.y === 17 && inCenterOfTile(this, tile) && this.direction === 1){
		next_tile = nextTile(27, 17, 1);
		this.next_tile.direction = 1
		this.x = 27 * 16 +8;
		this.next_tile.x = next_tile.x
	}
	else if(tile.x === 27 && tile.y === 17 && inCenterOfTile(this, tile) && this.direction === 3){
		next_tile = nextTile(0, 17, 3);
		this.next_tile.direction = 3
		this.x = 0 * 16 + 8;
		this.next_tile.x = next_tile.x;
	}
}

function targetTile(ghost){
	switch(this.ghost_name){
		case "red_ghost":
			return redTargetTile();
		case "pink_ghost":
			return pinkTargetTile();
		case "blue_ghost":
			return blueTargetTile();
		case "orange_ghost":
			return orangeTargetTile();
	}
}

function inCenterOfTile(obj,tile){
	if(obj.x >= tile.x * 16 + 7.3 && obj.x <= tile.x * 16 + 8.7){
		if(obj.y >= tile.y *16 +7.3 && obj.y <= tile.y * 16 + 8.7){
			return true;
		}
	}
}
function closeEnough(obj, tile){
	if(obj.x >= tile.x * 16 + 3 && obj.x <= tile.x * 16 + 13){
		if(obj.y >= tile.y * 16 + 3 && obj.y <= tile.y * 16 + 13){
			return true;
		}
	}
}
function redTargetTile(){
	var mode = gamestate.mode;
	if(!red_ghost.frightend){
		if(mode === 0){
			return getTile(pac_man.x, pac_man.y);
		}
		else{
			return {x:2, y:28}
		}
	}
	else{
		return {x:2, y:28}
	}

}
function orangeTargetTile(){
	var mode = gamestate.mode;
	var pac_man_tile = getTile(pac_man.x, pac_man.y);
	var orange_ghost_tile = getTile(orange_ghost.x, orange_ghost.y);
	if(!orange_ghost.frightend){
		if(mode === 0){
			if(distanceTo(pac_man_tile, orange_ghost_tile) > 8){
				return pac_man_tile;
			}
			else{
				return {x:1, y:35}
			}
		}
		else{
			return {x:2, y:28}
		}
	}
	else{
		return {x:2, y:28}
	}

}
function pinkTargetTile(){
	var mode = gamestate.mode,
	tile = getTile(pac_man.x, pac_man.y);
	if(!pink_ghost.frightend){
		if(mode === 0){
			switch(pac_man.direction){
				case 0:
					return {x:tile.x - 4, y:tile.y - 4};
				case 1:
					return {x:tile.x - 4, y:tile.y}
				case 2:
					return {x:tile.x, y:tile.y+4}
				case 3:
					return {x:tile.x + 4, y:tile.y}
			}
		}
		else{
			return {x:2, y:28}
		}
	}
	else{
		return {x:2, y:28}
	}
}

function nextTile(x, y, facing){
	
	switch(facing){
		case 0:
			return {y:y -1, x: x};
		case 1:
			return {y:y, x:x - 1};
		case 2:
			return {y:y+1, x:x}
		case 3:
			return {y:y, x:x+1};
		default:
			console.log("hut")
	}
}
function adjacentTiles(tile){
	return [
		//right
		map[tile.y][tile.x+1],
		//down
		map[tile.y+1][tile.x],
		//left
		map[tile.y][tile.x-1],
		//up
		map[tile.y-1][tile.x]
	]
}
function getTile(x, y){
	var tile_x = Math.ceil(x/16) -1;
	var tile_y = Math.ceil(y/16) -1;
	return {
		x: tile_x,
		y: tile_y
	};
}
function typeOfTile(tile){
	return map[tile.y][tile.x];
}
function distanceTo(obj1,obj2){
	return Math.sqrt(Math.pow((obj1.x-obj2.x),2) + Math.pow((obj1.y-obj2.y),2));
}
function velocity(speed, direction, axis){
	switch(axis){
		case "x":
			if(direction !== 1 && direction !== 3){
				return 0;
			}
			else{
				if(direction === 1){
					return speed * -1;
				}
				else{
					return speed;
				}
			}
		case "y":
			if(direction !== 0 && direction !== 2){
				return 0;
			}
			else{
				if(direction === 0){
					return speed * -1;
				}
				else{
					return speed;
				}
			}
	}
}
function checkCollisions(){
	ghosts.forEach(function(ghost){
		ghost_tile = getTile(ghost.x, ghost.y);
		pac_man_tile = getTile(pac_man.x, pac_man.y);
		if(ghost_tile.x === pac_man_tile.x && ghost_tile.y === pac_man_tile.y){
			console.log("collision")
		}
	})
	var tile = getTile(pac_man.x, pac_man.y);
	if(dots[tile.y][tile.x]){
		if(dots[tile.y][tile.x] === 2){
			frightend();
		}
		dots[tile.y][tile.x] = 0;
		
	}
}

function frightend(){
	red_ghost.frightend = true;
	pink_ghost.frightend = true;
	orange_ghost.frightend = true;
	setTimeout(function(){
		red_ghost.frightend = false;
		pink_ghost.frightend = false;
		orange_ghost.frightend = false;
	},8*1000)
}
function drawMap(){
	headOn.canvas("map").drawRect(20,20, 0,0, "black");
	console.log(headOn.images("bg"))
	headOn.canvas("map").drawImage(headOn.images("bg"), 0,0);
	// for(i=0;i<map[0].length;i++){
	// 	for(j=0;j<map.length;j++){
	// 		if(map[j][i]===0){
	// 			headOn.canvas("map").drawRect(16,16, i*16, j*16, "black");
	// 		}
	// 		else{
	// 			headOn.canvas("map").drawRect(16,16, i*16, j*16, "blue");
	// 		}
	// 	}
	// }
}
function init(){
	drawMap();
	
}
