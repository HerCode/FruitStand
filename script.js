//Javascript
var apple = 0;
var orange = 0;
var banana = 0;
var grape = 0;

var avgApplePrice = 0;
var avgOrangePrice = 0;
var avgBananaPrice = 0;
var avgGrapePrice = 0;
var avgPurchasePriceHistory = [];

var interval = 5000;

var userBal = 100;
var userApples = 0;
var userOranges = 0;
var userBanana = 0;
var usergrape = 0;

$(document).ready(function (){
	setInterval(intervalActivity, interval);
//on click listener from fruit div do stuff
$("div").on("click", "fruitPanel" , function (){
  //grab fruit id
  //purchase function

});

});

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
 function intervalActivity(){
	apple = changeFruitPrice(apple);
	orange = changeFruitPrice(orange);
	banana = changeFruitPrice(banana);
	grape = changeFruitPrice(grape);
	refreshDom();
	console.log(apple, orange, banana, grape);
}
function changeFruitPrice(fruit) {
	if (randomNumber(0, 1) === 1) {
	fruit += randomNumber(0, 50)/100;
	}

	else{
	fruit -= randomNumber(0, 50)/100;
}
	if (fruit < 0.50) {
		fruit = 0.50;
	}
	if (fruit > 9.99) {
		fruit = 9.99;
	}
	return fruit;
}
//average price function
function avgPrice(avgPurchasePriceHistory) {
  var sum = 0;
  for(var i = 0; i < avgPurchasePriceHistory.length; i++) {
    sum += avgPurchasePriceHistory.length[i];
}

return sum/array.length;
}

//function refreshDom
function refreshDom() {
  $('#applePrice').empty();
	$('#orangePrice').empty();
	$('#bananaPrice').empty();
	$('#grapePrice').empty();

	$('#applePrice').text(apple);
	$('#orangePrice').text(orange);
	$('#bananaPrice').text(banana);
	$('#grapePrice').text(grape);

	$('#averageApplePrice').empty();
	$('#averageOrangePrice').empty();
	$('#averageBananaPrice').empty();
	$('#averageGrapePrice').empty();

	$('#averageApplePrice').text(avgApplePrice);
	$('#averageOrangePrice').text(avgOrangePrice);
	$('#averageBananaPrice').text(avgBananaPrice);
	$('#averageGrapePrice').text(avgGrapePrice);
}
