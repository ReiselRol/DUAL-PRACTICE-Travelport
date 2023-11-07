import React from 'react'
import {render, screen, fireEvent } from "@testing-library/react"
//import userEvent from "@testing-library/user-event"
import { Formulario } from '../../Components/Formulario/Formulario'

export const renderForm = () => {
    render(<Formulario/>)
}
export const isRenderedTheForm = () => {
    var isRendered = false
    if(screen.getByTestId('formulario')) isRendered = true
    return isRendered
}
export const writeOnTextBox = (textBoxTestID, content) => {
    fireEvent.change(screen.getByTestId(textBoxTestID), {target: {value: content}})
}
export const getTextOnTextBox = (textBoxTestID) => {
    return screen.getByTestId(textBoxTestID).value
}
export const hasErrorOutlineOnTextBox = (textBoxTestID) => {
    return screen.getByTestId(textBoxTestID).classList.contains('inputError')
}
export const isFormCleared = () => {
    var allCleared = false
    if (allCleared == false) {
        var toCheck = screen.getByTestId("User").value
        if (toCheck == "") allCleared = true
    }
    if (allCleared == false) {
        var toCheck = screen.getByTestId("User").value
        if (toCheck == "") allCleared = true
    }
}
export const selectDropDown = (dropDownTestID, content) => {
    fireEvent.select(screen.getByTestId(dropDownTestID), {target: {value: content}})
}
export const clickButton = (buttonTestId) => {
    fireEvent.click(screen.getByTestId(buttonTestId))
}
export const isTheErrorDisplayed = (error) => {
    var errorDiv = screen.getAllByTestId('formularioErrors')[0]
    var isCointained = false
    if (errorDiv.innerHTML.includes(error)) isCointained = true
    return isCointained
}
export const isAllErrorsDisplayed = () => {
    var isAllErrorsDisplayed = true
    if (!isTheErrorDisplayed('Username: El campo no puede estar vacío.')) isAllErrorsDisplayed = false
    else if (!isTheErrorDisplayed('Name: El campo no puede estar vacío.')) isAllErrorsDisplayed = false
    else if (!isTheErrorDisplayed('Surame: El campo no puede estar vacío.')) isAllErrorsDisplayed = false
    else if (!isTheErrorDisplayed('ID: El campo no puede estar vacío.')) isAllErrorsDisplayed = false
    return isAllErrorsDisplayed
}
export const isTheButtonDisabled = (buttonTestId) => {
    var button = screen.getByTestId(buttonTestId)
    return button.disabled
}
export const isTheTextOnTheInput = (text, input) => {
    var input = screen.getByTestId(input)
    return input.value === text
}
export const thereIsNoErrors = () => {
    try {
        screen.getByTestId("FormErrors")
        return false;
    } catch (e) {
        return true
    }
}
export const hasErrorMessage = (message) => {
    try {
        screen.getByTestId(message)
        return true;
    } catch (e) {
        return false
    }
}