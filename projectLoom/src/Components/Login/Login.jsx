import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles["auth-bg"]}>
      <div className={styles["auth-card"]}>
        
        {/* Logo */}
        <div className={styles["logo"]}>
          <div className={styles["logo-icon"]}>P</div>
          <div>
            <h1>Power<span>Loom</span></h1>
            <p>Spares Hub</p>
          </div>
        </div>

        <h2 className={styles["auth-title"]}>Login</h2>

        <form onSubmit={handleSubmit}>

          <div className={styles["login-email"]}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles["auth-row"]}>
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>

            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" onClick={() => navigate("/products")}>Login</button>
        </form>

        <p className={styles["auth-footer"]}>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
