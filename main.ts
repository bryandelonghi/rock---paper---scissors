let hand = 0
// ExtensionsL
// 
// button A+B- clear screen
// 
// button A - keep score (you)
// 
// button B - keep score (other)
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else if (hand == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
