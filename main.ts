radio.onReceivedString(function (receivedString) {
    if (receivedString == "move") {
        led.toggle(1, 1)
    } else if (receivedString == "sound") {
        led.plot(2, 2)
    } else if (receivedString == "sensed") {
        led.toggle(3, 3)
        led.toggle(3, 4)
    }
})
radio.setGroup(1)
led.toggle(3, 2)
basic.forever(function () {
	
})
