


(function(){

	var jsonObject;

	jsonObject = 
	{
		"tables" :	[
			[
				{
					"date": "11.02.2015",
					"start": "11:00",
					"end": "12:00"
				},
				{
					"date": "11.02.2015",
					"start": "11:00",
					"end": "12:00"
				},
				{
					"date": "11.02.2015",
					"start": "11:00",
					"end": "12:00"
				}
			],
			[
				{
					"date": "11.02.2015",
					"start": "11:00",
					"end": "12:00"
				},
				{
					"date": "11.02.2015",
					"start": "11:00",
					"end": "12:00"
				},
				{
					"date": "11.02.2015",
					"start": "11:00",
					"end": "12:00"
				}
			]

		]
	};

	// Variant 1

	// for(i = 0; i < jsonObject.tables.length; i++) {
	// 	var table = jsonObject.tables[i];
	// 	for(j = 0; j < table.length; j++) {
	// 		var tr = table[j];
	// 		console.log(tr);
	// 	}
	// }


	//	Variant 2

	// jsonObject.tables.forEach(function(table, i){
	// 	table.forEach(function(tr, j){
	// 		console.log(tr);
	// 	});
	// });

})();