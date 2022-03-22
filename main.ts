let Var1 = 0
let Var2 = 0
let Var3 = 0
input.onButtonPressed(Button.A, function () {
    Var1 += 1
    basic.showNumber(Var1)
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showNumber(Var1 + Var2)
        Var3 = Var1 + Var2
    }
})
input.onButtonPressed(Button.B, function () {
    Var2 += -1
    basic.showNumber(Var2)
})
input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showNumber(Var1 - Var2)
        Var3 = Var1 - Var2
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
