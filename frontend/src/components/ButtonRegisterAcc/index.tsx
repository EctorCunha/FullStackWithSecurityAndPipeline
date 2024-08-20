import "../FormLogin/formLogin.css";

export function ButtonRegisterAcc(props: any) {
  const { handleLogin } = props;

  return (
    <button onClick={handleLogin} className="btnLogin" type="submit">
      Criar Conta
    </button>
  );
}
