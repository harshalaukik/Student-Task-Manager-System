function Registration({ onSwitch }){
    return(
        <div className="main-container">
         <section className="registration-section" id="registration-section">
        <form className="form" id="registration-form" noValidate>
          <h1>Registration Page</h1>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="registration-name"
            name="name"
            placeholder="Enter Name"
            required
          />
          <span className="error" id="name-error"></span>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="email"
            id="registration-email"
            name="email"
            placeholder="Enter Email"
            required
          />
          <span className="error" id="registration-email-error"></span>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="password"
            name="password"
            id="registration-password"
            placeholder="Enter Password"
            required
          />
          <span className="error" id="registration-password-error"></span>
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm password"
            placeholder="Enter Password"
            required
          />
          <span className="error" id="confirm-password-error"></span>
          <input type="submit" className="btn" />
          <p>
            Have an account? <span> <button
  type="button"
  className="link-button"
  onClick={onSwitch}
> Login
</button></span></p> 
        </form>
      </section>
      </div>
    );
}
export default Registration;