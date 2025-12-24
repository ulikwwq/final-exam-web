import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, onStudentClick }) {
  return (
    <div className="row">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onClick={onStudentClick}
        />
      ))}
    </div>
  );
}

export default StudentList;
