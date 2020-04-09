Javascript+HTML+CSS implementation of a calculator

Calculator should look like native-OSX calculator

4/7/2020
- add button style change to indicate that a button has been selected
- when a number button is clicked (held down), background color should be 10-20% lighter 
- when a special button is clicked (held down), background color should be 10-20% lighter
- when an operator button is clicked (held down), background lightness should be 10-20% darker
    - border radius should be darker to indicate selection
    - border radius return to default when another operator selected or equal button selected

- add functionality for '%' button
    - should divide current value by 100
    - display the value

design question
- on operator selection should the device calculate whatever statement is stored
    - then update the calculator with the resultant value and prep it as the next value?
    e.g.
        1 + 1 = 2 + 3 = 5 + ...