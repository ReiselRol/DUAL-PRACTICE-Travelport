import { CELL_VALUES } from "../MinesweeperConstants";
import './Cell.css'

export function Cell ({cellValue, isCovered, tag}) {
  
    if (isCovered) return (
        <span data-testid="minesweeper-cell">{tag}</span>
    )
    else return ( 
        <span data-testid="minesweeper-cell">{cellValue}</span>
    )

}