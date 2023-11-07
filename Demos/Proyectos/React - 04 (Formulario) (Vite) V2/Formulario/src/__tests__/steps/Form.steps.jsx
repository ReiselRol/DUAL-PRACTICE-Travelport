import * as steps from "./stepsHelper"
import '@testing-library/jest-dom'

export const FormSteps = ({
  given: Given,
  and: And,
  when: When,
  then: Then
}) => {
  Given('The user load the user form', () => {
    steps.renderForm()
  });
  Given(/^The user write the text (.*) on the input (.*)$/, (text, input) => {
    steps.writeOnTextBox(input,text)
  });
  Given(/^The user select the value (.*) on the selector (.*)$/, (value, input) => {
    steps.selectDropDown(input,value)
  });
  Then(/^The button "(.*)" should be disabled$/, (button) => {
    expect(steps.isTheButtonDisabled(button)).toBe(false)
  });
  Then('Then the user form should dont have errors', () => {
    expect(steps.thereIsNoErrors()).toBe(true)
  });
  Then(/^The input (.*) should have the value (.*)$/, (input, text) => {
    expect(steps.isTheTextOnTheInput(text,input)).toBe(true)
  });
  Then(/^The selector (.*) should have the value (.*)$/, (input, value) => {
    expect(steps.isTheTextOnTheInput(value,input)).toBe(true)
  });
  Then(/^The input "(.*)" should have the border error$/, (input) => {
    expect(steps.hasErrorOutlineOnTextBox(input)).toBe(true)
  });
  Then(/^The user form should show an error message relationated on (.*)$/, (inputName) => {
    expect(steps.hasErrorMessage("E:" + inputName)).toBe(true)
  });
}
export default FormSteps