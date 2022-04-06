function SignIn() {
  return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" name="submit-button" value="Submit" />
      </form>
      -----------------------
      <ul>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </ul>
      <span>Already have an account? Log in.</span>
    </div>
  );
}

export default SignIn;
