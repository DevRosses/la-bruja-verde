function Login(setLogeadoUser, setLogeadoAdmin) {
  return (
    <>
      <h2>Login</h2>
      <button onClick={setLogeadoUser}>Loguearse como usuario</button>
      <button onClick={setLogeadoAdmin}>Loguearse como admin</button>
    </>
  );
}

export default Login;
