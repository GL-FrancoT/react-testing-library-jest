const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button disabled="true">Login</button>
      </form>
    </div>
  );
};

export default Login;
