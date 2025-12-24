import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { students } from "../data/students";

function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        Back to list
      </button>

      <div className="card">
        <img
          src={student.image}
          className="card-img-top img-fluid"
          alt={student.fullName}
        />
        <div className="card-body">
          <h3 className="card-title">{student.fullName}</h3>
          <p className="card-text">ID: {student.id}</p>
          <p className="card-text">Group: {student.group}</p>
          <p className="card-text">Year: {student.year}</p>
          <p className="card-text">GPA: {student.gpa}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;
