function Login({ setAdmin, setUser, user, admin }) {
  return (
    <>
      <h2>Login</h2>
      <button onClick={setUser}>
        {user ? "Cerrar sesion" : "Iniciar sesion"}
      </button>
      <button onClick={setAdmin}>
        {admin ? "Cerrar sesion admin" : "Iniciar sesion admin"}
      </button>
    </>
  );
}

export default Login;
