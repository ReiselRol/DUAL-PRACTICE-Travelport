import * as steps from "./stepsHelper"
import '@testing-library/jest-dom'

export const FormSteps = ({
  given: Given,
  and: And,
  when: When,
  then: Then
}) => {
  Given('the user opens the form', () => {
    steps.renderForm()
  })
  Given(/^write on "(.*)" the text "(.*)"$/, (textBoxTestID, content) => {
    steps.writeOnTextBox(textBoxTestID, content)
  })
  Given(/^the user click "(.*)"$/, (buttonTestID) => {
    steps.clickButton(buttonTestID)
  });
  Given(/^the user select "(.*)" on the selector "(.*)"$/, (Value, selectorTestID) => {
    steps.selectDropDown(selectorTestID, Value)
  });
  Then('the user should see the form', () => {
    expect(steps.isRenderedTheForm()).toBe(true)
  })
  Then(/^on textbox "(.*)" should have the text "(.*)"$/, (textBoxTestID, content) => {
    expect(steps.getTextOnTextBox(textBoxTestID)).toBe(content)
  })
  Then(/^the textbox "(.*)" should have an error outline$/, (textBoxTestID) => {
    expect(steps.hasErrorOutlineOnTextBox(textBoxTestID)).toBe(true)
  });
  Then(/^the textbox "(.*)" should not have an error outline$/, (textBoxTestID) => {
    expect(steps.hasErrorOutlineOnTextBox(textBoxTestID)).toBe(false)
  });
  Then('All the form should be cleared', () => {
    expect(steps.isFormCleared()).toBe(true)
  });
  Then(/^the selector "(.*)" should have the value "(.*)"$/, (selectorTestID, Value) => {
    expect(steps.getTextOnTextBox(selectorTestID)).toBe(Value)
  });
  Then('the app should show all errors', () => {
    expect(steps.isAllErrorsDisplayed()).toBe(true)
  });
  Then(/^the app should show the error "(.*)"$/, (error) => {
    expect(steps.isTheErrorDisplayed(error)).toBe(true)
  });
}
export default FormSteps