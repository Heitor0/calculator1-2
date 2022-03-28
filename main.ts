input.onButtonPressed(Button.A, function () {
    // change var by 1 when A is clicked
    // 
    Var1 += 1
    basic.showNumber(Var1)
})
input.onButtonPressed(Button.AB, function () {
    Var2 = Var1
    Var1 = 0
})
input.onButtonPressed(Button.B, function () {
    // changing var by 1
    Var1 += -1
    basic.showNumber(Var1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Var1 - Var2)
})
/**
 * I had a more efficient program earlier on i was unsure if it was the above and beyond program
 */
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showNumber(Var1 + Var2)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(Var1 - Var2)
    basic.showNumber(Var1 + Var2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    control.reset()
})
/**
 * setting the nums to 1
 */
let Var2 = 0
let Var1 = 0
Var1 = 0
Var2 = 0
