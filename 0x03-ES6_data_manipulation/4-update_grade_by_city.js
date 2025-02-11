export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((student) => student.location === city)
    .map((student) => {
      const foundObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: foundObj ? foundObj.grade : 'N/A',
      };
    });
}
