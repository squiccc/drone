let radio_group = 7
basic.showNumber(radio_group)
radio.setGroup(radio_group)
let battery_factor = 4.42
let lowbatterylimit = 3400
let batteryMilliVolt = 3700
let BatteryEmpty = false
serial.redirect(
SerialPin.P1,
SerialPin.P2,
BaudRate.BaudRate115200
)
basic.forever(function () {
	
})
