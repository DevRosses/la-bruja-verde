function Login({ setAdmin, setUser, user, admin }) {
  return (
    <>
      <h2>Ingresá al círculo.</h2>
      <p>Tu cuenta, tus rituales, tus favoritos.</p>
      <div>
        <button onClick={setUser}>
          {user ? "Cerrar sesión" : "Iniciar sesión"}
        </button>
        <button onClick={setAdmin}>
          {admin ? "Cerrar sesión admin" : "Iniciar sesión admin"}
        </button>
      </div>
      <div>
        <p>¿Aún no tenés cuenta?</p>
        <button>Unite al aquelarre.</button>
      </div>
    </>
  );
}

export default Login;
