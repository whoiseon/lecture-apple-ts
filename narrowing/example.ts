// 1
function cleaningArr(arr: (number | string)[]): number[] {
  const numberArr: number[] = []
  arr.forEach((item: string | number) => {
    if (typeof item === 'string') {
      numberArr.push(Number(item));
    } else {
      numberArr.push(item);
    }
  });

  console.log(numberArr);
  return numberArr;
}

cleaningArr(['1', 2,'3']);

// 2
type TeacherType = {
  subject: string | string[]
}

const moonTeacher: TeacherType = {
  subject: 'math',
}

const hwangTeacher: TeacherType = {
  subject: ['science', 'english'],
}

const kimTeacher: TeacherType = {
  subject: ['science', 'art', 'korean'],
}

function lastSubject(teacher: TeacherType): string {
  if (typeof teacher.subject === 'string') {
    return teacher.subject;
  } else if (Array.isArray(teacher.subject)) {
    return teacher.subject[teacher.subject.length - 1];
  } else {
    return ';;?'
  }
}

console.log(lastSubject(kimTeacher));