import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateMentor from './components/CreateMentor';
import CreateStudent from './components/CreateStudent';
import AssignStudent from './components/AssignStudent';
import ChangeMentor from './components/ChangeMentor';
import StudentsByMentor from './components/StudentsByMentor';
import PreviousMentor from './components/PreviousMentor';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-mentor">Create Mentor</Link>
            </li>
            <li>
              <Link to="/create-student">Create Student</Link>
            </li>
            <li>
              <Link to="/assign-student">Assign Student</Link>
            </li>
            <li>
              <Link to="/change-mentor">Change Mentor</Link>
            </li>
            <li>
              <Link to="/students-by-mentor">Students by Mentor</Link>
            </li>
            <li>
              <Link to="/previous-mentor">Previous Mentor</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create-mentor" element={<CreateMentor />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/assign-student" element={<AssignStudent />} />
          <Route path="/change-mentor" element={<ChangeMentor />} />
          <Route path="/students-by-mentor" element={<StudentsByMentor />} />
          <Route path="/previous-mentor" element={<PreviousMentor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
