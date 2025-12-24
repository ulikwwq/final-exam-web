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
    <div className="container mt-5 mb-5">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="text-center mb-4">
                <h1 className="mb-2">Student Catalog</h1>
                <h5 className="text-muted">
                  Here are 10 students. Click the button or a student for more info.
                </h5>
              </div>

              <StudentList
                students={students.slice(0, visibleCount)}
                onStudentClick={handleStudentClick}
              />

              {visibleCount < students.length && (
                <div className="text-center mt-4">
                  <button className="btn btn-primary btn-lg" onClick={handleSeeMore}>
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
