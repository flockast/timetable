(function($, global){
	$(function(){

		var Table, table1, table2;

		Table = function(elem) {
			this.elem = $(elem);
			this.length = 0;
			this.tr = [];
		}

		Table.prototype = {
			add: function(date, start, end) {
				this.length++;
				this.tr.push(arguments);
			},

			delete: function() {
				this.length--;
				this.tr.splice(this.tr.length - 1, 1);
			},

			render: function(options) {
				var that = this, defaults;

				defaults = { counter: false };

				options = $.extend(defaults, options);

				that.tr.forEach(function(item, i){
					that.elem.find("tbody").append("<tr/>");
					for(var j = 0; j < item.length; j++) {
						that.elem.find("tbody tr:last-child").append("<td>" + item[j] + "</td>");
					}
					if(options.counter) that.elem.find("tbody tr:last-child").prepend("<td>" + ++i + "</td>");
				});
			}
		}

		// -----------------------------------------

		$('#myTab a:nth-child(0)').tab('show');

		table1 = new Table("#feb2015");
		table1.add('11.02.15', '13:00', '21:00', "8");
		table1.add('12.02.15', '11:00', '19:30', "8:30");
		table1.add('12.02.15', '11:00', '19:30', "8:30");
		table1.render({counter: true});

		table2 = new Table("#mart2015");
		table2.add("1", "1", "1", "1");
		table2.add("1", "1", "1", "1");
		table2.add("1", "1", "1", "1");
		table2.add("1", "1", "1", "1");
		table2.render({counter: true});

	});

})(jQuery, window);

