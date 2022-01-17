const width = +prompt('Ширина матрицы');
const height = +prompt('Высота матрицы');

function matrix(width, height) {
	let result = new Array(height).fill().map(() => new Array(width));

	return result;
}

[
	[1, 2, 3],
	[8, 9, 4],
	[7, 6, 5],
];
