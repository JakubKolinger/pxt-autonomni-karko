radio.setGroup(43)
radio.setTransmitPower(7)
radio.setFrequencyBand(81)
radio.setTransmitSerialNumber(true)


type IRC = {
    l: DigitalPin,
    c: DigitalPin,
    p: DigitalPin
}
const IR: IRC = {
    l: DigitalPin.P14,
    c: DigitalPin.P15,
    p: DigitalPin.P13
}
pins.setPull(IR.l, PinPullMode.PullNone);
pins.setPull(IR.c, PinPullMode.PullNone);
pins.setPull(IR.p, PinPullMode.PullNone);

let L: number;
let P: number;
let dataL: number;
let dataC: number;
let dataP: number;

basic.forever(function () {
    dataL = pins.digitalReadPin(IR.l);
    dataC = pins.digitalReadPin(IR.c);
    dataP = pins.digitalReadPin(IR.p);
    
})

radio.onReceivedNumber(function(receivedNumber: number) {
    if (receivedNumber === 1) {
        P = 100
        L = 50
    }
    if (receivedNumber === 2) {
        L = 100
        P = 50
    }
    if (receivedNumber === 3) {
        P = 100
        L = 100
    }

})
basic.forever(function () {
    if (dataC === 1 && dataL === 0 && dataP === 0){
        L = 250
        P = 250
    }
    if (dataP === 0 && dataL === 1) {
        P = 250
        L = 100
    }
    if (dataL === 0 && dataP === 1) {
        P = 100
        L = 250
    }
    if (dataL === 1 && dataP === 1){
        radio.sendNumber(0)
        P = 0
        L = -20
    }
    
})

basic.forever(function () {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, L*-1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, P)
})

