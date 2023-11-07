import {render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Minesweeper } from "../../Components/Minesweeper/Minesweeper";
import App from '../../Components/App/App'

export const openTheGame = () => {
    render(<App/>)
}

export const verifyAllCellsAreCovered = () => {

    const cells = screen.getAllByTestId("minesweeper-cell")
    cells.forEach((cell) => {
        const parentElement = cell.parentElement;
        expect(parentElement).toHaveClass("background-covered")
    })
}
export const verifyAllCellsAreEnabled = () => {
  const { container } = render(<Minesweeper size={10} totalMines={20} />)
  const coveredCells = container.querySelectorAll(".cell-Square")
  const allCellsNotDisabled = Array.from(coveredCells).every(
    (cell) => !cell.dataset.isDisabled
  )
  expect(allCellsNotDisabled).toBe(true);
}
export const perseMockDataToString = (table) => {
    if (table.includes("|")){
        const cleanInput = table.trim().replace(/\s+/g, '').replace('||', '-').replace(/\|/g, '')
        console.log(cleanInput)
        return cleanInput
    }
    else return table
}
export const loadMockData = (table, textarea, button) => {

    const mockData = perseMockDataToString(table)
    userEvent.type(textarea, mockData)
    fireEvent.click(button)

}
export const uncoverCell = (row, cell) => {
    var cellTestId = (row - 1) + ',' + (cell - 1)
    const button = screen.getByTestId(cellTestId)
    fireEvent.click(button)
}
export const verifyCellAreUncovered = (row, cell) => {
    var cellTestId = (row - 1) + ',' + (cell - 1)
    const cells = screen.getAllByTestId(cellTestId)
    cells.forEach((cell) => {
        const parentElement = cell.parentElement;
        console.log(cell.parentElement)
        expect(parentElement).toHaveClass("background-uncovered")
    })
}
