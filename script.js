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

let x = 5, y = 15

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

 function move() {
     let moveFlag = true;
     let coordinates = [
         [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
         [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
         [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
         [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')]

     ];
     for (let i = 0; i < coordinates.length; i++) {
         if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1}"]`).classList.contains('set')) {
             moveFlag = false;
             break;
         }
     }

     if (moveFlag) {
         for (let i = 0; i < figureBody.length; i++) {
             figureBody[i].classList.remove('figure');
         }
         figureBody = [
             document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] - 1}"]`),
             document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] - 1}"]`),
             document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] - 1}"]`),
             document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] - 1}"]`)
         ];
         for (let i = 0; i < figureBody.length; i++) {
             figureBody[i].classList.add('figure');

         }
     } else {
         for (let i = 0; i < figureBody.length; i++) {
             figureBody[i].classList.remove('figure');
             figureBody[i].classList.add('set');

         }
         create();
     }
 }


 let interval = setInterval(move, 300);




