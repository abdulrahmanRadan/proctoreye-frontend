import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import IdentityVerification from "./pages/IdentityVerification";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route
          path="identity-verification"
          element={<IdentityVerification />}
        />
      </Route>
    </Routes>
  );
};

export default App;
