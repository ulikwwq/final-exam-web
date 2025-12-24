import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, onStudentClick }) {
  return (
    <div className="row justify-content-center g-4 px-3 py-3">
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
