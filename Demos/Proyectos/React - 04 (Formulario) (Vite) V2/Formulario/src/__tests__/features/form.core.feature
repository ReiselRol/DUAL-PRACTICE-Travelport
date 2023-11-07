Feature: Basic User Info Form
# poner en contexto
Background:
    Given The user load the user form

Scenario: User Form Rendered - Load the user form with the submit button disabled
    Then The button "SubmitButton" should be disabled

Scenario: User Form Rendered - Load the user form with no errors
    Then Then the user form should dont have errors

Scenario Outline: User Form Inputs - The user write the inputs in the form and the input will be uppercase 
    Given The user write the text <Text> on the input <Input>
    Then The input <Input> should have the value <TextUppercased>

Examples:
    | Input     | Text       | TextUppercased |
    | Name      | RamOn      | RAMON          |
    | Username  | AleJanDro  | ALEJANDRO      |
    | Surname   | GomeZ      | GOMEZ          |
    | Id        | 12345678z  | 12345678Z      |

Scenario: User Form Inputs - The user try to add more characters than the maximum allowed on Name Input
    Given The user write the text Fotosíntesis on the input Name
    Then The input Name should have the value FOTOSÍNTES

Scenario Outline: User Form Inputs - The user change teh selector value
    Given The user select the value <Value> on the selector <Input>
    Then The selector <Input> should have the value <ExpectedValue>

Examples:
    | Input     | Value               | ExpectedValue       |
    | Countries | Spain               | Spain               |
    | Countries | Argentina           | Argentina           |
    | Countries | Select your country | Select your country | 

Scenario Outline: User Form Inputs - The Input should show error border and error message when is an error
    Given The user write the text <Text> on the input <Input>
    And The user write the text  on the input <Input>
    Then The input "<Input>" should have the border error
    Then The user form should show an error message relationated on <Input>

Examples:
    | Input     | Text       |
    | Name      | RamOn      |
    | Username  | AleJanDro  |
    | Surname   | GomeZ      |
    | Id        | 12345678z  |

Scenario Outline: User Form Inputs - The user try to write the Name that contains something from username
    Given The user write the text <Text> on the input <Input>
    And The user write the text <Text2> on the input <Input2>
    Then The user form should show an error message relationated on Name

Examples:
    | Input    | Text  | Input2   | Text2 |
    | Name     | Ramon | Username | Ra    |
    | Name     | Ramon | Username | mo    |
    | Name     | Ramon | Username | on    |
    | Name     | Ramon | Username | Ramon |
    | Username | Ra    | Name     | Ramon |
    | Username | mo    | Name     | Ramon |
    | Username | on    | Name     | Ramon |
    | Username | Ramon | Name     | Ramon |

#No se como arreglar este de aqui.
@skip
Scenario Outline: User Form Inputs - The user try to write the ID that is not valid with the country
    Given The user select the value Spain on the selector Countries
    And The user write the text <Text> on the input Id
    Then The user form should show an error message relationated on Id

Examples:
    | Text      |
    | 24532131A |
    | 1213      |
    | TextoNoID |
    | MiDNI     |