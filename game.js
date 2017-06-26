var difficulty = 3;
var winner = null;

document.querySelector("#reset").addEventListener("click", function() {
	setupBoard(difficulty);
});

document.querySelector("#easy").addEventListener("click", function() {
	difficulty = 3;
	setupBoard(difficulty);
	document.querySelector("#easy").classList.add("selected");
	document.querySelector("#hard").classList.remove("selected");
});

document.querySelector("#hard").addEventListener("click", function() {
	difficulty = 9;
	setupBoard(difficulty);
	document.querySelector("#hard").classList.add("selected");
	document.querySelector("#easy").classList.remove("selected");
});

function clearBoard() {
	var blocks = document.querySelectorAll(".gameblock");
	for(let i = 0; i < blocks.length; i++) {
		blocks[i].parentNode.removeChild(blocks[i]);
	}
	document.getElementById("header").style.backgroundColor = "#4778AB";
}

function setupBoard(level) {
	clearBoard();
	var gSpace = document.getElementById("gamespace");
	var win = Math.floor(Math.random() * (level));
	for(let i = 0; i < level; i++) {
		var d = document.createElement("div");
		d.classList.add("gameblock");
		d.classList.add("col-xs-4");
		var r = Math.floor(Math.random() * (256));
		var g = Math.floor(Math.random() * (256));
		var b = Math.floor(Math.random() * (256));
		d.style.backgroundColor = `RGB(${r}, ${g}, ${b})`;
		d.addEventListener("click", function() {
			checkBlock(this);
		});
		if(win === i) {
			winner = d;
			document.getElementById("winner").textContent = "Find " + d.style.backgroundColor.toUpperCase();
		}
		gSpace.appendChild(d);
	}
}

function checkBlock(block) {
	if(block === winner) {
		document.getElementById("winner").textContent = "YOU WIN!";
		document.getElementById("header").style.backgroundColor = winner.style.backgroundColor;
	} else {
		block.classList.add("hideblock");
	}
}

//--------

setupBoard(difficulty);
