import React, { useState } from "react";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  // --- Login State ---
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");

  // --- Signup State ---
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // --- Signup Errors State ---
  const [nameError, setNameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [dobError, setDobError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");

  // --- Utility Functions ---

  const validateEmail = (email, setError) => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const validatePhoneNumber = (phone, setError) => {
    // 10-digit number regex
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return false;
    }
    setError("");
    return true;
  };

  const validateDob = (date, setError) => {
    // Check if the date is in the YYYY-MM-DD format (since input type="date" outputs this)
    if (!date) {
      setError("Date of Birth is required.");
      return false;
    }

    // A simple check to ensure the user is not in the future (optional: you could check for minimum age)
    const today = new Date();
    const inputDate = new Date(date);
    if (inputDate >= today) {
      setError("Date of Birth cannot be in the future.");
      return false;
    }

    setError("");
    return true;
  };

  const validatePassword = (password, setError) => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  // --- Handlers ---

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    const isEmailValid = validateEmail(loginEmail, setLoginEmailError);
    const isPasswordValid = validatePassword(loginPassword, setLoginPasswordError);

    if (isEmailValid && isPasswordValid) {
      // **Validation passed!**
      alert("Login successful!");
      // Add your actual login logic here (API call, etc.)
    } else {
      console.log("Login validation failed.");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Validate all fields
    if (name.trim() === "") { setNameError("Name is required."); isValid = false; } else { setNameError(""); }
    if (!validateEmail(signupEmail, setSignupEmailError)) isValid = false;
    if (!validatePhoneNumber(phoneNumber, setPhoneNumberError)) isValid = false;
    if (!validateDob(dob, setDobError)) isValid = false;
    if (!validatePassword(signupPassword, setSignupPasswordError)) isValid = false;

    if (isValid) {
      // **Validation passed!**
      alert("Account created successfully!");
      // Add your actual signup logic here (API call, etc.)
    } else {
      console.log("Signup validation failed.");
    }
  };
  
  // A helper function to change state and clear errors when switching modes
  const handleSwitch = (toSignup) => {
      setIsSignup(toSignup);
      // Clear errors on switch
      setLoginEmailError("");
      setLoginPasswordError("");
      setNameError("");
      setSignupEmailError("");
      setPhoneNumberError("");
      setDobError("");
      setSignupPasswordError("");
  }


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }

        body, html { 
          height: 100%; 
          background: #fff7f9; 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          overflow-x: hidden; 
        }

        header {
          width: 100vw;                 
          background: #f8d3e1;
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 10px rgba(255,105,180,0.2);
          position: relative;            
          left: 0;                      
        }

        header h1 {
          font-size: 24px;
          color: #ff69b4;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 25px;
          margin: 0;                  
          padding: 0;                    
        }

        nav ul li a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          transition: color 0.3s;
        }

        nav ul li a:hover {
          color: #ff69b4;
        }

        .login-container {
          width: 1000px;
          max-width: 95%;
          height: 650px;
          display: flex;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(255,105,180,0.3);
          position: relative;
          transition: all 0.8s ease-in-out;
          border-radius: 18px;
          margin: 40px auto;
        }

        .login-left, .login-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: all 0.8s ease-in-out;
          padding: 40px;
          color: #b03060;
        }

        .login-left {
          backdrop-filter: blur(12px);
        }

        .login-right {
          background: 
            url('https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop') 
            center/cover no-repeat;
          transition: transform 1s ease;
        }

        .login-form {
          width: 100%;
          max-width: 380px;
          text-align: center;
          position: absolute;
          transition: all 0.8s ease-in-out;
        }

        .login-form h2 {
          margin-bottom: 15px;
          font-size: 32px;
          color: #ff69b4;
          text-shadow: 1px 1px 5px rgba(0,0,0,0.1);
        }

        .login-form p {
          margin-bottom: 25px;
          color: #cc6699;
        }

        .login-form input {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 5px; /* Reduced margin to make space for error message */
          border: 2px solid #ffc1d6;
          border-radius: 12px;
          font-size: 16px;
          outline: none;
          background: #fff0f6;
          color: #b03060;
          transition: border 0.3s, transform 0.3s, box-shadow 0.3s;
        }

        .login-form input:focus {
          border-color: #ff69b4;
          transform: scale(1.02);
          box-shadow: 0 0 8px rgba(255,105,180,0.4);
        }
        
        /* New Style for Error Messages */
        .error-message {
            color: #d63384; /* A dark pink/red for errors */
            font-size: 12px;
            text-align: left;
            margin-bottom: 12px; /* Space after the error before the next input/button */
            font-weight: 600;
        }
        
        .login-form input.error {
            border-color: #d63384; /* Highlight input with red border */
        }

        .login-form button {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 25px;
          background: linear-gradient(45deg, #ff69b4, #ffb6c1);
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(255,105,180,0.3);
          transition: all 0.3s;
          margin-top: 10px; /* Added some margin for general forms */
        }

        .login-form button:hover {
          transform: scale(1.05);
          background: linear-gradient(45deg, #ff1493, #ff69b4);
        }

        .switch-link {
          margin-top: 15px;
          color: #ff69b4;
          cursor: pointer;
          font-weight: 600;
          transition: color 0.3s;
        }

        .switch-link:hover { color: #b03060; }

        .login-container.signup-mode .login-left { transform: translateX(100%); }
        .login-container.signup-mode .login-right { transform: translateX(-100%); }

        .login-container.signup-mode #loginForm { opacity: 0; pointer-events: none; }
        .login-container.signup-mode #signupForm { opacity: 1; pointer-events: all; }

        #signupForm { opacity: 0; pointer-events: none; }

        @media(max-width: 768px) {
          header { flex-direction: column; align-items: flex-start; }
          nav ul { flex-wrap: wrap; gap: 15px; margin-top: 10px; }
          .login-container { flex-direction: column; height: auto; }
          .login-left, .login-right { height: 400px; width: 100%; transform: none; padding: 20px; }
          .login-container.signup-mode .login-left, .login-container.signup-mode .login-right { transform: none; }
          #signupForm, #loginForm { position: relative; opacity: 1; pointer-events: all; }
          .login-form { position: relative; max-width: 100%; }
        }
      `}</style>

      <div className="login-wrapper">
        {/* Login / Signup Section */}
        <div className={`login-container ${isSignup ? "signup-mode" : ""}`}>
          <div className="login-left">
            {/* Login Form */}
            <form
              className="login-form"
              id="loginForm"
              onSubmit={handleLogin}
              style={{
                opacity: isSignup ? 0 : 1,
                pointerEvents: isSignup ? "none" : "all",
              }}
            >
              <h2>Log In</h2>
              <p>Welcome back to Vogue Vault</p>
              
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                onBlur={() => validateEmail(loginEmail, setLoginEmailError)}
                className={loginEmailError ? "error" : ""}
              />
              {loginEmailError && <div className="error-message">{loginEmailError}</div>}
              
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                onBlur={() => validatePassword(loginPassword, setLoginPasswordError)}
                className={loginPasswordError ? "error" : ""}
              />
              {loginPasswordError && <div className="error-message">{loginPasswordError}</div>}
              
              <button type="submit">Log In</button>
              
              <div className="switch-link" onClick={() => handleSwitch(true)}>
                Don’t have an account? Sign Up
              </div>
            </form>

            {/* Signup Form */}
            <form
              className="login-form"
              id="signupForm"
              onSubmit={handleSignup}
              style={{
                opacity: isSignup ? 1 : 0,
                pointerEvents: isSignup ? "all" : "none",
              }}
            >
              <h2>Sign Up</h2>
              <p>Create your Vogue Vault account</p>
              
              <input 
                type="text" 
                placeholder="Name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => name.trim() === "" ? setNameError("Name is required.") : setNameError("")}
                className={nameError ? "error" : ""}
              />
              {nameError && <div className="error-message">{nameError}</div>}

              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                onBlur={() => validateEmail(signupEmail, setSignupEmailError)}
                className={signupEmailError ? "error" : ""}
              />
              {signupEmailError && <div className="error-message">{signupEmailError}</div>}
              
              <input 
                type="tel" 
                placeholder="Phone Number (10 digits)" 
                required 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={() => validatePhoneNumber(phoneNumber, setPhoneNumberError)}
                className={phoneNumberError ? "error" : ""}
              />
              {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
              
              <input 
                type="date" 
                required 
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                onBlur={() => validateDob(dob, setDobError)}
                className={dobError ? "error" : ""}
              />
              {/* Note: The 'date' input type handles the format internally (usually YYYY-MM-DD), but we check for a valid past date. */}
              {dobError && <div className="error-message">{dobError}</div>}
              
              <input 
                type="password" 
                placeholder="Password (min 6 characters)" 
                required 
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                onBlur={() => validatePassword(signupPassword, setSignupPasswordError)}
                className={signupPasswordError ? "error" : ""}
              />
              {signupPasswordError && <div className="error-message">{signupPasswordError}</div>}

              <button type="submit">Create Account</button>
              
              <div className="switch-link" onClick={() => handleSwitch(false)}>
                Already have an account? Log In
              </div>
            </form>
          </div>

          <div className="login-right">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;