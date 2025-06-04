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
basic.forever(function () {
    if (dataC === 1 && dataL === 0 && dataP === 0){
        L = 250
        P = 250
    }
    if (dataC === 0 && dataP === 0 && dataL === 1) {
        P = 150
        L = 50
    }
    if (dataC === 0 && dataL === 0 && dataP === 1) {
        P = 50
        L = 150
    }
})

basic.forever(function () {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, L)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, P)
})