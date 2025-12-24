import React from "react";

function StudentCard({ student, onClick }) {
  // Разделяем имя и фамилию
  const [firstName, lastName] = student.fullName.split(" ");

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
      <div
        className="card text-center p-3"
        onClick={() => onClick(student.id)}
        style={{ cursor: "pointer", width: "250px" }}
      >
        <img
          src={student.image}
          className="card-img-top rounded-circle mx-auto"
          alt={student.fullName}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold mb-2">
            <div>{firstName}</div>
            <div>{lastName}</div>
          </h5>
          <p className="card-text bg-light rounded p-1">Group: {student.group}</p>
          <p className="card-text rounded p-1" style={{ backgroundColor: "#d1e7dd", color: "#0f5132" }}>
            Year: {student.year}
          </p>
          <p className="card-text rounded p-1" style={{ backgroundColor: "#f8d7da", color: "#842029" }}>
            GPA: {student.gpa}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
