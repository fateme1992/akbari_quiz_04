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

	let rowCount = 1;

	let params = (new URL(document.location)).searchParams;
	let page = params.get("page") === null ? 1 : params.get("page");
	let limit = params.get("limit") === null ? 5 : params.get("limit");

	let offset = (page - 1) * limit + 1;

	console.log('page:', page)
	console.log('limit:', limit);

	let end = page * limit;
	let start = end - limit;

	for (let i = start; i <= end; i++) {
		// console.log('start:', start);
		// console.log('end:', end);
		// console.log(tours[i]);
		tableBody.innerHTML += `
		<tr>
			<th scope="row">${rowCount}</th>
			<td>${tours[i].id}</td>
			<td>${tours[i].name}</td>
			<td>${tours[i].location}</td>
			<td>${tours[i].price}</td>
			<td>${tours[i].maxGroupSize}</td>
			<td>${tours[i].difficulty}</td>
			<td>${tours[i].duration}</td>
			<td>${tours[i].ratingsAverage}</td>
			<td>${tours[i].ratingsQuantity}</td>
		</tr>`;

		rowCount += 1;
	}

	// for (const tour of tours) {
	// 	tableBody.innerHTML += `
	// 		<tr>
	// 			<th scope="row">${rowCount}</th>
	// 			<td>${tour.id}</td>
	// 			<td>${tour.name}</td>
	// 			<td>${tour.location}</td>
	// 			<td>${tour.price}</td>
	// 			<td>${tour.maxGroupSize}</td>
	// 			<td>${tour.difficulty}</td>
	// 			<td>${tour.duration}</td>
	// 			<td>${tour.ratingsAverage}</td>
	// 			<td>${tour.ratingsQuantity}</td>
	// 		</tr>`;

	// 	rowCount += 1;
	// }
};

renderTable();
let items = tours.length;

let pageActual = 1;



// JUST FOR SEE
//console.log(`[•] O valor limite é ${limit}<br>[•] O valor total de textos é ${text.length}<br> [•] E o valor de paginas é ${page}`);




/*

let params = (new URL(document.location)).searchParams;
let page = params.get("page") === null ? 1 : params.get("page");
let limit = params.get("limit") === null ? 5 : params.get("limit");
let pageCal = Math.ceil(items / limit);
console.log('page:', page)
console.log('limit:', limit)


var pages = [page + pageActual];
console.log('pages:', pages);
function prev(current, pages) {
	var index = pages.indexOf(current);
	if (index === 0) {
		return pages[pages.length - 1];
	}
	return pages[index - 1];
}

function next(current, pages) {
	let index = pages.indexOf(current);
	if (index === pages - 1) {
		return pages[0];
	}
	return pages[index + 1];
}

behind.addEventListener('click', function () {
	let newUrl = prev(page, pages);
	window.location.href = newUrl;
});

forward.addEventListener('click', function () {
	let newUrl = next(page, pages);
	window.location.href = newUrl;
});*/
