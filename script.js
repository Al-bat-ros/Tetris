let tetris = document.createElement('div');
tetris.className = 'tetris'; //  или так tetris.classList.add('tetris')

for (let i=1; i<181; i++){
	let excel = document.createElement('div');
	excel.className = 'excel';  //  или так tetris.classList.add('excel')


	tetris.appendChild(excel);
}

let main = document.getElementsByClassName('main')[0]; // указываем что он первый жаже если он один.
main.appendChild(tetris);

let excel = document.getElementsByClassName('excel');
let i = 0;

for (let y=18; y>0; y--){
	for (let x=1; x<11; x++){
		excel[i].setAttribute('posY', y);
		excel[i].setAttribute('posX', x);

		i++;
	}
}