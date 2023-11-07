Feature: Minesweeper

Background:
  Given the player opens the game

@test01
Scenario: Starting game - All the cells should be hidden
  Then all the cells should be covered

@test02
Scenario: Starting game - All the cells should be enabled
  Then all the cells should be enabled

@test03
Scenario: Uncovering a cell - Disabling the cell
  Given the player loads the following mock data:
  |*|o|
  |*|o|
  When the player uncovers the cell (1,2)
  Then the cell (1,2) should be disabled