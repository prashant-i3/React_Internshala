import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <div>
        {/* Board will be 3*3 so three row i.e. div tag */}
        {/* And each row have 3 colum i.e buttons */}

        {/* Row 1 */}
        <div>
            <Square value={1} />
            <Square value={2} />
            <Square value={3} />
        </div>

        {/* Row 2 */}
        <div>
            <Square value={4} />
            <Square value={5} />
            <Square value={6} />
        </div>

        {/* Row 3 */}
        <div>
            <Square value={6} />
            <Square value={7} />
            <Square value={8} />
        </div>
        
    </div>
  )
}

export default Board