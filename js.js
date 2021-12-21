
let imgNum = 1 ;
function changeImageRight (){
	if (imgNum < 3){
		console.log("func")
		var img = document.querySelector("img");
		console.log(img)
		imgNum++
		img.src = `img/${imgNum}.jpeg`
	}
}

function changeImageleft (){
	if (imgNum > 1){
		console.log("func")
		var img = document.querySelector("img");
		console.log(img)
		imgNum--
		img.src = `img/${imgNum}.jpeg`
	}
}
