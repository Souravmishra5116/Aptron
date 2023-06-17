import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { HomePage } from "./pages/HomePage";
import { Pagenotfound } from "./pages/Pagenotfound";
import { Policy } from "./pages/Policy";
import { Registration } from "./pages/auth/Registration";
import { Login } from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import Private from "./routes/Private";
import AdminRoute from "./routes/AdminRoute";
import { AdminDashboard } from "./pages/admin/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* protected route */}
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        {/* protected route */}
        <Route path="/dashboard/" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
