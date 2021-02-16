radio.onReceivedString(function (receivedString) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 2) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
        basic.clearScreen()
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 3) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 4) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 5) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 6) {
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 7) {
        basic.showIcon(IconNames.Confused)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    }
})
radio.setGroup(69)
basic.showLeds(`
    # . # . #
    . # # # .
    . # . # .
    . # # # .
    # . # . #
    `)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendString("tp")
    basic.pause(2000)
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 2) {
        radio.setTransmitPower(2)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 3) {
        radio.setTransmitPower(3)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 4) {
        radio.setTransmitPower(4)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 5) {
        radio.setTransmitPower(2)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 6) {
        radio.setTransmitPower(6)
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 7) {
        radio.setTransmitPower(7)
    }
})
