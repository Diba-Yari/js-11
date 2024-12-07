// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

// const obj2 = {
//   id: 'kd455',
//   age: 24,
//   username: 'john2000',
//   skills: ['html', 'css', 'js'],
// };

// //  !   Answer:

// const {id}= obj2
// id='astroDiba'
// const{age}=obj2
// age=18
// const [first,second,...other]=obj2
// first='تموم کردن سریال های طولانی در یک شبانه روز'
// second='بچه با جنبه و باحال'

// console.log(obj2);

const obj2 = {
  id: "kd455",
  age: 24,
  username: "john2000",
  skills: ["html", "css", "js"],
};

obj2.id = "astroDiba";
obj2.age = 18;

const [first, second, ...other] = obj2.skills;
obj2.skills = [
  "تموم کردن سریال های طولانی در یک شبانه روز",
  "بچه با جنبه و باحال",
  ...other,
];

console.log(obj2);
