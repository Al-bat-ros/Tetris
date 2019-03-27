let tetris = document.createElement('div');
tetris.className = 'tetris'; //  или так tetris.classList.add('tetris')

for (let i=1; i<181; i++){
	let excel = document.createElement('div');
	excel.className = 'excel';  //  или так tetris.classList.add('excel')


	tetris.appendChild(excel);
}

let main = document.getElementsByClassName('main')[0]; // указываем что он первый жаже если он один.

main.appendChild(tetris);