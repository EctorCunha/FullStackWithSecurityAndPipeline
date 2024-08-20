import gif from '../../assets/confuse_.gif'
import './notFound.css'

export function NotFound (){
  return(
   <div className='notFound'>
    <img className='gifNotFound' src={gif} alt="Página não encontrada" />
   </div>
  )};
