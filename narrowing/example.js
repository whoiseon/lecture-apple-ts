// 1
function cleaningArr(arr) {
    var numberArr = [];
    arr.forEach(function (item) {
        if (typeof item === 'string') {
            numberArr.push(Number(item));
        }
        else {
            numberArr.push(item);
        }
    });
    console.log(numberArr);
    return numberArr;
}
cleaningArr(['1', 2, '3']);
var moonTeacher = {
    subject: 'math',
};
var hwangTeacher = {
    subject: ['science', 'english'],
};
var kimTeacher = {
    subject: ['science', 'art', 'korean'],
};
function lastSubject(teacher) {
    if (typeof teacher.subject === 'string') {
        return teacher.subject;
    }
    else if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    }
    else {
        return ';;?';
    }
}
console.log(lastSubject(kimTeacher));
