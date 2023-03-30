const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  // constructor
  constructor(field) {
    this._field = field;
  }

  // map
  printField() {
    const newField = []
        this._field.forEach((row) => {
          newField.push(row.join(''))
        })
        console.log(newField.join('\n'))
  }

  // moveRight
  moveRight() {

  }

  // moveLeft
  moveLeft() {

  }

  // moveUp
  moveUp() {

  }

  // moveDown
  moveDown() {

  }

}

function generateMap(row, col, holes) {
    let field = []

    // hole ต้องสุ่ม ? = [][]
    // hat ต้องสุ่ม ? = [][]

    for (let i = 1; i <= row; i++) {
        let arr = []
        for (let j = 1; j <= col; j++) {
            arr.push(fieldCharacter)
        }
        field.push(arr)
    }

    for (let i = holes; i > 0; i--){
        let holePositionX = Math.floor(Math.random() * row)
        let holePositionY = Math.floor(Math.random() * col)
        field [holePositionX] [holePositionY] = hole;
    }

    let hatPositionX = Math.floor(Math.random() * row)
    let hatPositionY = Math.floor(Math.random() * col)
    field [hatPositionX] [hatPositionY] = hat;

    field [0] [0] = pathCharacter;



    return field

}





const field = generateMap(10, 10, 50);

const myGame = new Field(field);
myGame.printField();







