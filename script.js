function shop() {
	var item1 = {
		name: "T-short",
		color: "black",
		size: "S",
		image: new Image().src = "images/1.png",
		price: 20.5
	};

	var item2 = {
		name: "Trousers",
		color: "yellow",
		size: "M",
		image: new Image().src = "images/2.png",
		price: 55.3
	};

	var item3 = {
		name: "Hat",
		color: "red",
		size: "L",
		image: new Image().src = "images/3.png",
		price: 99.9
	};

	var item4 = {
		name: "Hat",
		color: "blue",
		size: "M",
		image: new Image().src = "images/4.png",
		price: 2.3
	};

	var item5 = {
		name: "Trousers",
		color: "green",
		size: "S",
		image: new Image().src = "images/5.png",
		price: 34.0
	};

	var item6 = {
		name: "T-short",
		color: "brown",
		size: "L",
		image: new Image().src = "images/6.png",
		price: 24.8
	};

	var items = [item1, item2, item3, item4, item5, item6];

	getLowestPrice(items);
	getHighestPrice(items);
	getSizeM(items);
	// getSizeL(items);
	// getSizeS(items);
	getRandomItem(items);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomItem(items) {
	random_index = getRandom(0, items.length)

	alert("Random Item:\n" +
	      "name: " + items[random_index].name  +
	 ", \nprice: " + items[random_index].price  +
	 ", \ncolor: " + items[random_index].color  +
	 ", \nsize: "  + items[random_index].size);

	getImage(items);
}

function getImage(items) {
	var img_src = items[random_index].image;

	var img = document.createElement('img');
		img.style.margin = "10px";
		img.style.border = "5px solid red";
		img.width = 200;
		img.height = 200;
		img.src = img_src;

	document.getElementById("item").appendChild(img);
}

function getLowestPrice(items) {
	var low_p = items[0].price;
	var item_index = 0;

	for (var i = 1; i < items.length; i++) {
		if(items[i].price < low_p) {
			low_p = items[i].price;
			item_index = i;
		}
	}

	alert("Lowest Price:\n" +
	      "name: " + items[item_index].name  +
	 ", \nprice: " + items[item_index].price  +
	 ", \ncolor: " + items[item_index].color  +
	 ", \nsize: "  + items[item_index].size);
}

function getHighestPrice(items) {
	var high_p = items[0].price;
	var item_index = 0;

	for (var i = 1; i < items.length; i++) {
		if(items[i].price > high_p) {
			high_p = items[i].price;
			item_index = i;
		}
	}

	alert("Highest Price:\n" +
	      "name: " + items[item_index].name  +
	 ", \nprice: " + items[item_index].price  +
	 ", \ncolor: " + items[item_index].color  +
	 ", \nsize: "  + items[item_index].size);
}

function getSizeM(items) {
	var m_size_arr = [];

	for (var i = 0; i < items.length; i++) {
		if(items[i].size == "M") {
			m_size_arr.push(items[i]);
		}
	}

	var result_str = "";

	for (var i = 0; i <= m_size_arr.length - 2; i++) {
		result_str += m_size_arr[i].name +
		 ": " + m_size_arr[i].price + ",\n";
	}

	result_str += m_size_arr[m_size_arr.length - 1].name  +
	 ": " + m_size_arr[m_size_arr.length - 1].price  + ".";

	alert("M:\n" + result_str);
}

function getSizeL(items) {
	var m_size_arr = [];

	for (var i = 0; i < items.length; i++) {
		if(items[i].size == "L") {
			m_size_arr.push(items[i]);
		}
	}

	var result_str = "";

	for (var i = 0; i <= m_size_arr.length - 2; i++) {
		result_str += m_size_arr[i].name +
		 ": " + m_size_arr[i].price + ",\n";
	}

	result_str += m_size_arr[m_size_arr.length - 1].name  +
	 ": " + m_size_arr[m_size_arr.length - 1].price  + ".";

	alert("L:\n" + result_str);
}

function getSizeS(items) {
	var m_size_arr = [];

	for (var i = 0; i < items.length; i++) {
		if(items[i].size == "S") {
			m_size_arr.push(items[i]);
		}
	}

	var result_str = "";

	for (var i = 0; i <= m_size_arr.length - 2; i++) {
		result_str += m_size_arr[i].name +
		 ": " + m_size_arr[i].price + ",\n";
	}

	result_str += m_size_arr[m_size_arr.length - 1].name  +
	 ": " + m_size_arr[m_size_arr.length - 1].price  + ".";

	alert("S:\n" + result_str);
}

shop();