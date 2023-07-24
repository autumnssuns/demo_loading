input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        . # . # .
        `)
})
