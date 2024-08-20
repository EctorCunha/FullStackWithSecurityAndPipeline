import './header.css'

export function Header (){
  return(
   <div className="header">
        <h1>Desafio SHARENERGY</h1>
        <ul className='list'>
            <li><a href="/">Home</a></li>
            <li><a href="/listPage">Lista de usuários</a></li>
            <li><a href="/randomDog">Random Dog</a></li>
            <li><a href="/statusCode">Status Code</a></li>
            <li><a href="/crudPage">CRUD Page</a></li>
        </ul>
   </div>
  )};
