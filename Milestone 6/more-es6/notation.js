const student = {
  name: "Kalim Uddin",
  age: 15,
  class: 10,
  marks: {
    math: 78,
    physics: 100,
    chemistry: 65,
  },
};
//dot notation
const marks = student.marks.math;

// if you know the names
const marks2 = student["marks"]["chemistry"];

const subject = "math";
const subjectMark = student.marks[subject];
console.log(subjectMark);
