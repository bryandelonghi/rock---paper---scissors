hand = 0
"""

ExtensionsL

button A+B- clear screen

button A - keep score (you)

button B - keep score (other)

"""

def on_button_pressed_ab():
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    global hand
    hand = randint(1, 3)
    if hand == 1:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
    elif hand == 2:
        basic.show_icon(IconNames.SQUARE)
    elif hand == 3:
        basic.show_icon(IconNames.SCISSORS)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
