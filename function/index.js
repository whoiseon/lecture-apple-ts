function myFnc(int) {
    return int * 2;
}
myFnc(4);
// void = return 값이 없을 때;
function myFncVoid(int) {
    var number = int + 1;
}
// parameter 가 있을 수도 없을 수도 있을 때
// int? :number === int: number | undefined
function myFncNarrow(int) {
    var number = int + 3;
}
myFncNarrow();
