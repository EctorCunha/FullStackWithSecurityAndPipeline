import notFound from "../../assets/not-found.png";
import { BackToHome } from "../../components/BackToHome";
import "./statusCode.css";

export function StatusCodePage() {
  function getCatStatus(status: number) {
    return `https://http.cat/${status}`;
  }

  //   if(!getCatStatus){
  //     return <img src={notFound}/>
  //   }

  return (
    <>
      <BackToHome />
      <div className="statusCodecontainer">
        <h1>Escolha um código HTTP</h1>
        <ul>
          <li>
            <a href={getCatStatus(201)} target="_blank">
              201
            </a>
          </li>
          <li>
            <a href={getCatStatus(202)} target="_blank">
              202
            </a>
          </li>
          <li>
            <a href={getCatStatus(200)} target="_blank">
              200
            </a>
          </li>
          <li>
            <a href={getCatStatus(204)} target="_blank">
              204
            </a>
          </li>
          <li>
            <a href={getCatStatus(301)} target="_blank">
              301
            </a>
          </li>
          <li>
            <a href={getCatStatus(302)} target="_blank">
              302
            </a>
          </li>
          <li>
            <a href={getCatStatus(304)} target="_blank">
              304
            </a>
          </li>
          <li>
            <a href={getCatStatus(400)} target="_blank">
              400
            </a>
          </li>
          <li>
            <a href={getCatStatus(401)} target="_blank">
              401
            </a>
          </li>
          <li>
            <a href={getCatStatus(403)} target="_blank">
              403
            </a>
          </li>
          <li>
            <a href={getCatStatus(404)} target="_blank">
              404
            </a>
          </li>
          <li>
            <a href={getCatStatus(409)} target="_blank">
              409
            </a>
          </li>
          <li>
            <a href={getCatStatus(410)} target="_blank">
              410
            </a>
          </li>
          <li>
            <a href={getCatStatus(418)} target="_blank">
              418
            </a>
          </li>
          <li>
            <a href={getCatStatus(500)} target="_blank">
              500
            </a>
          </li>
          <li>
            <a href={getCatStatus(501)} target="_blank">
              501
            </a>
          </li>
          <li>
            <a href={getCatStatus(502)} target="_blank">
              502
            </a>
          </li>
          <li>
            <a href={getCatStatus(503)} target="_blank">
              503
            </a>
          </li>
          <li>
            <a href={getCatStatus(504)} target="_blank">
              504
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
