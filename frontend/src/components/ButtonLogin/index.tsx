import "../FormLogin/formLogin.css";

export function ButtonLogin(props: any) {
  const { handleLogin } = props;

  return (
    <button onClick={handleLogin} className="btnLogin" type="submit">
      Entrar
    </button>
  );
}
