Feature: Feature: Form

Background: 
Given the user opens the form

Scenario: App rendering well
Then the user should see the form

Scenario Outline: App Inputs - Input on textbox
Given write on "<Textbox>" the text "<Write>"
Then on textbox "<Textbox>" should have the text "<ExpectedValue>"

Examples:
| Textbox |      Write | ExpectedValue |
|    User |       Joan |          JOAN |
|    Name |      Timmy |         TIMMY |
| Surname |       RioS |          RIOS |
|      ID |  12345678d |     12345678D |

Scenario Outline: App Inputs - Empty Textbox
Then the textbox "<Textbox>" should have an error outline

Examples:
| Textbox |
|    User |
|    Name |
| Surname |
|      ID |

Scenario Outline: App Inputs - Fill Textbox an check error
Given write on "<Textbox>" the text "<Write>"
Then the textbox "<Textbox>" should not have an error outline

Examples:
| Textbox |      Write |
|    User |       Joan |
|    Name |      Timmy |
| Surname |       RioS |
|      ID |  12345678d |

Scenario Outline: App Inputs - Write name that is cointaned on username
Given write on "<Textbox>" the text "<Write>"
And write on "<Textbox2>" the text "<Write2>"
Then the textbox "User" should have an error outline

Examples:
| Textbox |  Write | Textbox2 | Write2 |
|    User | Reisel |     Name |    Rei |
|    Name |    Rei |     User | Reisel |

Scenario: App Inputs - Testing Max chars on username
Given write on "User" the text "0123456789Hola"
Then on textbox "User" should have the text "0123456789"

Scenario Outline: App Inputs - Clear Button clean textbox
Given write on "<Textbox>" the text "<Write>"
And the user click "ClearButton"
Then on textbox "<Textbox>" should have the text ""

Examples:
| Textbox |      Write |
|    User |       Joan |
|    Name |      Timmy |
| Surname |       RioS |
|      ID |  12345678d |

Scenario: App Inputs - Clear Button reset dropdown
Given the user click "Country"
And the user click "SpainOption"
And the user click "ClearButton"
Then the selector "Country" should have the value "None"

Scenario: App Outputs - Show all error messages
Then the app should show all errors

Scenario Outline: App Outputs - Other errors messages
Given write on "<Textbox>" the text "<Write>"
And write on "<Textbox2>" the text "<Write2>"
Then the app should show the error "Username: No puede contener el texto del campo Name."

Examples:
| Textbox |  Write | Textbox2 | Write2 |
|    User | Reisel |     Name |    Rei |
|    Name |    Rei |     User | Reisel |


