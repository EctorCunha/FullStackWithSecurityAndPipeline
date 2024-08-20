import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import see from "../../assets/see.svg";
import "../../pages/CRUDPage/crudPage.css";

export function IconsCrud(props: any) {
  const { modalClickView, modalClickEdit, modalClickDelete } = props;

  return (
    <div className="icons">
      <img
        onClick={modalClickView}
        className="icon"
        src={see}
        alt="Icone de excluir"
      />
      <img
        onClick={modalClickEdit}
        className="icon"
        src={edit}
        alt="Icone de editar"
      />
      <img
        onClick={modalClickDelete}
        className="icon"
        src={trash}
        alt="Icone de excluir"
      />
    </div>
  );
}
