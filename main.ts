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
let data: number;

basic.forever(function () {
    data = pins.digitalReadPin(IR.l);
})




Sensors.ping(DigitalPin.P0, DigitalPin.P0, null)
