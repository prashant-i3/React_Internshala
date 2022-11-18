import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <div>
        {/* Board will be 3*3 so three row */}
        {/* And each row have 3 colum i.e buttons */}

        {/* Row 1 */}
        <div>
            <Square />
            <Square />
            <Square />
        </div>

        {/* Row 2 */}
        <div>
            <Square />
            <Square />
            <Square />
        </div>

        {/* Row 3 */}
        <div>
            <Square />
            <Square />
            <Square />
        </div>
        
    </div>
  )
}

export default Board