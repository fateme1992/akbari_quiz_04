const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const renderTable = () => {
	let params = (new URL(document.location)).searchParams;

	let fields = params.get('fields') !== null ? params.get('fields').split(',') : [];

	let thead = '<tr>';
	thead += fields.includes('-no.') ? '' : '<th scope="col">No.</th>';
	thead += fields.includes('-id') ? '' : '<th scope="col">Tour ID</th>';
	thead += fields.includes('-name') ? '' : '<th scope="col">Name</th>';
	thead += fields.includes('-location') ? '' : '<th scope="col">Location</th>';
	thead += fields.includes('-price') ? '' : '<th scope="col">Price</th>';
	thead += fields.includes('-maxGroupSize') ? '' : '<th scope="col">Group Size</th>';
	thead += fields.includes('-difficulty') ? '' : '<th scope="col">difficulty</th>';
	thead += fields.includes('-duration') ? '' : '<th scope="col">duration</th>';
	thead += fields.includes('-ratingsAverage') ? '' : '<th scope="col">Ratings Average</th>';
	thead += fields.includes('-ratingsQuality') ? '' : '<th scope="col">Ratings Quantity</th>';
	thead += '</tr >';

	tableHead.innerHTML = thead;

	let rowCount = 1;
	for (const tour of tours) {
		tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				${fields.includes('-id') ? '' : '<td>' + tour.id + '</td>'}
				${fields.includes('-name') ? '' : '<td>' + tour.name + '</td>'}
				${fields.includes('-location') ? '' : '<td>' + tour.location + '</td>'}
				${fields.includes('-price') ? '' : '<td>' + tour.price + '</td>'}
				${fields.includes('-maxGroupSize') ? '' : '<td>' + tour.maxGroupSize + '</td>'}
				${fields.includes('-difficulty') ? '' : '<td>' + tour.difficulty + '</td>'}
				${fields.includes('-duration') ? '' : '<td>' + tour.duration + '</td>'}
				${fields.includes('-ratingsAverage') ? '' : '<td>' + tour.ratingsAverage + '</td>'}
				${fields.includes('-ratingsQuantity') ? '' : '<td>' + tour.ratingsQuantity + '</td>'}
			</tr > `;

		rowCount += 1;
	}
};

renderTable();
