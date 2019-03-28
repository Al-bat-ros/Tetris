// создаём элемент 
let tetris = document.createElement('div');
// присваиваем к элементу класс
tetris.className = 'tetris'; //  или так tetris.classList.add('tetris')

// создаём сетку ячеек
for (let i=1; i<181; i++){
	let excel = document.createElement('div');
	excel.className = 'excel';  //  или так tetris.classList.add('excel')


	tetris.appendChild(excel);
}
// выводим на экран
let main = document.getElementsByClassName('main')[0]; // указываем что он первый жаже если он один.
main.appendChild(tetris);


// записываем в переменную все ячейки
let excel = document.getElementsByClassName('excel');
let i = 0;
// присваиваем координаты каждой ячейке
for (let y=18; y>0; y--){
	for (let x=1; x<11; x++){
		excel[i].setAttribute('posY', y);
		excel[i].setAttribute('posX', x);

		i++;
	}
}

let x = 5, y = 10

let mainArr = [
  // палка
  [
  		[0,1],
  		[0,2],
  		[0,3]
  ]
  // квадрат
  [
  		[1,0],
  		[0,1],
  		[1,1]
  ]
]