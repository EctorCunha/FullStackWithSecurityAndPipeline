import { useEffect, useState } from "react";
import axios from "axios";
import { BackToHome } from "../../components/BackToHome";
import { Pagination } from "../../components/Pagination";
import { Loading } from "../../components/Loading";
import "./listPage.css";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";

interface IUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
  };
  email: string;
  login: {
    username: string;
  };
  registered: {
    age: number;
  };
}

export function ListPage() {
  // Recebe os dados da API
  const [userData, setUserData] = useState([] as IUser[]);

  // Atualiza a página
  const [atualize, setAtualize] = useState(false);
  const [loading, setLoading] = useState(false);

  // Busca
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Paginação
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(userData.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = userData.slice(startIndex, endIndex);

  function getData() {
    try {
      axios
        .get(`https://randomuser.me/api/?page=3&results=500`)
        .then((response) => {
          setLoading(true);
          setUserData(response.data.results);
        });
    } catch (error) {
      alert("Não foi possível obter os dados");
    }
  }

  const dataWithFilter = currentItens.filter(
    (item: any) =>
      item.name.first.toLowerCase().includes(search.toLowerCase()) ||
      item.name.last.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.login.username.toLowerCase().includes(search.toLowerCase())
  );

  function handleLogout() {
    logout();
    navigate("/login");
  }

  useEffect(() => {
    getData();
    setCurrentPage(0);
  }, [atualize, itensPerPage]);

  return (
    <section id="containerListPage">
      <BackToHome />
      <div className="logoutContainer"><span className="logout" onClick={handleLogout}>Logout</span></div>
      <h1 className="h1Titulo">Lista de usuários</h1>
      <section className="formListPage">
        <h2 className="titleForm">Faça sua busca aqui</h2>
        <div className="divsLabelsInputs">
          <input
            className="inputsListPage"
            type="text"
            name="fullName"
            placeholder="Busque por nome, username ou e-mail"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <div className="peoplePerPage">
        <h4>Defina a quantidade de pessoas por tabela</h4>
        <select
          name="people"
          id="people"
          value={itensPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>

      {loading && dataWithFilter ? (
        <table>
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>Foto</th>
              <th>E-mail</th>
              <th>Nome do Usuário</th>
              <th>Idade</th>
            </tr>
          </thead>
          {dataWithFilter.map((data) => (
            <tbody key={data.email}>
              <tr>
                <td>
                  {data.name.first} {data.name.last}
                </td>
                <td>
                  <img
                    style={{ width: "5rem", height: "5rem" }}
                    src={data.picture.medium}
                    alt="Foto do usuário"
                  />
                </td>
                <td>{data.email}</td>
                <td>{data.login.username}</td>
                <td>{data.registered.age}</td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <Loading />
      )}

      <div className="tableContainer">
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </div>
    </section>
  );
}
