import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { students } from "./data/students";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";

function App() {
  const [visibleCount, setVisibleCount] = useState(10);
  const navigate = useNavigate();

  const handleStudentClick = (id) => {
    navigate(`/students/${id}`);
  };

  const handleSeeMore = () => {
    setVisibleCount(students.length);
  };

  return (
    <div className="container mt-4">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="mb-4">Student Catalog</h1>
              <StudentList
                students={students.slice(0, visibleCount)}
                onStudentClick={handleStudentClick}
              />
              {visibleCount < students.length && (
                <div className="text-center mt-3">
                  <button className="btn btn-primary" onClick={handleSeeMore}>
                    See more
                  </button>
                </div>
              )}
            </>
          }
        />

        <Route path="/students/:id" element={<StudentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
