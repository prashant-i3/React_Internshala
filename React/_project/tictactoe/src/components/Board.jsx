import React from 'react';
import Square from './Square';

const Board = ( {board, handleSquareClick}) => {
  /*
    useState return an array of size 2-element
      first=> return the state itself (i.e., 'board')
      second=> return the update function (i.e., 'setBoard')
  */
/*
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);


  // // function for logic of onclick event
  // const handleSquareClick = (position) => {

  //   if( board[position] ){
  //     return;
  //   }


    
  //   //callback function
  //   setBoard( (prev) => {

  //     return prev.map((square, pos) => {
  //       if(pos === position){
  //         return isXNext ? 'X' : 'O';
  //       }

  //       return square;

  //     })

  //   })

  //   setIsXNext( (prev) => !prev );
    
  // }
*/
  // this function helps to reder buttons
  const renderSquare = position => {
    return(
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  }
 


  return (
    <div className='board'>
        {/* Board will be 3*3 so three row i.e. div tag */}
        {/* And each row have 3 colum i.e buttons */}

        {/* Row 1 */}
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>

        {/* Row 2 */}
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>

        {/* Row 3 */}
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        
    </div>
  )
}

export default Board