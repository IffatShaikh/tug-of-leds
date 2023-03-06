function Draw_light () {
    basic.clearScreen()
    led.plot(Light, 2)
    if (Light <= 0) {
        basic.clearScreen()
        basic.showString(" A wins")
        Light = 2
    } else if (Light >= 4) {
        basic.clearScreen()
        basic.showString(" B wins")
        Light = 2
    }
}
input.onButtonPressed(Button.A, function () {
    Light += -0.2
    Draw_light()
})
input.onButtonPressed(Button.B, function () {
    Light += 0.2
    Draw_light()
})
let Light = 0
Light = 2
Draw_light()
