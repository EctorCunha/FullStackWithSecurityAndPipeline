import { BackToHome } from "../../components/BackToHome";
import { FormRegisterAcc } from "../../components/FormRegisterAcc";

export function RegisterAccPage() {
  return (
    <>
      <BackToHome />
      <div style={{width:"50vw", height:"60vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:"15vh"}}>
      <h1 style={{fontSize:"3rem", color:"#1e90ff", margin:"1.5rem"}}>Criar conta</h1>
      <FormRegisterAcc />
      </div>
    </>
  );
}
