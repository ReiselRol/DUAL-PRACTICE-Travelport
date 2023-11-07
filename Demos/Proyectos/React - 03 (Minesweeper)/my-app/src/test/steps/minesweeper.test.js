import { loadFeature, autoBindSteps } from "jest-cucumber";
import * as steps from './minesweeper.setps'

const features = loadFeature('./src/feature/**/*.feature')

const stepsRef = ({given, and, when, then}) => {
    given('the player opens the game', () => {
        steps.openTheGame()
    })
    given('the player opens the game', () => {
        steps.openTheGame()
    })
    given("the player loads the following mock data:", (table) => {
        const textarea = screen.getByTestId("mockDataLoader");
        const button = screen.getByTestId("mockDataLoaderButton");
        steps.openTheGame();
        steps.loadMockData(table, textarea, button);
    })
    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {
        steps.uncoverCell(arg0,arg1)
    })
    then('all the cells should be covered', async () => {
        steps.verifyAllCellsAreCovered();
    })
    then('all the cells should be enabled', async () => { 
        steps.verifyAllCellsAreEnabled();
    })
    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (arg0, arg1) => {
        steps.verifyCellAreUncovered(arg0,arg1)
    })
}

autoBindSteps(features, [stepsRef])