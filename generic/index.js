function genericFnc(x) {
    return x[0];
}
var a = genericFnc([4, 2]);
var b = genericFnc(['4', '2']);
function minusFnc(x) {
    return x - 1;
}
var c = minusFnc(100);
function textLength(x) {
    return x.length;
}
var d = textLength(['100']);
