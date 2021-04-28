input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < randomIcon.length; i++) {
        basic.showIcon(randomIcon[randint(0, 3)][0])
    }
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})

//you can add more icons if you want but than the simulator will be longer
let randomIcon: IconNames[][] = [[IconNames.Diamond], [IconNames.Sword], [IconNames.Snake], [IconNames.StickFigure]]