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

  const [firstName, lastName] = student.fullName.split(" ");

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div
        className="card text-center p-4 shadow"
        style={{ width: "350px", borderRadius: "15px", backgroundColor: "#fdfdfe" }}
      >
        <img
          src={student.image}
          className="rounded-circle mx-auto mb-3 shadow"
          alt={student.fullName}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h4 className="fw-bold mb-3">
            <div>{firstName}</div>
            <div>{lastName}</div>
          </h4>

          <p className="card-text rounded p-2 mb-2 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
            Group: {student.group}
          </p>
          <p className="card-text rounded p-2 mb-2 shadow-sm" style={{ backgroundColor: "#d1e7dd", color: "#0f5132" }}>
            Year: {student.year}
          </p>
          <p className="card-text rounded p-2 mb-2 shadow-sm" style={{ backgroundColor: "#f8d7da", color: "#842029" }}>
            GPA: {student.gpa}
          </p>

          <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
            Back to list
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;

