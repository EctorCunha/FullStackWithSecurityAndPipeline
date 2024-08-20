import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ButtonRegisterAcc } from "../ButtonRegisterAcc";
import "../FormLogin/formLogin.css";
import "../../pages/CRUDPage/crudPage.css";

interface IFields {
  username: string;
  password: string;
}

const initialFields: IFields = {
  username: "",
  password: "",
};

export function FormRegisterAcc() {
  const [fields, setFields] = useState(initialFields);
  const [errMsg, setErrMsg] = useState('')
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  function onChange(ev: any) {
    const { name, value } = ev.target;
    setFields({ ...fields, [name]: value });
  }

  async function handleSubmit (ev:any){
    ev.preventDefault();
    try {
      const response = await api.post("/login", fields);
      const message = response.data.message == "Usuário criado";
      
      if(message){
        setSuccessMessage("Conta criada com sucesso");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } 
      

    } catch (error:any) {
      if(!error.response){
        setErrMsg('No server response');
      } else if(error.response.status === 401){
        setErrMsg('Credenciais inválidas');
      } else if(error.response.status === 500){
        setErrMsg('Server error');
      } else {
        setErrMsg('Register error');
      }
    }
  }

  useEffect(() => {
    setErrMsg('');
  }, [fields]);


  return (
    <>
    {successMessage && <span className="msgSuccess">{successMessage}</span>}
      <form className="form" onSubmit={handleSubmit}>
        <p className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
        <label className="label" htmlFor="email">
          Username:
        </label>
        <input
          onChange={onChange}
          data-testid="form-username"
          className="input"
          type="text"
          name="username"
          id="username"
          value={fields.username}
          autoComplete="username"
          placeholder="Crie seu username"
          required
        />
        <label className="label" htmlFor="password">
          Senha:
        </label>
        <input
          onChange={onChange}
          data-testid="form-password"
          className="input"
          type="password"
          name="password"
          id="password"
          value={fields.password}
          autoComplete="current-password"
          placeholder="Crie sua senha"
          required
        />
        <ButtonRegisterAcc
        //  handleLogin={handleLogin}
         />
         <span style={{fontSize:".7rem", margin: "1rem", color: "#fff"}}><a href="/login">Já tenho conta</a></span>
      </form>
      
      </>
  );
}
