
const gridForm = document.querySelector('#form');
const rowForm = document.querySelector('#row');
const makeGrid = document.querySelector('#makeGridButton')
const grid = document.getElementById("grid");
let generatedGrid = [];

gridForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
	const row = +ev.target.row.value
	console.log(row)
	const column = +ev.target.column.value
	console.log(column)
	if (!row) {
		ev.target.innerHTML += 'rows must be between 1 and 50';
	}

	if (!column) {
		ev.target.innerHTML += 'columns must be between 1 and 50';
	}
	generatedGrid = generateGrid(row, column);
	render();
});
		
	function generateGrid(r, c) {
		const rows = [];
		for (let i = 0; i < r; i++) {
			const row = [];
			rows.push(row);
			for (let j = 0; j < c; j++) {
				row.push('')
			}
		}
		return rows;
	}
		
	const render = () => {
		let html = generatedGrid.map((row) => {
			return `<div class="row"> ${row.map((column) => {
				return `<div class="cell"> </div>`
			}).join('')} </div>`
		}).join('');
		console.log(grid)
		grid.innerHTML = html;
		console.log(grid)
	}
	// render();

	grid.addEventListener('click', (ev) => {
		const column = [...ev.target.parentNode.children].indexOf(ev.target);
		const row = [...ev.target.parentNode.parentNode.children].indexOf(ev.target.parentNode);
		ev.target.classList.toggle('red');
	});

	// render();
