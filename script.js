// создаём элемент 
let tetris = document.createElement('div');
// присваиваем к элементу класс
tetris.className = 'tetris'; //  или так tetris.classList.add('tetris')

// создаём сетку ячеек
for (let i=1; i<181; i++){
	let excel = document.createElement('div');
	excel.className = 'excel';  //  или так excel.classList.add('excel')


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
		excel[i].setAttribute('posX', x);
		excel[i].setAttribute('posY', y);
		
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
  ],
  // квадрат
  [
  		[1,0],
  		[0,1],
  		[1,1]
  ],
  // угол левый
  [
        [1,0],
  		[0,1],
  		[0,2]
  ],
  // угол правый
    [
        [1,0],
  		[1,1],
  		[1,2]
  ],
  // танчик
   [
        [1,0],
  		[2,0],
  		[1,1]
  ],
  // молния левая
   [
        [1,0],
  		[1,1],
  		[2,1]
  ],
  // молния правая
   [
        [1,0],
  		[-1,1],
  		[0,1]
  ]


]

let currentFigure = 0;
let figureBody = 0;

 function create() {
 	// выбираем случайное число 
	 function getRandom() {
	 	return Math.round(Math.random()*(mainArr.length-1));
		 }
     // записываем его в переменную
	 currentFigure = getRandom();

	 // создаём случайную деталь
	 figureBody = [

	     document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
	     document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
	     document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
         document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`)
         
         ]
      // присваеваем ей класс
	for (let i=0; i<figureBody.length; i++) {
		//figureBody[i].className = 'figure'; 
		 figureBody[i].classList.add('figure');
	}	
 }

 create(); 

