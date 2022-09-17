
const X_class = 'x';
const O_class = 'o';

let circleTurn 

let cellElements = document.querySelectorAll(".cell")

let winMessage = document.querySelector('.winBack')

let board = document.getElementById("board")

let Winning_index = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

firstHover()

function firstHover(){
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click' , handleClick , {once : true} )
    })

    hoverCells()
}

function handleClick(e){
    let cell = e.target
    let currentClass = circleTurn ? O_class : X_class ;


    placeMark(cell , currentClass)

    
    if(checkWin(currentClass)){
        winMessage.style.display = "flex"
        let message = document.createElement("p");
        message.innerText =`${circleTurn ? "O" : "X"} GAMER WINNER`;
        

        winMessage.append(message)

        let  winClose =() =>{
            winMessage.style.display = "none";
            location.reload();
        }

        setTimeout(winClose , 3000)
    }

    nextTurns()

    hoverCells()
}


function placeMark(cell , currentClass) {
    cell.classList.add(currentClass)
}

function nextTurns(){
    circleTurn = !circleTurn
}

function hoverCells(){
    board.classList.remove(X_class)
    board.classList.remove(O_class)

    if(circleTurn){
        board.classList.add(O_class)
    }
    else{board.classList.add(X_class)}
}


function checkWin(currentClass){
    return Winning_index.some(combination => {
        return combination.every(index =>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}


