radio.onReceivedString(function (receivedString) {
    if (receivedString == "move") {
        led.toggle(1, 1)
        music.playMelody("C D E D C - - - ", 120)
    } else if (receivedString == "sound") {
        led.plot(2, 2)
        music.playMelody("A A A B - - - - ", 120)
    }
})
led.toggle(3, 2)
basic.forever(function () {
	
})
