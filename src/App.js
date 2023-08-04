import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route exact path="/profile" element={<PrivateRoute />} />
          </Routes>
        </Router>
      </AuthProvider>

      <button>Click Here!</button>
    </div>
  );
};

export default App;
