const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const renderTable = () => {
	tableHead.innerHTML = `
		<tr>
			<th scope="col">No.</th>
			<th scope="col">Tour ID</th>
			<th scope="col">Name</th>
			<th scope="col">Location</th>
			<th scope="col">Price</th>
			<th scope="col">Group Size</th>
			<th scope="col">difficulty</th>
			<th scope="col">duration</th>
			<th scope="col">Ratings Average</th>
			<th scope="col">Ratings Quantity</th>
		</tr>`;

	let params = (new URL(document.location)).searchParams;


	let condition = ["id", "location", "ratingsAverage", "ratingsQuantity", "name", "duration", "maxGroupSize", "difficulty", "price"]
	let itours = tours;
	for (let i = 0; i < condition.length; i++) {

		if (params.get(condition[i]) !== null) {
			console.log(params.get(condition[i]));
			itours = tours.filter(items => items[condition[i]] == params.get(condition[i]))
		}

	}

	let rowCount = 1;
	for (const tour of itours) {
		tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				<td>${tour.id}</td>
				<td>${tour.name}</td>
				<td>${tour.location}</td>
				<td>${tour.price}</td>
				<td>${tour.maxGroupSize}</td>
				<td>${tour.difficulty}</td>
				<td>${tour.duration}</td>
				<td>${tour.ratingsAverage}</td>
				<td>${tour.ratingsQuantity}</td>
			</tr>`;

		rowCount += 1;
	}
};

renderTable();
