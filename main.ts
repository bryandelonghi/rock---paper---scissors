let hand = 0
/**
 * Extensions
 * 
 * 1. clear screen
 * 
 * 2. animate the scissors
 * 
 * 3. tilt controls to choose
 */
// ExtensionsL
// 
// button A+B- clear screen
// 
// button A - keep score (you)
// 
// button B - keep score (other)
input.onButtonPressed(Button.A, function () {
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
basic.forever(function () {
    if (hand == 3) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(100)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . # # #
            # # . . .
            # # . . .
            `)
        basic.pause(100)
    }
})
