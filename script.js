
const gridForm = document.querySelector('#form');
const rowForm = document.querySelector('#row');
const makeGrid = document.querySelector('#makeGridButton')
const grid = document.getElementById("grid");
const idx = document.querySelector("#indexClicked");
const rowError = document.querySelector("#rowError");
const columnError = document.querySelector("#columnError");
let generatedGrid = [];


gridForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
	const row = +ev.target.row.value
	const column = +ev.target.column.value
	generatedGrid = generateGrid(row, column);
	render();
});

gridForm.addEventListener('keyup', (ev) => {
	ev.preventDefault();
	console.log(ev.target)
	const row = +ev.target.value
	const column = +ev.target.value
	if (!row || row < 1 || row > 50 && ev.target.name === 'row') {
		rowError.innerHTML = 'rows must be between 1 and 50';
	} else {
		rowError.innerHTML = '';
	}
	if (!column || column < 1 || column > 50 && ev.target.name === 'column') {
		columnError.innerHTML = 'columns must be between 1 and 50';
	} else {
		columnError.innerHTML = '';
	}
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
			return `<div class="row"> ${row.map(() => {
				return `<div class="cell"> </div>`
			}).join('')} </div>`
		}).join('');
		grid.innerHTML = html;
	}
	render();


	grid.addEventListener('click', (ev) => {
		const rowVal = [...ev.target.parentNode.parentNode.children].indexOf(ev.target.parentNode);
		const columnVal = [...ev.target.parentNode.children].indexOf(ev.target);
		let html = 'rIdx: ' + rowVal + ' ' + 'cIdx: ' + columnVal
		idx.innerHTML = html
		ev.target.classList.toggle('highlight');
	});
	render();
	
