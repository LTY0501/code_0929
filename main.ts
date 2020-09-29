let 分數 = 0
input.onGesture(Gesture.Shake, function () {
    分數 = randint(80, 100)
    basic.showNumber(分數)
    if (分數 >= 90) {
        basic.showString("A+")
    } else if (分數 >= 85) {
        basic.showString("A")
    } else if (分數 <= 84) {
        basic.showString("A-")
    }
})
basic.forever(function () {
	
})
