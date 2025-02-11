export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((acc, item) => acc + item.id, 0);
}
