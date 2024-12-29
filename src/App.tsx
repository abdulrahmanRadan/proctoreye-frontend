import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import IdentityVerification from "./pages/IdentityVerification";
import AddStudent from "./pages/AddStudent";
import { StudentProvider } from "./context/StudentContext";

const App: React.FC = () => {
  return (
    <StudentProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route
            path="identity-verification"
            element={<IdentityVerification />}
          />
          <Route path="add-student" element={<AddStudent />} />
        </Route>
      </Routes>
    </StudentProvider>
  );
};

export default App;
