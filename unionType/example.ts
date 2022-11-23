let user: string = 'kim';
let userAge: number | undefined = undefined;
let userMarried: boolean = false;

let Hwang: (string | undefined | number | boolean)[] = [user, userAge, userMarried];

let school: { score: (number | boolean)[], teacher: string, friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: 'Moon',
  friend: 'go',
};

school.score[4] = false;
school.friend = ['Lee', school.teacher];