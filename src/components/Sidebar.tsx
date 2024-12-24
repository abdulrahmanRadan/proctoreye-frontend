import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 font-bold text-xl border-b border-gray-700">
        ProctorEye
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="/">Dashboard</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="/students">Student</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#">Exams</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
