import { BackToHome } from "../../components/BackToHome";
import { FormLogin } from "../../components/FormLogin";

export function LoginPage() {
  return (
    <>
      <BackToHome />
      <div style={{width:"50vw", height:"60vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:"15vh"}}>
      <h1 style={{fontSize:"3rem", color:"#1e90ff", margin:"1.5rem"}}>Login</h1>
      <FormLogin />
      </div>
    </>
  );
}
