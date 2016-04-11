var tableSchema = {
	fields: [{
		name: 'name',
		label: '姓名',
		sortable: false,
	}, {
		name: 'chinese',
		label: '语文',
		sortable: true,
	}, {
		name: 'math',
		label: '数学',
		sortable: true,
	}, {
		name: 'english',
		label: '英语',
		sortable: true,
	}, {
		name: 'total',
		label: '总分',
		sortable: true,
	}, ]
};
var datas = [{
	name: '小明',
	chinese: 80,
	math: 90,
	english: 70,
	total: 240
}, {
	name: '小红',
	chinese: 90,
	math: 60,
	english: 90,
	total: 240
}, {
	name: '小亮',
	chinese: 60,
	math: 100,
	english: 70,
	total: 230
}];

(function() {
	'use strict';
	window.createTable = function(schema, datas) {
		var tableElement = document.querySelector('#ui-table');
		schema.fields.forEach(function(field) {
			var thead = document.createElement('thead');
			var tableHeader = document.createElement('th');
			thead.appendChild(tableHeader);
			tableHeader.textContent = field.label;
			tableElement.appendChild(tableHeader);
		});
		var table = {
			schema: schema,
			datas: datas,
			init: function(schema, datas) {
				var tbody = document.querySelector('tbody');
				if (tbody && tbody.parentNode) {
					tbody.parent.removeChild(tbody);
				}
				var tbody = document.createElement('tbody');
				datas.forEach(function(data) {
					var tableRow = document.createElement('tr');
					schema.fields.forEach(function(field) {
						var tableData = document.createElement('td');
						tableData.textContent = data[field.name];
						tableRow.appendChild(tableData);
						tbody.appendChild(tableRow);
					});
				});
				tableElement.appendChild(tbody);
			},
			sort: function(sortKey, direction) {
				this.datas.sort(function(a, b) {
					if (direction === 'desc') {
						return a[sortKey] > b[sortKey] ? -1 : 1;
					} else {
						return a[sortKey] < b[sortKey] ? -1 : 1;
					}
				});
				this.init(this.schema, this.datas);
			}
		};
		table.sort(schema.fields[1].name, 'desc');
		return table;
	};
})();