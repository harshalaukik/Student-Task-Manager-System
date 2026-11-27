

function Login({ onSwitch, onLogin }) {


  return (
    <div className="main-container">
      <section id="login-section">
        <form className="form" id="login-form" noValidate onSubmit={(event) => {
    event.preventDefault();
    onLogin();
  }}
>
          <h1>Login Page</h1>

          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            className="email"
            name="email"
            id="login-email"
            placeholder="Enter Email"
            required
          />

          <span className="error" id="login-email-error"></span>

          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            className="password"
            name="password"
            id="login-password"
            placeholder="Enter Password"
            required
          />

          <span className="error" id="login-password-error"></span>

          <input type="submit" className="btn" value="Login" />

          <p>
            Don't have an account? <span><button
  type="button"
  className="link-button"
  onClick={onSwitch}
> Registration
</button></span></p>
        </form>
      </section>
    </div>
  );
}

export default Login;
