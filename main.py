def on_received_string(receivedString):
    if receivedString == "move":
        led.toggle(1, 1)
    elif receivedString == "sound":
        led.plot(2, 2)
    elif receivedString == "sensed":
        led.toggle(3, 3)
        led.toggle(0, 0)
    else:
        pass
radio.on_received_string(on_received_string)

radio.set_group(1)
led.toggle(3, 2)

def on_forever():
    pass
basic.forever(on_forever)
