var data = [];

function processData() {
	data = [];
	$("table tbody").children("tr").each(function(index, element) {
		data.push(convertTrToObject(element));
	});
}

function convertTrToObject(tr) {
	var mega = {
		"id": $(tr).children("td").eq(0).text(),
		"date": $(tr).children("td").eq(1).text(),
		"keepMoney": $(tr).children("td").eq(17).text(),
		"numbers": [
			$(tr).children("td").eq(2).text(),
			$(tr).children("td").eq(3).text(),
			$(tr).children("td").eq(4).text(),
			$(tr).children("td").eq(5).text(),
			$(tr).children("td").eq(6).text(),
			$(tr).children("td").eq(7).text()
		]
	};

	console.log(mega);
	return mega;
}
