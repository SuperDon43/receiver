def on_received_string(receivedString):
    if receivedString == "move":
        music.play_melody("C D E D C - - - ", 120)
    elif receivedString == "sound":
        music.play_melody("A A A B",120)
radio.on_received_string(on_received_string)

def on_forever():
    pass
basic.forever(on_forever)
