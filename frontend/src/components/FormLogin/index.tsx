import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { api } from "../../services/api";
import {credential, login, remember} from "../../services/auth";
import { ButtonLogin } from "../ButtonLogin";
import "./formLogin.css";

interface IFields {
  username: string;
  password: string;
}

const initialFields: IFields = {
  username: "",
  password: "",
};

export function FormLogin() {
  const [fields, setFields] = useState(initialFields);
  const [check, setCheck] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const { setAuth }:any = useContext(AuthContext);
  const navigate = useNavigate();

  function onChange(ev: any) {
    const { name, value } = ev.target;
    setFields({ ...fields, [name]: value });
  }

  function rememberMe(){
    const rememberMe = localStorage.getItem(credential);
    console.log(rememberMe)
    if(rememberMe){
      const [username, password] = rememberMe.split(',');
      setFields({username, password});
    }
  }

  async function handleSubmit (ev:any){
    ev.preventDefault();
    try {
      const response = await api.post("/auth/login", fields);
      const token = response?.data?.token;
      setAuth({fields, token});
      if(response.data.token){
        login(response.data.token);
        navigate("/listPage");
      }

    } catch (error:any) {
      if(!error.response){
        setErrMsg('No server response');
      } else if(error.response.status === 401){
        setErrMsg('Credenciais inválidas');
      } else if(error.response.status === 500){
        setErrMsg('Server error');
      } else {
        setErrMsg('Login error');
      }
    }
  }

  function handleRemerberMe(e: any){
    setCheck(e.target.checked);
    if(e.target.checked){
      remember(fields.username);
    }
  }

  useEffect(() => {
    setErrMsg('');
  }, [fields]);

  useEffect(() => {
    rememberMe();
  }, []);

  return (
    <>
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
          placeholder="Digite seu username"
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
          placeholder="Digite sua senha"
          required
        />

        <div id="rememberMeContainer">
          <input
            onChange={handleRemerberMe}
            data-testid="form-checkbox"
            className="checkbox"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={check}
          />
          <label className="remember-me" htmlFor="checkbox">
            Lembrar-me
          </label>
        </div>
        <ButtonLogin
        //  handleLogin={handleLogin}
         />
      <span style={{fontSize:".7rem", margin: "1rem", color: "#fff"}}>Ainda não tem conta? <a href="/registerAcc">Clique aqui para criar</a></span>
      </form>
      </>
  );
}
