// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar من shadcn */}
      <AppSidebar>
        <h2 className="text-lg font-bold text-white">App Sidebar</h2>
        <nav className="mt-4">
          <ul>
            <li className="mb-2">
              <a
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/students"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Students
              </a>
            </li>
          </ul>
        </nav>
      </AppSidebar>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {/* Render dynamic content using Outlet */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
